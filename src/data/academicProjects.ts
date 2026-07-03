export interface AcademicProject {
  name: string;
  category: string;
  description: string;
  tech: string[];
  comingSoon?: boolean;
}

export const ACADEMIC_PROJECTS: AcademicProject[] = [
  {
    name: "Netflix Recommendation Analysis",
    category: "Academic -- Recommendation System",
    description:
      "Completed as part of the Professional Certification Program in AI & Data Science through Intellipaat. Performed recommendation analysis with exploratory data analysis, feature engineering, and recommendation techniques, delivered as a full technical report.",
    tech: ["Python", "Pandas", "NumPy", "Scikit-learn", "Recommendation System", "Data Analysis"],
  },
  {
    name: "Walmart Sales Forecasting",
    category: "Academic -- Time Series",
    description:
      "Store-level sales forecasting using ARIMA and SARIMA models on the Walmart dataset, with feature analysis, forecasting, evaluation, and a professional report on methodology and results.",
    tech: ["Python", "Pandas", "ARIMA", "SARIMA", "Time Series Forecasting", "Matplotlib"],
  },
  {
    name: "Energy Consumption Prediction",
    category: "Machine Learning",
    description:
      "Regression models for energy consumption prediction, comparing algorithms and evaluating performance with statistical metrics alongside feature engineering and hypothesis testing.",
    tech: ["Python", "Scikit-learn", "Regression", "Machine Learning", "Feature Engineering"],
  },
  {
    name: "AI Resume Analyzer",
    category: "Coming Soon",
    description:
      "An AI-powered resume analysis platform providing ATS scoring, skill-gap analysis, AI suggestions, recruiter insights, and resume optimization.",
    tech: ["Python", "NLP", "LLM", "ATS Scoring"],
    comingSoon: true,
  },
];
