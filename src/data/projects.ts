export interface Project {
  slug: "librix" | "persona-agent" | "super-app" | "pharmassist";
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
    slug: "librix",
    name: "Librix",
    category: "Full Stack -- MERN -- Production",
    flagship: true,
    description:
      "A production-ready Library Management Platform built end-to-end with the MERN stack -- covering inventory, borrowing, and member administration in one system.",
    challenge:
      "Libraries need reliable, role-aware software: librarians manage inventory and transactions while members only see what's relevant to them, without compromising security.",
    solution:
      "Role-based access with secure JWT authentication, complete CRUD operations, a borrow/return workflow with real-time status tracking, and full search, filtering and pagination -- deployed to the cloud for production use.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "JWT", "REST APIs", "Render", "Vercel"],
    features: ["JWT Auth", "Role-Based Access", "MERN Stack", "MongoDB Atlas", "Cloud Deployment", "Full CRUD", "Responsive UI"],
    liveUrl: "https://librix-library-management-system.vercel.app/",
    githubUrl: "https://github.com/DhanushArceus05/librix-library-management-system",
    images: ["librix-dashboard", "librix-manage-books", "librix-members", "librix-borrow-history", "librix-profile"],
  },
  {
    slug: "persona-agent",
    name: "Persona-Adaptive Customer Support Agent",
    category: "Generative AI -- RAG -- LLM",
    flagship: false,
    description:
      "An AI support agent that reads who it's talking to and adapts tone and depth -- while staying grounded in a real knowledge base instead of improvising.",
    challenge:
      "Generic chatbot responses feel impersonal and often hallucinate facts. Support teams need answers that are both accurate and appropriately tailored.",
    solution:
      "RAG with ChromaDB and Gemini embeddings grounds every response in real documentation; real-time persona detection adapts tone; LangChain adds multi-turn memory; a confidence-scoring mechanism escalates low-confidence answers to a human.",
    techStack: ["Python", "Gemini 2.0 Flash", "LangChain", "ChromaDB", "Streamlit", "RAG", "Google Embeddings"],
    features: ["Generative AI", "RAG", "Gemini", "ChromaDB", "Streamlit", "NLP"],
    liveUrl: "https://persona-support-agentgit-05.streamlit.app/",
    githubUrl: "https://github.com/DhanushArceus05/persona-support-agent.git",
    images: ["persona-agent-chat", "persona-agent-conversation", "persona-agent-rag-response"],
  },
  {
    slug: "super-app",
    name: "The Super App",
    category: "React -- Dashboard",
    flagship: false,
    description:
      "A personalized multi-feature dashboard unifying weather, live news, a countdown timer, notes and genre-based movie recommendations in one React app.",
    challenge:
      "Juggling separate apps for weather, news and entertainment planning is friction most people don't need -- a single, fast, personalized hub is more useful.",
    solution:
      "Integrated OpenWeatherMap, GNews and OMDB behind authenticated, protected routes, using Zustand for lightweight global state and Axios for API orchestration, styled with Tailwind CSS.",
    techStack: ["React 18", "Vite", "Zustand", "Tailwind CSS", "Axios", "OpenWeatherMap API", "GNews API", "OMDB API"],
    features: ["React", "Dashboard", "Multiple APIs", "Zustand", "Tailwind"],
    liveUrl: "https://the-super-app-arceus.vercel.app/",
    githubUrl: "https://github.com/DhanushArceus05/The-Super-App.git",
    images: ["super-app-dashboard", "super-app-interests", "super-app-movies", "super-app-movie-modal"],
  },
  {
    slug: "pharmassist",
    name: "PharmAssist",
    category: "Healthcare -- React",
    flagship: false,
    description:
      "A medication management app that helps people organize prescriptions, stay on top of dosing schedules, and look up medicines with verified openFDA data.",
    challenge:
      "Missed doses and disorganized prescriptions are a real adherence problem, and medicine information from unverified sources can be actively unsafe.",
    solution:
      "Medication scheduling and adherence tracking backed by Firebase, openFDA integration for authoritative drug lookups, and Google OAuth for secure access across sessions.",
    techStack: ["React", "JavaScript", "Chakra UI", "Firebase", "Google OAuth", "openFDA API"],
    features: ["Healthcare", "Firebase", "Google OAuth", "openFDA", "React"],
    liveUrl: "https://verdant-melba-81c6c0.netlify.app/",
    githubUrl: "https://github.com/DhanushArceus05/PharmAssist.git",
    images: ["pharmassist-dashboard", "pharmassist-add-medication", "pharmassist-drug-lookup"],
  },
];
