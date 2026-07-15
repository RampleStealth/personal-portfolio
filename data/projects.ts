export type Project = {
  slug: string; number: string; name: string; category: string; summary: string; impact: string; accent: string;
  problem: string; solution: string; architecture: string[]; workflow: string[]; database: string; apis: string[]; challenges: string[]; lessons: string[];
};

export const projects: Project[] = [
  {
    slug: "support-intelligence", number: "01", name: "Support Intelligence", category: "AI Operations Platform", accent: "#C8D9CE",
    summary: "An agent-assisted triage system that turns unstructured customer signals into accountable product work.", impact: "42% less manual triage",
    problem: "Customer feedback arrived through five channels, but valuable patterns stayed buried in queues and spreadsheets.",
    solution: "Designed a reviewable automation layer that clusters intent, drafts actions, and preserves a human approval point for consequential changes.",
    architecture: ["Next.js operations console", "Event ingestion and job queue", "LLM routing with structured outputs", "Evaluation and audit pipeline"],
    workflow: ["Normalize incoming signal", "Classify intent and urgency", "Retrieve account context", "Draft action with confidence", "Route low-confidence work to review"],
    database: "Postgres stores source events, normalized entities, review decisions, and immutable model traces for auditability.",
    apis: ["Intercom webhooks", "Slack API", "Linear GraphQL", "OpenAI Responses API"],
    challenges: ["Preventing persuasive but incorrect summaries", "Maintaining context across duplicate reports", "Making automation useful without removing accountability"],
    lessons: ["Confidence is not a quality metric by itself", "Review queues need strong prioritization", "The best automation makes its reasoning inspectable"],
  },
  {
    slug: "revenue-copilot", number: "02", name: "Revenue Copilot", category: "Decision Support System", accent: "#E7D6B6",
    summary: "A decision workspace that gives account teams a clear next action from fragmented pipeline data.", impact: "3× faster account preparation",
    problem: "Revenue teams were spending too much time locating context before customer conversations and too little time acting on it.",
    solution: "Built a context-aware briefing flow that connects CRM data, recent activity, and internal knowledge into evidence-linked recommendations.",
    architecture: ["React workspace with streamed responses", "Entity graph and retrieval service", "Role-based access layer", "Feedback-led prompt evaluation"],
    workflow: ["Resolve account and stakeholder", "Retrieve permitted context", "Rank recent signals", "Generate cited briefing", "Capture useful / not useful feedback"],
    database: "Postgres and pgvector store account entities, permissions, source chunks, feedback, and retrieval provenance.",
    apis: ["HubSpot API", "Gmail API", "Google Drive API", "Anthropic API"],
    challenges: ["Respecting permissions in retrieval", "Avoiding stale recommendations", "Keeping the answer skimmable during live preparation"],
    lessons: ["Citations earn user trust", "Source freshness must be visible", "A great AI answer is often a great information hierarchy"],
  },
  {
    slug: "field-ops", number: "03", name: "Field Ops", category: "Workflow Automation", accent: "#D3D8EB",
    summary: "A mobile-first operations system that converts field observations into reliable, trackable follow-through.", impact: "61% faster issue closure",
    problem: "Operational issues found in the field were documented inconsistently, causing delayed ownership and incomplete resolution.",
    solution: "Created an offline-capable reporting flow with AI-assisted extraction, clear ownership, and an exception-first management view.",
    architecture: ["Progressive web application", "Offline sync and media processing", "Workflow orchestration", "Observability and alerting"],
    workflow: ["Capture photo or voice note", "Extract structured issue details", "Match location and owner", "Create traceable work item", "Escalate missed SLAs"],
    database: "Postgres manages work items, locations, attachments, service levels, and sync conflict history.",
    apis: ["Mapbox API", "Twilio API", "Linear API", "Vision model API"],
    challenges: ["Designing for unreliable connectivity", "Making extraction errors easy to correct", "Balancing speed with data completeness"],
    lessons: ["Offline is a product state, not an edge case", "Structured correction beats free-form editing", "Field workflows need clear recovery paths"],
  },
];

export function getProject(slug: string) { return projects.find((project) => project.slug === slug); }
