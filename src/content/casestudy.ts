/**
 * Avis Budget Group case study.
 *
 * CONFIDENTIALITY: architecture here is deliberately generalized. No table or
 * bucket names, endpoint formats, TTLs, model routing config, guardrail
 * threshold values, or live operational figures. Outcome metrics are limited to
 * those already present in the handout resume.
 * See docs/PRE-DEPLOY-CHECKLIST.md.
 */

export type DiagramStage = {
  label: string;
  detail: string;
  /** Rendered as a failure branch beneath the stage. */
  branch?: string;
};

export type Initiative = {
  id: string;
  index: string;
  title: string;
  summary: string;
  tech: string[];
  pipeline?: DiagramStage[];
  /** The engineering judgment. This is the differentiating content. */
  decisions: { title: string; body: string }[];
  /**
   * A margin note in Karthik's own voice.
   * DRAFT — written from what he described, and the one place on the site where
   * the copy is opinion rather than record. Needs his sign-off or rewrite
   * before this goes public.
   */
  aside?: string;
  outcomes?: string[];
};

export const caseStudy = {
  company: "Avis Budget Group",
  qualifier: "Fortune 500",
  role: "AI Enablement Intern",
  location: "Parsippany, NJ",
  period: "May – Aug 2026",

  intro:
    "Four end-to-end initiatives, from system architecture and API design through front-end and back-end implementation to production handoff. Designs presented to the Director and VP of Customer Experience; the platform demoed to the CEO.",

  headline: [
    { value: "170+", label: "engineering & product hours saved" },
    { value: "$1M+", label: "projected annual cost savings" },
    { value: "4", label: "initiatives shipped" },
  ],

  initiatives: [
    {
      id: "rag-search",
      index: "01",
      title: "Multilingual knowledge search service",
      summary:
        "A production RAG pipeline over brand documentation — end to end, architecture through deployment. Ask it a question in English, French, or Spanish and it returns a grounded answer with source citations. A two-layer cache (SHA-256 hash → DynamoDB) sits in front of retrieval: cache hits return in under 500ms and skip the model call entirely, cutting cost and latency on repeated queries. When the corpus can't support an answer, it says so and hands off. I owned the architecture, the API, and both ends of the stack.",
      tech: [
        "AWS Lambda",
        "API Gateway",
        "Amazon Bedrock",
        "Bedrock Guardrails",
        "DynamoDB",
        "CloudFront",
      ],
      pipeline: [
        { label: "Request", detail: "language + brand detected", branch: "" },
        { label: "Input guard", detail: "prompt-attack, PII, topics", branch: "blocked → rephrase" },
        { label: "Cache", detail: "hashed lookup", branch: "hit → skip retrieval" },
        { label: "Retrieval", detail: "multilingual embeddings", branch: "no match → escalate" },
        { label: "Generate", detail: "grounded in context only", branch: "" },
        { label: "Output guard", detail: "grounding + content check", branch: "ungrounded → fallback" },
        { label: "Response", detail: "answer + source citations", branch: "" },
      ],
      decisions: [
        {
          title: "How one index serves three languages",
          body: "The embedding model is multilingual, so a question asked in French and a passage written in English land close together in the same vector space. That means no translation step, no separate index per language, and one retrieval call regardless of what was asked. The model answers in whatever language the question arrived in. Expanding coverage to any new language is a content question, not a systems one.",
        },
        {
          title: "How answers stay scoped to the right brand",
          body: "Brand is derived from the request origin, not accepted from the client. A caller cannot reach another brand's content by changing a parameter. Every document carries its brand as metadata set at ingestion time, and retrieval filters on that tag. One index serves all brands, and onboarding a new one is a data change rather than a new deployment.",
        },
        {
          title: "Why the response is checked twice",
          body: "Filtering the request is not the same as trusting the response. The input pass rejects prompt attacks and sensitive data before anything reaches the model. The output pass verifies the answer is actually supported by the retrieved passages. Anything ungrounded becomes a handoff, not a response.",
        },
        {
          title: "Why it shipped with adversarial tests, not just unit tests",
          body: "Unit tests prove the happy path returns the right shape. They say nothing about what happens when someone tries to talk the system into ignoring its instructions. I validated end to end with both: unit suites for the request pipeline, and an adversarial suite for injection, PII leakage, and off-domain questions.",
        },
      ],
      aside:
        "One embedding space instead of one index per language. That single choice is why adding a language here is a content problem, not a project.",
      outcomes: [
        "Validated end to end with unit and adversarial test suites",
        "Positioned to serve millions of customers globally",
        "Projected $1M+ annual cost savings",
      ],
    },

    {
      id: "internal-assistant",
      index: "02",
      title: "Internal AI assistant",
      summary:
        "An employee-facing infosec assistant built on AWS, with AWS AgentCore at the core. Rather than giving the model full control, the architecture keeps it constrained: retrieval pulls the top 25 chunks from the Knowledge Base based on the live config, then passes them to AgentCore — which wraps the Claude call, enforces guardrails, handles multi-turn session memory, and formats the response. Admins manage everything through a web console. Uploads go straight to S3, a Lambda triggers KB resync, and new content is live without a deploy. Employees log in with SSO and chat. Admins get the pipeline. Users get the interface.",
      tech: [
        "Bedrock AgentCore",
        "Azure AD SSO/MFA",
        "SSE streaming",
        "DynamoDB",
      ],
      pipeline: [
        { label: "Draft", detail: "admin edits prompt", branch: "safety scan → reject" },
        { label: "Test", detail: "against the draft, live", branch: "" },
        { label: "Approve", detail: "cannot skip testing", branch: "" },
        { label: "Publish", detail: "re-verified, versioned", branch: "zero downtime" },
      ],
      decisions: [
        {
          title: "Why a system prompt is treated as executable code",
          body: "It is attack surface. Anything an admin writes passes two independent scans before it is stored — a pattern denylist for known jailbreak shapes, and a model-based review for what the patterns miss. If either objects, nothing is written at all.",
        },
        {
          title: "Why you cannot approve what you have not tested",
          body: "The console gates each step on the previous one: save, then test against the draft, then approve, then publish. Approval is re-verified at publish time rather than trusted from earlier, and editing after approval resets the gate. Config changes go live without a restart, and if the config store is unreachable the service falls back to a known-good default with a visible warning instead of failing.",
        },
        {
          title: "Why follow-up questions get rewritten before search",
          body: "\"How do those two relate?\" is meaningless to a search index. Before retrieval, a small fast model resolves pronouns and references against the recent conversation into a standalone question. It is skipped entirely on the first turn, so the common case costs nothing.",
        },
      ],
      aside:
        "Gating publish behind a test felt like friction until you imagine the alternative: an untested prompt going live to the whole company.",
      outcomes: [
        "Multi-turn session memory with real-time streaming responses",
        "Zero-downtime draft → test → approve → publish config pipeline",
      ],
    },

    {
      id: "nl-analytics",
      index: "03",
      title: "Natural-language-to-SQL analytics engine",
      summary:
        "A self-correcting agent loop that turns a plain-English question into a table, a written summary, and a chart — no SQL required. The agent plans, reads a schema catalog (25 tables across 2 systems, PII-flagged column by column), writes SQL, validates it, executes against PGlite, then summarizes. Evaluated on a 44-question gold set — 44/44 correct. Teams across Customer Experience, Operations, and Customer Success can use it. Customer PII is structurally incapable of reaching the output.",
      tech: ["Amazon Bedrock", "Claude Sonnet", "Next.js", "PGlite", "SQL", "Schema catalog", "Vercel AI SDK"],
      pipeline: [
        { label: "Question", detail: "plain English", branch: "" },
        { label: "Schema grounding", detail: "25 tables, PII-flagged catalog", branch: "PII fields excluded" },
        { label: "SQL synthesis", detail: "agent loop, self-correcting", branch: "" },
        { label: "Execute", detail: "PGlite, validated joins", branch: "" },
        { label: "Result", detail: "table + summary + chart", branch: "" },
      ],
      decisions: [
        {
          title: "Why PII is removed from the schema, not filtered from the output",
          body: "A filter is something you can forget to apply. Sensitive customer fields were excluded from the schema the model can see at all, and the remaining sensitive fields were restricted to aggregate use only. The model cannot select a column it was never shown.",
        },
        {
          title: "Why I verified against production instead of mocks",
          body: "I checked the schema column by column against real production data and found seven column-name mismatches that mock-based testing had never surfaced. Every one would have been a runtime failure in front of a user. I also proved the composite join between the two source systems end to end on real matched cases rather than assuming the key held.",
        },
        {
          title: "Why I built a scored question set before trusting it",
          body: "A text-to-SQL system that is right most of the time is not usable, because you cannot tell which time you are in. I built a gold set of business questions covering every major table category and scored the engine against it — 44 of 44 correct. That number is the reason anyone was willing to rely on the tool.",
        },
      ],
      aside:
        "Seven column-name mismatches. Mock data would have let every one of them ship, and each would have failed in front of a user.",
      outcomes: [
        "Data turnaround reduced from days to seconds",
        "100% accuracy on the evaluation set (44/44)",
        "50 engineering + 20 product hours saved",
        "Delivered as production-ready, well-commented code with docs, schema, and runbook",
      ],
    },

    {
      id: "jira-assistant",
      index: "04",
      title: "AI delivery assistant",
      summary:
        "Delivery tracking that reports itself. Engineers get a personalized morning digest of what is overdue, due today, and coming up; managers get a weekly board-health snapshot. Deployed organization-wide.",
      tech: ["Rovo AI workflows", "Jira automation", "Scheduled triggers"],
      pipeline: [
        { label: "Scheduled scan", detail: "daily + weekly", branch: "" },
        { label: "Group by owner", detail: "per-assignee lookup", branch: "" },
        { label: "Categorize", detail: "overdue / today / upcoming", branch: "" },
        { label: "Deliver", detail: "personalized digest", branch: "live dashboard" },
      ],
      decisions: [
        {
          title: "Why the report is pushed, not published",
          body: "A dashboard only helps the people who remember to open it. Routing each engineer only their own items, in their inbox, before the day starts, is what actually changed behaviour — the live dashboard exists for drill-down, not as the primary surface.",
        },
      ],
      aside:
        "The least sophisticated thing I built and one of the most used. A schedule, a query, an email.",
      outcomes: ["Deployed to production for organization-wide adoption"],
    },
  ] satisfies Initiative[],

  research: {
    title: "AI visibility research",
    forWhom: "Delivered to the VP of Customer Experience",
    body: "Alongside the engineering work, I joined the weekly Customer Experience meetings. I took the initiative to investigate how AI is reshaping the way customers choose a car rental provider — ran a competitive analysis across the company and its competitors using public customer data, and delivered a written report with findings and recommendations. I also thought a real-time view of public customer sentiment would be useful for the team, so I built a prototype social listening dashboard that aggregates reviews across Google, Trustpilot, the App Store, Google Play, and Reddit — surfacing sentiment trends and billing dispute patterns in one place.",
    note: "",
    liveLink: "https://cx-dashboard-backend-production.up.railway.app/",
    liveLinkLabel: "View the prototype dashboard",
  },
} as const;
