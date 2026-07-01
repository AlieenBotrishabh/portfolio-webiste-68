export const resumeData = {
  name: "Rishabh Kumar",
  role: "Full-Stack Engineer & ML Enthusiast",
  email: "rishabhk1324@gmail.com",
  location: "Mohali, India",
  phone: "+91-XXXXXXXXXX",
  links: {
    linkedin: "https://linkedin.com/in/rishabh-kumar",
    github: "https://github.com/rishabh-kumar",
    portfolio: "#",
  },
  objective:
    "Software Engineer proficient in JavaScript, React, Node.js, Express.js, MongoDB, MySQL, and Docker, seeking full-time software engineering roles.",
  summary:
    "Passionate about building scalable, responsive, and user-friendly applications with strong foundations in full-stack development and machine learning.",
  bio: "I'm a final-year Computer Science student at Chandigarh University specializing in IoT, with a deep passion for crafting production-grade web applications and intelligent ML pipelines. I thrive at the intersection of clean UI and robust backend architecture — turning complex problems into elegant, maintainable systems.",
  stats: [
    { label: "Projects", value: "4+" },
    { label: "Core Focus", value: "Full Stack + ML" },
    { label: "Availability", value: "Open to Roles" },
  ],
  skills: [
    {
      category: "Programming Languages",
      items: ["C", "C++", "Java", "JavaScript", "TypeScript", "Python"],
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "TailwindCSS", "React.js", "Redux", "Vite"],
    },
    {
      category: "Backend",
      items: [
        "Node.js",
        "Express.js",
        "Flask",
        "RESTful APIs",
        "Cloudinary",
        "JWT",
        "Nodemailer",
      ],
    },
    {
      category: "DevOps & Tools",
      items: ["Docker", "Git", "GitHub", "Vercel", "Linux"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "SQLite"],
    },
    {
      category: "Machine Learning",
      items: [
        "TensorFlow / Keras",
        "CNN",
        "LSTM",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Hugging Face",
        "OpenCV",
      ],
    },
  ],
  projects: [
    {
      title: "Stock Market Prediction Application",
      year: "2024",
      summary:
        "Full-stack stock forecasting system with React, Node/Express, Python ML pipelines, feature engineering, LSTM modeling, and Dockerized deployment.",
      description:
        "Built an end-to-end stock market analysis and prediction platform. The backend runs a Python ML pipeline that downloads historical OHLCV data, engineers 20+ technical indicators (RSI, MACD, Bollinger Bands), and feeds them into a stacked LSTM model. Predictions are served via Express REST APIs and visualized in React with Recharts. The entire stack is containerized with Docker Compose for reproducible deployments.",
      stack: [
        "React.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Recharts",
        "TensorFlow/Keras",
        "Docker",
        "Python",
      ],
      githubUrl: "https://github.com/AlieenBotrishabh/stock-market-prediction",
      liveUrl: null,
      highlight: true,
    },
    {
      title: "Brain Tumor Detection using CNN",
      year: "2024",
      summary:
        "Deep learning MRI classification app with Flask, model hosting on Hugging Face, preprocessing, augmentation, and real-time predictions.",
      description:
        "Developed a convolutional neural network that classifies brain MRI scans into four tumor categories (glioma, meningioma, pituitary, no tumor) with 95%+ accuracy. The trained model is hosted on Hugging Face Hub and served through a Flask REST API with image preprocessing and augmentation. Includes a simple upload UI for real-time predictions.",
      stack: [
        "Python",
        "TensorFlow/Keras",
        "Flask",
        "Hugging Face",
        "OpenCV",
        "NumPy",
      ],
      githubUrl: "https://github.com/AlieenBotrishabh/Brain-Tumor-Detection",
      liveUrl: null,
      highlight: true,
    },
    {
      title: "Sweet Shop Management System",
      year: "2023",
      summary:
        "Modular sweet shop system for inventory, product, and sales workflows with a clean React + Node backend and SQLite support.",
      description:
        "Designed a full-featured management system for a sweet shop business covering product catalog, inventory tracking, billing, and sales reporting. Built with a TypeScript React frontend using a clean component architecture and a lightweight SQLite database for local-first data persistence via a Node/Express API.",
      stack: [
        "React.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "SQLite",
        "Tailwind CSS",
      ],
      githubUrl: "https://github.com/AlieenBotrishabh/sweet-shop-management",
      liveUrl: null,
      highlight: false,
    },
    {
      title: "NextHire — Online Job Portal",
      year: "2023",
      summary:
        "Scalable job portal with role-based dashboards, job posting, automated notifications, Redux state management, Cloudinary, and search filters.",
      description:
        "Built a production-style job portal with separate recruiter and candidate dashboards. Features include JWT auth, profile management with Cloudinary image hosting, job posting/applying flows, automated email notifications via Nodemailer, and advanced search and filter capabilities. Global state managed with Redux Toolkit.",
      stack: [
        "React.js",
        "Express.js",
        "MongoDB",
        "Redux",
        "Cloudinary",
        "Nodemailer",
        "JWT",
      ],
      githubUrl: "https://github.com/AlieenBotrishabh/NextHire-An-Online-Job-Portal",
      liveUrl: null,
      highlight: false,
    },
  ],
  certifications: [
    {
      title: "Oracle Cloud Infrastructure: Generative AI Professional",
      issuer: "Oracle",
      year: "2024",
      summary:
        "Demonstrated expertise in designing, deploying, and managing generative AI solutions using Oracle Cloud Infrastructure services including OCI Generative AI, RAG pipelines, and vector search.",
      badgeUrl: null,
    },
  ],
  education: {
    degree: "Bachelor of Engineering in Computer Science (IoT Specialization)",
    institution: "Chandigarh University",
    location: "Punjab, India",
    timeline: "2022 – 2026",
    highlights: [
      "Specialization in Internet of Things (IoT)",
      "Strong coursework in Data Structures, Algorithms, and Machine Learning",
      "Active in coding communities and hackathons",
    ],
  },
};