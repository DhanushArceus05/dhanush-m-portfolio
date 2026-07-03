import type { LucideIcon } from "lucide-react";
import {
  Code2,
  Server,
  Database,
  BrainCircuit,
  Wrench,
  Braces,
  FileCode2,
  Palette,
  Layers,
  Network,
  ServerCog,
  Boxes,
  Sparkles,
  MessagesSquare,
  Bot,
  Workflow,
  LineChart,
  Sigma,
  GitBranch,
  Github,
  Send,
  Flame,
  Cloud,
  MonitorSmartphone,
} from "lucide-react";

export type ProficiencyLevel = "Proficient" | "Comfortable" | "Familiar";

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: ProficiencyLevel;
}

export interface SkillCategory {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", icon: Boxes, level: "Proficient" },
      { name: "TypeScript", icon: FileCode2, level: "Comfortable" },
      { name: "JavaScript", icon: Braces, level: "Proficient" },
      { name: "HTML5", icon: Layers, level: "Proficient" },
      { name: "CSS3", icon: Palette, level: "Proficient" },
      { name: "Tailwind CSS", icon: Palette, level: "Proficient" },
      { name: "Chakra UI", icon: Layers, level: "Comfortable" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", icon: ServerCog, level: "Proficient" },
      { name: "Express.js", icon: Network, level: "Proficient" },
      { name: "REST API Development", icon: Send, level: "Proficient" },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    skills: [
      { name: "MongoDB", icon: Database, level: "Proficient" },
      { name: "MongoDB Atlas", icon: Cloud, level: "Comfortable" },
      { name: "SQL", icon: Sigma, level: "Comfortable" },
    ],
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
    skills: [
      { name: "Python", icon: Braces, level: "Proficient" },
      { name: "Machine Learning", icon: LineChart, level: "Comfortable" },
      { name: "Generative AI", icon: Sparkles, level: "Comfortable" },
      { name: "RAG", icon: Workflow, level: "Comfortable" },
      { name: "Google Gemini API", icon: Bot, level: "Comfortable" },
      { name: "LangChain", icon: MessagesSquare, level: "Comfortable" },
      { name: "ChromaDB", icon: Database, level: "Comfortable" },
      { name: "Data Science", icon: LineChart, level: "Comfortable" },
      { name: "Pandas", icon: Sigma, level: "Comfortable" },
      { name: "NumPy", icon: Sigma, level: "Comfortable" },
      { name: "Scikit-learn", icon: BrainCircuit, level: "Comfortable" },
    ],
  },
  {
    title: "Tools",
    icon: Wrench,
    skills: [
      { name: "Git", icon: GitBranch, level: "Proficient" },
      { name: "GitHub", icon: Github, level: "Proficient" },
      { name: "Postman", icon: Send, level: "Comfortable" },
      { name: "Firebase", icon: Flame, level: "Comfortable" },
      { name: "Vercel", icon: Cloud, level: "Proficient" },
      { name: "Render", icon: Cloud, level: "Comfortable" },
      { name: "Streamlit", icon: MonitorSmartphone, level: "Comfortable" },
      { name: "VS Code", icon: FileCode2, level: "Proficient" },
    ],
  },
];
