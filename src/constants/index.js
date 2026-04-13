export const myProjects = [
  {
    id: 1,
    title: "SolaceStudio",
    description:
      "Developed a robust backend API with payment gateway integration, optimized to handle hundreds of daily requests. Features a well-structured database, clean CRUD operations, and thorough Postman documentation.",
    subDescription: [
      "Integrated secure payment gateway processing.",
      "Handled high traffic API requests efficiently.",
      "Designed an organized database and clean CRUD architecture.",
      "Provided comprehensive API documentation via Postman.",
    ],
    href: "https://solacestudio.id/", // Silakan sesuaikan link ini
    logo: "",
    image: "/assets/projects/solace.jpg", // Silakan sesuaikan path gambar ini
    tags: [
      { id: 1, name: "Express", path: "/assets/logos/javascript.svg" },
      { id: 2, name: "MySQL", path: "/assets/logos/mysql.svg" },
      { id: 3, name: "Postman", path: "/assets/logos/postman.svg" },
    ],
  },

  {
    id: 2,
    title: "Node.js REST API",
    description:
      "RESTful backend API built with Node.js, Express, and MySQL focusing on clean architecture and CRUD operations.",
    subDescription: [
      "Implemented CRUD endpoints using Express and MySQL.",
      "Applied MVC structure and modular routing.",
      "Used async/await and centralized error handling.",
      "Designed clean and maintainable API structure.",
    ],
    href: "https://github.com/ferdinandputra86/Restful-API-js",
    logo: "",
    image: "/assets/projects/node.jpg",
    tags: [
      { id: 1, name: "Node.js", path: "/assets/logos/node.svg" },
      { id: 2, name: "Express", path: "/assets/logos/javascript.svg" },
      { id: 3, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },

  {
    id: 3,
    title: "Laravel Authentication System",
    description:
      "Authentication system built with Laravel featuring login, registration, validation, and route protection.",
    subDescription: [
      "Implemented login and registration flows.",
      "Applied middleware-based route protection.",
      "Used Laravel validation and auth features.",
      "Focused on backend security fundamentals.",
    ],
    href: "https://github.com/ferdinandputra86/Laravel-auth",
    logo: "",
    image: "/assets/projects/laravel.jpg",
    tags: [
      { id: 1, name: "Laravel", path: "/assets/logos/laravel.svg" },
      { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
      { id: 3, name: "Auth", path: "/assets/logos/auth.svg" },
      { id: 4, name: "MySQL", path: "/assets/logos/mysql.svg" },
    ],
  },

  {
    id: 4,
    title: "Pasar.in Marketplace",
    description:
      "Local marketplace application for buying and selling new and used items.",
    subDescription: [
      "Supports multi product listing.",
      "Search and filtering features.",
      "Responsive marketplace UI.",
      "Built as full portfolio marketplace concept.",
    ],
    href: "https://github.com/ferdinandputra86/pasar.in",
    logo: "",
    image: "/assets/projects/pasar.in.jpg",
    tags: [
      { id: 1, name: "Marketplace", path: "/assets/logos/marketplace.svg" },
      { id: 2, name: "PHP", path: "/assets/logos/php.svg" },
    ],
  },

  {
    id: 5,
    title: "Diabetes Sense Mobile App",
    description:
      "Mobile app that detects ulcer wounds and recommends nearest hospitals.",
    subDescription: [
      "Built as mobile health application.",
      "Wound detection feature.",
      "Hospital recommendation system.",
      "Team-based capstone style project.",
    ],
    href: "https://github.com/C241-PS090/Mobile-Development",
    logo: "",
    image: "/assets/projects/diabetesense.jpg",
    tags: [
      { id: 1, name: "Android", path: "/assets/logos/androi.svg" },
      { id: 2, name: "ML", path: "/assets/logos/ml.svg" },
      { id: 3, name: "Kotlin", path: "/assets/logos/kotlin.svg" },
    ],
  },

  {
    id: 6,
    title: "Rythm Music Sharing App",
    description:
      "Music sharing platform where creators upload songs and users listen and interact.",
    subDescription: [
      "User music upload system.",
      "Creator-listener interaction model.",
      "Portfolio social music platform concept.",
    ],
    href: "https://github.com/ferdinandputra86/rythm",
    logo: "",
    image: "/assets/projects/rythm.jpg",
    tags: [
      { id: 1, name: "Flutter", path: "/assets/logos/flutter.svg" },
      { id: 2, name: "Firebase", path: "/assets/logos/firebase.svg" },
    ],
  },

  {
    id: 7,
    title: "Emotion Detection ML",
    description:
      "Machine learning project using SVM and Naive Bayes for text-based emotion detection.",
    subDescription: [
      "Text preprocessing and feature extraction.",
      "Trained SVM and Naive Bayes models.",
      "Emotion classification pipeline.",
    ],
    href: "https://github.com/ferdinandputra86/Emotion-Detection-NB-SVM",
    logo: "",
    image: "/assets/projects/emotionclass.jpg",
    tags: [
      { id: 1, name: "Python", path: "/assets/logos/python.svg" },
      { id: 2, name: "ML", path: "/assets/logos/ml.svg" },
    ],
  },

  {
    id: 8,
    title: "HeartLog Emotion Diary",
    description:
      "Emotion diary app with mood tracking, tagging, and suggestion features.",
    subDescription: [
      "Daily emotion journaling.",
      "Mood tagging system.",
      "Emotion statistics dashboard.",
    ],
    href: "https://github.com/ferdinandputra86/Heartlog",
    logo: "",
    image: "/assets/projects/heartlog.jpg",
    tags: [
      { id: 1, name: "Flutter", path: "/assets/logos/flutter.svg" },
      { id: 2, name: "OOP", path: "/assets/logos/oop.svg" },
    ],
  },
];

export const experiences = [
  {
    title: "Backend Developer (Freelance)",
    job: "solacestudio.id",
    date: "Jan 2026 - Feb 2026",
    contents: [
      "Developed lightweight and scalable backend architecture using Express.js with clean code practices.",
      "Built RESTful APIs with structured routing and controller separation to support frontend integration.",
      "Integrated secure payment processing services for reliable transaction handling.",
      "Designed and managed structured database schemas to ensure consistency and efficient querying.",
      "Implemented role-based access control (Admin & User) to improve API security and usability.",
    ],
  },
  {
    title: "IT Staff",
    job: "PT Bank Rakyat Indonesia (Persero) Tbk",
    date: "Aug 2025 - Nov 2025",
    contents: [
      "Managed and ensured secure and reliable operation of IT systems including servers, networks, and infrastructure devices.",
      "Coordinated daily IT operations with internal teams to maintain system availability and operational efficiency.",
      "Provided technical support by troubleshooting hardware, system, and network issues for employees.",
      "Performed monitoring, asset inventory tracking, and quality assurance on IT infrastructure such as servers, switches, EDC, ATM, and CCTV.",
      "Collaborated with vendors and headquarters teams for implementation, escalation handling, and technical issue resolution.",
    ],
  },
  {
    title: "IT Staff Intern",
    job: "PT Telkom Indonesia (Persero) Tbk",
    date: "Jun 2024 - Aug 2024",
    contents: [
      "Designed and developed user-friendly UI for internal applications to improve usability and feature clarity.",
      "Translated business requirements into functional UI components and system workflows.",
      "Worked within Agile environments across multiple sprint cycles including planning and daily stand-ups.",
      "Collaborated with cross-functional teams of developers, designers, and supervisors.",
      "Performed testing, debugging, validation, and documentation to ensure application reliability.",
    ],
  },
  {
    title: "Mobile Development Cohort",
    job: "Bangkit Academy (Google, GoTo, Tokopedia, Traveloka)",
    date: "Feb 2024 - Jul 2024",
    contents: [
      "Completed an intensive Android development program using Kotlin with industry-oriented learning.",
      "Developed responsive Android UI following Material Design and UI/UX best practices.",
      "Integrated REST APIs and managed end-to-end data flow between frontend and backend services.",
      "Collaborated in a cross-functional Agile team to deliver a capstone project.",
      "Applied Git and GitHub workflows including code reviews and sprint collaboration.",
    ],
  },
  {
    title: "Practicum Assistant",
    job: "Informatics Lab - Telkom University",
    date: "Sep 2023 - Jan 2025",
    contents: [
      "Mentored undergraduate students in Algorithms and Data Structures using Go, Java, and C++.",
      "Delivered hands-on practicum sessions covering core data structures and algorithm concepts.",
      "Resolved debugging and optimization cases to improve code correctness and performance.",
      "Evaluated assignments and provided structured technical feedback.",
      "Prepared and maintained lab environments to ensure smooth practicum execution.",
    ],
  },
];
