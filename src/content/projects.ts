export type Project = {
  id: string;
  title: string;
  year: string;
  tagline: string;
  body: string;
  tech: string[];
  image?: string;
  github?: string;
  live?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "interviewer-ai",
    title: "Interviewer.ai",
    year: "2026",
    tagline: "Five agents that run a technical interview and remember how you did last time.",
    body: "A five-agent LangGraph pipeline (Intake, Planner, Interviewer, Evaluator, Memory) with schema-validated contracts between agents, so a malformed handoff fails loudly instead of silently corrupting the next stage. Each agent has its own evaluation harness. Cross-session memory tracks which weaknesses recur, so the next interview targets them. Full-stack serverless: React on CloudFront and S3, FastAPI on Lambda behind API Gateway, Cognito auth, complete unit test coverage.",
    tech: ["LangGraph", "Amazon Bedrock", "FastAPI", "React", "DynamoDB", "AWS Lambda", "Cognito"],
    featured: true,
  },
  {
    id: "avis-internal-assistant",
    title: "Employee AI Assistant",
    year: "2026",
    tagline: "Infosec chatbot where admins control everything through a web UI and employees just chat.",
    body: "Built for Avis Budget Group. Admins get a web console to upload documents, configure the assistant, and publish prompts through a draft-test-approve-publish pipeline. Every document upload hits S3 directly; a Lambda triggers a Bedrock Knowledge Base resync so new content is live in retrieval without a deploy. Employees authenticate with Azure AD SSO and chat with the assistant. The two sides of the system are completely separated by design.",
    tech: ["Amazon Bedrock", "AWS Lambda", "S3", "Bedrock Knowledge Bases", "Azure AD SSO", "DynamoDB", "Python"],
    featured: true,
  },
  {
    id: "deep-research",
    title: "Deep Research Agent Team",
    year: "2025",
    tagline: "A planner–executor–validator loop that does the reading for you.",
    body: "A modular multi-agent research system where a planner decomposes a topic, executors gather sources, and a validator checks the synthesis before it is returned. Built with retry logic, exponential backoff, and output caching so a single failed tool call doesn't sink an entire run. Cut manual research effort by 70%.",
    tech: ["CrewAI", "LangGraph", "OpenAI APIs", "Pinecone", "Python"],
    image: "/images/projects/deep-research-team.webp",
    github: "https://github.com/karthikreddyyalala/Deep-Research-Agent-Team-",
    featured: true,
  },
  {
    id: "trading-floor",
    title: "Autonomous Trading Floor",
    year: "2025",
    tagline: "Four agents that argue about a trade before making it.",
    body: "A simulated trading desk where an analyst, a trader, a risk manager, and a critic evaluate the same position and have to reach a decision. Wired across six MCP servers exposing 44 tools, which made the interesting problem tool routing rather than prompting.",
    tech: ["MCP", "CrewAI", "Docker", "OpenAI APIs", "Python"],
    github: "https://github.com/karthikreddyyalala/Autonomous-Trading-Floor",
    featured: true,
  },
  {
    id: "chatify",
    title: "Chatify",
    year: "2024",
    tagline: "Real-time messaging, built from the socket up.",
    body: "A full-stack messaging application with bi-directional event-based communication over Socket.io, on a Node and Express backend. Built to understand connection lifecycle, room state, and reconnection handling rather than to reinvent a chat app.",
    tech: ["Node.js", "Express", "Socket.io", "MongoDB"],
    image: "/images/projects/chatify.webp",
    github: "https://github.com/karthikreddyyalala",
    featured: false,
  },
  {
    id: "stock-predictor",
    title: "Stock Price Predictor",
    year: "2024",
    tagline: "An LSTM that beat the linear baseline by 12%.",
    body: "A sequence model for price forecasting over 50k+ data points, with normalization, windowing, and hyperparameter tuning. The useful lesson was in the evaluation: a model that looks good on a chart can still be worse than the baseline you didn't bother to run.",
    tech: ["Python", "TensorFlow", "Pandas", "Matplotlib"],
    github: "https://github.com/karthikreddyyalala/Stock-Price-Predictor",
    featured: false,
  },
];
