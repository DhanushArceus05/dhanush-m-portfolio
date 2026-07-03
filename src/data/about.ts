import type { LucideIcon } from "lucide-react";
import { Sparkles, Code2, UserCircle2, Puzzle, Users, Compass } from "lucide-react";

export interface PersonalValue {
  label: string;
  icon: LucideIcon;
}

export const PERSONAL_VALUES: PersonalValue[] = [
  { label: "Continuous Learning", icon: Sparkles },
  { label: "Clean Code", icon: Code2 },
  { label: "User-Centered Design", icon: UserCircle2 },
  { label: "Problem Solving", icon: Puzzle },
  { label: "Collaboration", icon: Users },
  { label: "Curiosity", icon: Compass },
];

export const RECENT_WORK = [
  "Librix -- MERN full-stack library management platform",
  "Persona-Adaptive Customer Support Agent -- Gemini + RAG",
  "The Super App -- multi-feature React dashboard",
  "PharmAssist -- healthcare medication management app",
] as const;
