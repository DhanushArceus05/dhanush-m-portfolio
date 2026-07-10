import type { LucideIcon } from "lucide-react";
import {
  Pill,
  LayoutDashboard,
  Film,
  TrendingUp,
  BarChart3,
  MessagesSquare,
  BookMarked,
  Sparkles,
} from "lucide-react";

export interface RoadmapMilestone {
  label: string;
  tag: string;
  icon: LucideIcon;
  latest?: boolean;
}

export const ROADMAP: RoadmapMilestone[] = [
  {
    label: "PharmAssist",
    tag: "Healthcare App",
    icon: Pill,
  },
  {
    label: "The Super App",
    tag: "React Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Netflix Recommendation Analysis",
    tag: "Academic -- ML",
    icon: Film,
  },
  {
    label: "Time Series Sales Forecasting",
    tag: "Academic -- Time Series",
    icon: TrendingUp,
  },
  {
    label: "Sales Forecasting & Customer Segmentation",
    tag: "Academic -- Final Capstone",
    icon: BarChart3,
  },
  {
    label: "Persona-Adaptive Customer Support Agent",
    tag: "Generative AI -- RAG",
    icon: MessagesSquare,
  },
  {
    label: "Librix",
    tag: "Flagship -- MERN",
    icon: BookMarked,
  },
  {
    label: "AI Resume Analyzer",
    tag: "Flagship -- AI SaaS",
    icon: Sparkles,
    latest: true,
  },
];