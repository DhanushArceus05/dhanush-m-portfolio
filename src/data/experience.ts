import type { LucideIcon } from "lucide-react";
import { Briefcase, GraduationCap } from "lucide-react";

export interface ExperienceEntry {
  icon: LucideIcon;
  title: string;
  organization: string;
  period: string;
  highlights: string[];
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    icon: Briefcase,
    title: "MERN Stack Developer Intern",
    organization: "CodTech IT Solutions Pvt. Ltd.",
    period: "Feb 2025 -- Apr 2025",
    highlights: [
      "Built RESTful APIs with Node.js, Express.js and MongoDB, securing endpoints with JWT authentication.",
      "Developed responsive React interfaces with clean, maintainable component architecture.",
      "Integrated Socket.io for a real-time chat feature supporting concurrent multi-user sessions.",
      "Collaborated in a 5-member Agile/Scrum team through daily stand-ups and sprint reviews.",
    ],
  },
  {
    icon: GraduationCap,
    title: "AI & Data Science Certification",
    organization: "Intellipaat, in collaboration with IIT Roorkee",
    period: "Coursework & Capstone",
    highlights: [
      "Completed structured coursework in Machine Learning, Data Science, and Python for AI.",
      "Applied Time Series Forecasting and Recommendation Systems techniques in project work.",
      "Completed capstone project and placement assessments; certificate issuance in progress.",
    ],
  },
];
