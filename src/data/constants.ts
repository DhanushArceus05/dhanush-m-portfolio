// Central source of truth for personal/brand data.
// Facts are sourced from the resume (primary) with two explicit corrections
// supplied by Dhanush, which take precedence over both the resume and the
// original master-prompt spec:
//   1. LinkedIn URL -> https://www.linkedin.com/in/dhanush-m-arceus05
//   2. Education   -> B.Sc. Computer Science, Apollo Arts and Science
//                      College, University of Madras

export const PERSONAL = {
  name: "Dhanush M",
  headline: "AI Engineer | Full Stack Developer | MERN Stack Developer | Data Science Enthusiast",
  tagline: "Building Intelligent AI Systems & Modern Full-Stack Applications.",
  mission:
    "Create software that combines Artificial Intelligence, Data Science, and modern Full Stack engineering to solve real-world problems.",
  heroDescription:
    "I build intelligent AI-powered systems and production-ready full-stack web applications using modern JavaScript technologies, Python, and cloud services. I enjoy transforming ideas into reliable, scalable software with great user experiences.",
  location: "Chennai, India",
  email: "arceusdhanush05@gmail.com",
  phone: "+91 9123514328",
} as const;

export const TYPING_TITLES = [
  "AI Engineer",
  "Full Stack Developer",
  "MERN Stack Developer",
  "Data Science Enthusiast",
] as const;

export const LINKS = {
  github: "https://github.com/DhanushArceus05",
  // Corrected per explicit instruction -- overrides resume's alternate URL.
  linkedin: "https://www.linkedin.com/in/dhanush-m-arceus05",
  email: `mailto:${PERSONAL.email}`,
  resumePdf: "/resume/Dhanush_M_AI_Engineer_Resume.pdf",
} as const;

export const EDUCATION = {
  degree: "B.Sc. Computer Science",
  institution: "Apollo Arts and Science College",
  university: "University of Madras",
  period: "Aug 2022 -- May 2025",
} as const;
