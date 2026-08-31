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
        "A public-facing answer service over brand documentation. A customer asks a question in English, French, or Spanish and gets a grounded answer with source citations — or an honest handoff when the corpus can't support one. I owned the architecture, the API, and both ends of the stack.",
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
          title: "Why retrieval crosses languages instead of filtering by it",
          body: "A strict per-language filter returned nothing for French and Spanish — the corpus was overwhelmingly English. Rather than ship an empty experience, I let multilingual embeddings retrieve the best English passages and had the model answer in the language the question was asked in. I documented the corpus size at which symmetric per-language filtering should be switched back on, so whoever inherits it knows when to change it and why.",
        },
        {
          title: "Why the response is checked twice",
          body: "Filtering the request is not the same as trusting the response. The input pass rejects prompt attacks and sensitive data before anything reaches the model. The output pass verifies the answer is actually supported by the retrieved passages — an ungrounded answer never reaches the customer, it becomes a handoff instead.",
        },
        {
          title: "Why it shipped with adversarial tests, not just unit tests",
          body: "Unit tests prove the happy path returns the right shape. They say nothing about what happens when someone tries to talk the system into ignoring its instructions. I validated end to end with both: unit suites for the request pipeline, and an adversarial suite for injection, PII leakage, and off-domain questions.",
        },
      ],
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
        "An employee-facing assistant over internal documentation, with SSO, streaming responses, and an admin console where a non-engineer can safely change the system's behaviour without a deploy.",
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
        "Contact Center staff type a plain-English business question and get back a table, a written summary, and a chart. No SQL. The engine joins case-management data against customer data automatically, and customer PII is structurally incapable of reaching the output.",
      tech: ["Amazon Bedrock", "Python", "SQL", "Schema-level PII controls"],
      pipeline: [
        { label: "Question", detail: "plain English", branch: "" },
        { label: "Schema grounding", detail: "25 tables, 2 systems", branch: "PII fields excluded" },
        { label: "Query synthesis", detail: "validated composite joins", branch: "" },
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
      outcomes: ["Deployed to production for organization-wide adoption"],
    },
  ] satisfies Initiative[],

  research: {
    title: "AI visibility research",
    forWhom: "Delivered to the VP of Customer Experience",
    body: "Beyond the build work, I sat in the weekly Customer Experience meetings, where the VP asked me to investigate how AI is changing the way customers decide which provider to use. I ran a competitive analysis across the company and its competitors, drawing on public customer sentiment, and delivered a written report with findings and recommendations.",
    note: "Findings are internal and are not reproduced here.",
  },
} as const;
