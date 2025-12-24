export const experiences = [
  {
    id: "vietcap-intern",
    role: "Full-stack Developer Intern",
    company: "Vietcap Securities",
    period: "2025 · 6 months",
    type: "Internship",

    stack: [
      "Vue.js",
      "React",
      "Node.js",
      "REST APIs",
      "Prisma ORM",
      "MySQL",
      "MongoDB",
      "Tauri",
      "GitHub Actions",
      "Vercel",
    ],

    overview: [
      "Worked as a full-stack developer intern focusing on real-world web systems, internal tools, and performance-sensitive applications.",
      "The internship emphasized system design thinking, data consistency, and production-level engineering practices rather than rapid prototyping.",
    ],

    responsibilities: [
      "Developed internal and customer-facing web applications using Vue.js and React.js.",
      "Built and maintained backend REST APIs with structured validation and consistent response contracts.",
      "Worked with relational and non-relational databases through Prisma ORM (MySQL and MongoDB).",
      "Participated in technical discussions with mentors focusing on system design decisions and edge-case handling.",
    ],

    highlights: [
      "Developed a desktop application using Tauri, integrating a web frontend with native packaging.",
      "Implemented CI/CD pipelines using GitHub Actions for automated builds and versioned releases.",
      "Managed application versioning using Git tags and release workflows, including update checks.",
      "Deployed and hosted application-related services and APIs on Vercel.",
    ],

    technicalInsights: [
      {
        title: "Ticket Purchase & Check-in Design",
        points: [
          "Used a combination of ticketId and hash to validate ticket authenticity during purchase and check-in.",
          "The hash prevents ticket forgery and ensures that ticket data cannot be manipulated on the client side.",
          "Separating ticket identity (ID) from validation logic (hash) improves security and traceability.",
        ],
      },
      {
        title: "Concurrency & Inventory Control",
        points: [
          "Handled scenarios where purchase requests exceed available ticket inventory.",
          "Applied transactional logic and database-level constraints to prevent overselling.",
          "Ensured that ticket quantity checks and reservations are performed atomically.",
        ],
      },
      {
        title: "Payment Timeout & Reservation Logic",
        points: [
          "Implemented ticket reservation timeouts for unpaid orders.",
          "Automatically released reserved tickets back into inventory after timeout.",
        ],
      },
    ],

    internshipProjects: [
      {
        title: "Stock Market Web Interface (Frontend Performance)",
        description: [
          "Built a stock market-style web application optimized for high FPS rendering and smooth scrolling.",
          "Focused on handling frequent API updates without UI lag.",
        ],
      },
      {
        title: "KAT Ticketing Platform (System Design)",
        description: [
          "Used as a case study for mentor-led discussions on concurrency, security, and ticket lifecycle.",
          "Covered overselling prevention, hash-based validation, and timeout-based reservations.",
        ],
      },
      {
        title: "Desktop Application with Tauri",
        description: [
          "Packaged a web frontend into a native desktop app using Tauri.",
          "Focused on CI/CD, versioning via Git tags, and update-check mechanisms.",
        ],
      },
      {
        title: "Food Ordering System (Directus / BeFood Clone)",
        description: [
          "Designed a multi-brand food ordering platform using Directus as a backend system.",
          "Handled brands, stores, menus, variants, pricing rules, and reporting.",
        ],
      },
    ],
  },

  {
    id: "freelance-wp",
    role: "Freelance WordPress Developer",
    company: "Self-employed",
    period: "2024 – 2025",
    type: "Freelance",
    stack: ["WordPress", "PHP", "Plugins", "HTML", "CSS", "JavaScript"],
    overview: [
      "Provided freelance WordPress development services for small businesses and personal brands.",
    ],
    responsibilities: [
      "Built and customized WordPress websites using themes and plugins.",
      "Extended functionality with custom PHP logic when needed.",
      "Configured hosting, domains, and performance-related settings.",
    ],
    highlights: [
      "Delivered complete websites from requirements to deployment.",
    ],
  },

  {
    id: "freelance-translator",
    role: "Freelance Translator (EN → VI)",
    company: "Self-employed",
    period: "2021 – Present",
    type: "Freelance",
    stack: ["English", "Vietnamese", "Game Localization", "Subtitling"],
    overview: [
      "Worked as a freelance translator specializing in English-to-Vietnamese localization.",
    ],
    responsibilities: [
      "Translated dialogue, UI text, and narrative content for games and video content.",
      "Maintained consistent terminology across large-scale projects.",
    ],
    highlights: [
      "Handled large text volumes with strict formatting requirements.",
    ],
  },
];
