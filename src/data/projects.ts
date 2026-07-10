export interface Project {
  slug:
    | "ai-resume-analyzer"
    | "persona-agent"
    | "librix"
    | "super-app"
    | "pharmassist";
  name: string;
  category: string;
  flagship: boolean;
  description: string;
  challenge: string;
  solution: string;
  techStack: string[];
  features: string[];
  liveUrl: string;
  githubUrl: string;
  /** Base filenames (no extension) in public/images/projects/, first = cover image. */
  images: string[];
}

export const PROJECTS: Project[] = [
  {
    slug: "ai-resume-analyzer",
    name: "AI Resume Analyzer",
    category: "Generative AI -- Full Stack SaaS -- Production",
    flagship: true,
    description:
      "A production-ready AI-powered SaaS platform that evaluates resumes from both recruiter and Applicant Tracking System perspectives, combining deterministic scoring with Google Gemini AI.",
    challenge:
      "Job seekers often receive generic resume advice without understanding how recruiters or ATS platforms actually evaluate their applications. Existing tools may provide a single score, but rarely offer explainable feedback, job-specific matching, actionable rewrites, interview preparation, and downloadable reporting in one secure platform.",
    solution:
      "Built a full-stack SaaS application that parses PDF and DOCX resumes, generates recruiter-style AI feedback, calculates deterministic ATS scores, compares resumes against job descriptions, rewrites weak sections, creates personalized interview questions, and exports professional PDF reports. The platform includes secure JWT authentication, user-isolated data, MongoDB Atlas persistence, production security, and cloud deployment through Vercel and Render.",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google Gemini AI",
      "JWT",
      "Multer",
      "pdf-parse",
      "Mammoth",
      "jsPDF",
      "Render",
      "Vercel",
    ],
    features: [
      "AI Resume Analysis",
      "ATS Scoring",
      "JD Matching",
      "Resume Rewrite",
      "Interview Questions",
      "PDF Reports",
      "JWT Authentication",
      "Resume Parsing",
      "Production Deployment",
    ],
    liveUrl: "https://ai-resume-analyzer-version-one.vercel.app",
    githubUrl: "https://github.com/DhanushArceus05/ai-resume-analyzer",
    images: [
      "ai-resume-analyzer-landing",
      "ai-resume-analyzer-dashboard",
      "ai-resume-analyzer-analysis",
      "ai-resume-analyzer-ats",
      "ai-resume-analyzer-jd-match",
    ],
  },
  {
    slug: "persona-agent",
    name: "Persona-Adaptive Customer Support Agent",
    category: "Generative AI -- RAG -- LLM",
    flagship: false,
    description:
      "An intelligent support agent that detects user personas, adapts response tone and technical depth, and grounds every answer in a real knowledge base.",
    challenge:
      "Generic chatbot responses often feel impersonal, fail to match the user's level of expertise, and can hallucinate unsupported information. Customer support systems need answers that are accurate, context-aware, and appropriately tailored.",
    solution:
      "Implemented a retrieval-augmented generation pipeline using ChromaDB and Gemini embeddings to ground responses in trusted documentation. Added persona detection for technical experts, frustrated users, and business executives, along with multi-turn conversational memory, confidence scoring, and human escalation for low-confidence responses.",
    techStack: [
      "Python",
      "Gemini 2.0 Flash",
      "LangChain",
      "ChromaDB",
      "Streamlit",
      "RAG",
      "Google Embeddings",
      "Prompt Engineering",
    ],
    features: [
      "Persona Detection",
      "Retrieval-Augmented Generation",
      "Gemini AI",
      "ChromaDB",
      "Multi-Turn Memory",
      "Confidence Scoring",
      "Human Escalation",
      "Streamlit",
    ],
    liveUrl: "https://persona-support-agentgit-05.streamlit.app/",
    githubUrl: "https://github.com/DhanushArceus05/persona-support-agent.git",
    images: [
      "persona-agent-chat",
      "persona-agent-conversation",
      "persona-agent-rag-response",
    ],
  },
  {
    slug: "librix",
    name: "Librix",
    category: "Full Stack -- MERN -- Production",
    flagship: false,
    description:
      "A production-ready library management platform built end-to-end with the MERN stack, covering inventory, borrowing, returns, member administration, and role-based access.",
    challenge:
      "Libraries need secure and reliable software that gives librarians full control over inventory and member operations while ensuring that members can only access information and actions relevant to them.",
    solution:
      "Developed role-based access with secure JWT authentication, complete book and member management, borrow-and-return workflows, real-time availability tracking, search, filtering, pagination, and protected dashboards. The system is connected to MongoDB Atlas and deployed through Render and Vercel.",
    techStack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "bcrypt",
      "REST APIs",
      "Render",
      "Vercel",
    ],
    features: [
      "JWT Authentication",
      "Role-Based Access",
      "Book Management",
      "Member Management",
      "Borrow and Return Workflow",
      "Search and Filtering",
      "MongoDB Atlas",
      "Cloud Deployment",
    ],
    liveUrl: "https://librix-library-management-system.vercel.app/",
    githubUrl:
      "https://github.com/DhanushArceus05/librix-library-management-system",
    images: [
      "librix-dashboard",
      "librix-manage-books",
      "librix-members",
      "librix-borrow-history",
      "librix-profile",
    ],
  },
  {
    slug: "super-app",
    name: "The Super App",
    category: "React -- Personalized Dashboard",
    flagship: false,
    description:
      "A personalized multi-feature dashboard combining weather, live news, countdown tools, notes, entertainment preferences, and movie recommendations in one React application.",
    challenge:
      "Users often switch between several separate applications for weather, news, planning, notes, and entertainment discovery, creating unnecessary friction and fragmented experiences.",
    solution:
      "Integrated weather, news, and movie APIs into a unified dashboard with protected navigation, category-based personalization, responsive layouts, lightweight global state through Zustand, and API orchestration with Axios.",
    techStack: [
      "React 18",
      "Vite",
      "Zustand",
      "Tailwind CSS",
      "Axios",
      "OpenWeatherMap API",
      "GNews API",
      "OMDB API",
    ],
    features: [
      "Personalized Dashboard",
      "Weather Integration",
      "Live News",
      "Movie Recommendations",
      "Countdown Timer",
      "Notes",
      "Zustand State Management",
      "Responsive UI",
    ],
    liveUrl: "https://the-super-app-arceus.vercel.app/",
    githubUrl: "https://github.com/DhanushArceus05/The-Super-App.git",
    images: [
      "super-app-dashboard",
      "super-app-interests",
      "super-app-movies",
      "super-app-movie-modal",
    ],
  },
  {
    slug: "pharmassist",
    name: "PharmAssist",
    category: "Healthcare -- React -- Firebase",
    flagship: false,
    description:
      "A medication management application that helps users organize prescriptions, track schedules, monitor adherence, and access verified medicine information.",
    challenge:
      "Missed medication doses, disorganized prescriptions, and unreliable medicine information can create serious adherence and safety problems for patients.",
    solution:
      "Built medication scheduling and adherence tracking with Firebase persistence, secure Google OAuth access, daily medication workflows, and openFDA integration for reliable drug information.",
    techStack: [
      "React",
      "JavaScript",
      "Chakra UI",
      "Firebase",
      "Google OAuth",
      "openFDA API",
    ],
    features: [
      "Medication Scheduling",
      "Adherence Tracking",
      "Google OAuth",
      "Firebase",
      "Drug Lookup",
      "openFDA Integration",
      "Responsive UI",
    ],
    liveUrl: "https://verdant-melba-81c6c0.netlify.app/",
    githubUrl: "https://github.com/DhanushArceus05/PharmAssist.git",
    images: [
      "pharmassist-dashboard",
      "pharmassist-add-medication",
      "pharmassist-drug-lookup",
    ],
  },
];