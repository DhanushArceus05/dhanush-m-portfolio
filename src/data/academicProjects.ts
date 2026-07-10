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
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Recommendation System",
      "Data Analysis",
    ],
  },
  {
    name: "Time Series Sales Forecasting",
    category: "Academic -- Time Series",
    description:
      "Store-level sales forecasting using ARIMA and SARIMA models on the Walmart dataset, with feature analysis, forecasting, evaluation, and a professional report covering methodology and results.",
    tech: [
      "Python",
      "Pandas",
      "ARIMA",
      "SARIMA",
      "Time Series Forecasting",
      "Matplotlib",
    ],
  },
  {
    name: "Energy Consumption Prediction",
    category: "Academic -- Machine Learning",
    description:
      "Developed regression models for energy consumption prediction, comparing algorithms and evaluating performance with statistical metrics alongside feature engineering and hypothesis testing.",
    tech: [
      "Python",
      "Scikit-learn",
      "Regression",
      "Machine Learning",
      "Feature Engineering",
      "Statistical Analysis",
    ],
  },
  {
    name: "Sales Forecasting & Customer Segmentation",
    category: "Academic -- Final Capstone Project",
    description:
      "Completed a comprehensive machine learning capstone solving two real-world business problems: Walmart weekly sales forecasting and online retail customer segmentation. Built forecasting models, engineered RFM features, applied K-Means clustering, generated business insights, and delivered reusable machine learning pipelines with technical documentation.",
    tech: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Random Forest",
      "Linear Regression",
      "K-Means",
      "RFM Analysis",
      "PCA",
      "Joblib",
    ],
  },
];