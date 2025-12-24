export const projects = [
  {
    slug: "kat-ticketing-platform",
    title: "KAT — Ticketing Web Platform",
    tagline:
      "A full-stack ticket sales platform with admin management, bookings, and payment-ready architecture.",
    year: "2025",
    role: "Full-stack Developer",

    stack: [
      "React (Vite)",
      "JavaScript",
      "Tailwind CSS",
      "REST API",
      "Node.js",
      "Express",
      "Prisma ORM",
      "MySQL",
      "MongoDB",
      "JWT",
    ],

    repoUrl: "https://github.com/Charles2404200/kat",
    liveUrl: "",

    overview: [
      "KAT is a modern ticketing platform where organizers can publish events and users can browse, book, and manage tickets.",
      "The system is designed as a full-stack application with clean separation between UI, API, and data layer.",
      "Prisma ORM is used to standardize data access and simplify migrations for the SQL side, while MongoDB is used for flexible data (e.g., logs, feeds, and additional metadata).",
    ],

    features: [
      "Authentication and authorization using JWT with protected routes",
      "Event listing, search, and detail pages",
      "Ticket booking workflow (seat and quantity-ready)",
      "Organizer and admin dashboard for managing events and ticket types",
      "RESTful API design with validation and consistent error handling",
      "Scalable structure for future integrations (payments, email notifications, QR check-in)",
    ],

    architecture: [
      {
        title: "Frontend",
        desc: "React (Vite) single-page application styled with Tailwind CSS, built using reusable components and route-based navigation.",
      },
      {
        title: "Backend",
        desc: "Node.js and Express-based REST API with JWT authentication, request validation, and modular route structure.",
      },
      {
        title: "Data Layer",
        desc: "Prisma ORM for MySQL to manage core relational entities, combined with MongoDB for flexible and non-relational data such as logs or activity feeds.",
      },
    ],

    highlights: [
      "Clean REST API design with predictable request and response structures.",
      "Prisma schema modeling for relational entities including users, events, tickets, and bookings.",
      "Tailwind CSS enables rapid UI development with consistent design and responsive layouts.",
      "Designed following production-like workflows with environment configuration and modular services.",
    ],

    screenshots: [
      "/images/kat1.png",
  "/images/kat2.png"
    ],
  },
  {
  slug: "render-stock-market-dashboard",
  title: "Render — Real-time Stock Market Dashboard",
  tagline:
    "A high-performance frontend dashboard that renders live market data from Binance with smooth scrolling and high FPS.",
  year: "2025",
  role: "Frontend Developer",

  stack: [
    "React (Vite)",
    "JavaScript",
    "Tailwind CSS",
    "REST API (Binance)",
    "Performance Optimization",
  ],

  repoUrl: "https://github.com/Charles2404200/Render",
  liveUrl: "",

  overview: [
    "Render is a frontend-focused web application that simulates a stock and cryptocurrency market dashboard.",
    "It fetches live market data directly from Binance APIs and renders frequent updates while maintaining smooth scrolling and high frame rates.",
    "The project focuses on frontend performance, efficient rendering, and user experience under heavy data updates."
  ],

  features: [
    "Live market data fetched directly from Binance APIs",
    "High-performance list rendering optimized for smooth scrolling",
    "Efficient state updates to avoid unnecessary re-renders",
    "Responsive UI designed for continuous scrolling without lag",
    "Clean and minimal interface optimized for readability and speed"
  ],

  architecture: [
    {
      title: "Frontend",
      desc: "React (Vite) single-page application optimized for rendering real-time data with high FPS and minimal UI lag."
    },
    {
      title: "Data Fetching",
      desc: "Client-side REST API integration with Binance, optimized through controlled polling, batching, and efficient update cycles."
    }
  ],

  highlights: [
    "Focused entirely on frontend performance and rendering optimization.",
    "Smooth scrolling and stable FPS even with frequent data updates.",
    "Real live data from Binance instead of mocked datasets.",
    "Strong demonstration of performance-aware React development."
  ],

  screenshots: [
    "/images/poc.png",
  ],
},
{
  slug: "befood-food-ordering-platform",
  title: "BeFood — Food Ordering Platform",
  tagline:
    "A full-stack food ordering web app inspired by Uber Eats, powered by Directus CMS, custom APIs, and Docker-based self-hosting.",
  year: "2025",
  role: "Full-stack Developer",

  stack: [
    "Next.js",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "Directus CMS",
    "Custom REST API",
    "Docker & Docker Compose",
    "MySQL / PostgreSQL",
  ],

  repoUrl: "https://github.com/Charles2404200/befood-clone-directus",
  liveUrl: "",

  overview: [
    "BeFood is a web-based food ordering platform inspired by Uber Eats, designed to support multiple brands and stores with flexible menu and order management.",
    "The system uses Directus as a headless CMS to manage content, permissions, and data workflows, while a custom API layer connects the frontend to the database.",
    "The entire stack is self-hosted using Docker, enabling consistent deployment, scalability, and local development parity."
  ],

  features: [
    "Brand management for multiple food chains (e.g., Katinat, Gongcha)",
    "Store management with multiple branches per brand",
    "Menu system with items, sizes, toppings, options, and dynamic pricing",
    "Order management supporting both offline and online orders",
    "Analytics dashboard with real-time revenue and top-selling item reports",
    "Role-based access control powered by Directus permissions",
    "Frontend data fetching via custom REST APIs"
  ],

  architecture: [
    {
      title: "Frontend",
      desc: "Next.js application providing a modern React-based UI for customers and administrators, optimized for fast navigation and responsive layouts."
    },
    {
      title: "Backend & CMS",
      desc: "Directus headless CMS used for content management, data modeling, authentication, and role-based permissions, extended with custom API endpoints."
    },
    {
      title: "Infrastructure",
      desc: "Self-hosted using Docker and Docker Compose, including Directus, database, and supporting services for consistent deployment."
    }
  ],

  highlights: [
    "Headless CMS approach using Directus for flexible data control and permissions.",
    "Supports complex real-world food ordering scenarios with brands, stores, and customizable menus.",
    "Dockerized architecture enables easy setup, scalability, and reproducible environments.",
    "Clean separation between frontend, CMS, and API layers following modern full-stack practices."
  ],

  screenshots: [
    // "/screens/befood-1.png"
  ],
},
{
  slug: "ci-cd-mern-ecommerce-aws",
  title: "CI/CD Deploy — MERN E-commerce Platform",
  tagline:
    "A production-style CI/CD pipeline deploying a Dockerized MERN e-commerce application on AWS with monitoring, rollback, and health checks.",
  year: "2025",
  role: "DevOps / Full-stack Developer",

  stack: [
    "MERN Stack",
    "AWS (EC2)",
    "Docker & Docker Compose",
    "Jenkins",
    "Ansible",
    "Nginx",
    "Prometheus",
    "Grafana",
    "CI/CD Pipeline",
  ],

  repoUrl: "https://github.com/Charles2404200/CI-CD-Deploy",
  liveUrl: "",

  overview: [
    "This project demonstrates a complete CI/CD pipeline for deploying a MERN-based e-commerce web application to AWS.",
    "The system focuses on automation, reliability, and observability, covering build, deployment, rollback, and real-time monitoring.",
    "Infrastructure configuration and application deployment are automated using Ansible, Docker, and Jenkins."
  ],

  features: [
    "Automated CI/CD pipeline using Jenkins for build and deployment",
    "Dockerized architecture with separate images for frontend, backend, and database",
    "Infrastructure provisioning and configuration managed via Ansible",
    "Nginx reverse proxy with health checks and rollback support",
    "Monitoring and alerting using Prometheus and Grafana",
    "Zero or minimal downtime deployment strategy",
    "Production-style separation of services and environments"
  ],

  architecture: [
    {
      title: "CI/CD Pipeline",
      desc: "Jenkins automates build, test, and deployment steps, triggering Docker image builds and server updates."
    },
    {
      title: "Containerization",
      desc: "Three Docker images are built and deployed separately: frontend (React), backend (Node.js/Express), and database."
    },
    {
      title: "Infrastructure & Config Management",
      desc: "Ansible is used to provision servers, configure services, deploy containers, and manage environment consistency."
    },
    {
      title: "Networking & Reliability",
      desc: "Nginx acts as a reverse proxy, performs health checks on backend services, and supports rollback on failure."
    },
    {
      title: "Monitoring & Observability",
      desc: "Prometheus collects system and application metrics, while Grafana visualizes performance, uptime, and resource usage."
    }
  ],

  highlights: [
    "End-to-end CI/CD pipeline covering build, deploy, rollback, and monitoring.",
    "Production-grade DevOps toolchain using Jenkins, Docker, and Ansible.",
    "High observability with Prometheus and Grafana dashboards.",
    "Clear separation of frontend, backend, and database services.",
    "Strong demonstration of cloud deployment and DevOps best practices."
  ],

  screenshots: [
    // "/screens/cicd-1.png"
  ],
},
{
  slug: "smart-library-platform",
  title: "Smart Library Platform",
  tagline:
    "A full-stack smart library management system using a hybrid SQL & NoSQL architecture with advanced analytics and transactional safety.",
  year: "2025",
  role: "Full-stack Developer",

  stack: [
    "React",
    "Node.js",
    "Express",
    "REST API",
    "MySQL",
    "MongoDB",
    "JWT Authentication",
    "Tailwind CSS",
    "SQL Stored Procedures & Triggers",
  ],

  repoUrl: "https://github.com/Charles2404200/smart-library-platform",
  liveUrl: "",

  overview: [
    "Smart Library Platform is a full-stack web application designed to manage both physical and digital library resources for readers, staff, and administrators.",
    "The system adopts a hybrid database architecture, combining MySQL for transactional and structured data with MongoDB for high-volume, semi-structured reading activity logs.",
    "The project emphasizes data integrity, performance optimization, and scalable analytics through advanced database techniques."
  ],

  features: [
    "Advanced book search with multiple criteria (title, genre, author)",
    "Secure borrow and return workflow with transactional safety",
    "User reviews and ratings with automated aggregation",
    "Role-based access control (Reader, Staff, Admin) using JWT",
    "Admin dashboard for inventory management and user administration",
    "Analytics dashboard showing reading behavior and engagement metrics",
    "Hybrid SQL and NoSQL data storage for operational and analytical workloads"
  ],

  architecture: [
    {
      title: "Frontend",
      desc: "React Single Page Application styled with Tailwind CSS, communicating exclusively via RESTful APIs for scalability and maintainability."
    },
    {
      title: "Backend",
      desc: "Node.js and Express server exposing REST APIs, handling authentication, authorization, and business logic orchestration."
    },
    {
      title: "Relational Database (MySQL)",
      desc: "Stores core entities such as users, books, authors, checkouts, reviews, and staff logs, enhanced with indexes, stored procedures, and triggers."
    },
    {
      title: "NoSQL Database (MongoDB)",
      desc: "Stores high-volume reading session data and supports advanced analytics via aggregation pipelines."
    }
  ],

  highlights: [
    "Hybrid database architecture combining MySQL reliability with MongoDB analytical flexibility.",
    "Use of stored procedures and row-level locking to prevent race conditions during book borrowing.",
    "Triggers automate business rules such as late returns and dynamic rating updates.",
    "Proactive indexing strategy to optimize search, authentication, joins, and reporting queries.",
    "Advanced analytics built with MongoDB aggregation pipelines (reading time, highlights, engagement)."
  ],

  screenshots: [
    // "/screens/library-1.png"
  ],
},
{
  slug: "booking-app-travel-platform",
  title: "Booking App — Travel & Accommodation Platform",
  tagline:
    "A travel booking web application inspired by Traveloka and Airbnb, built with EJS, plain HTML/CSS, and REST APIs.",
  year: "2024",
  role: "Frontend Developer",

  stack: [
    "Node.js",
    "Express",
    "EJS",
    "HTML",
    "CSS",
    "REST API",
    "MongoDB Atlas",
    "Unsplash API",
  ],

  repoUrl: "https://github.com/Charles2404200/Booking-App",
  liveUrl: "",

  overview: [
    "Booking App is a web-based travel booking platform that allows users to search, view, and book hotels and travel accommodations.",
    "The project focuses on server-side rendering using EJS combined with plain HTML and CSS to ensure performance and accessibility.",
    "Inspired by platforms such as Traveloka and Airbnb, the application integrates booking workflows, user management, and community interaction features."
  ],

  features: [
    "Hotel and accommodation search with booking workflow",
    "Server-side rendered pages using EJS templates",
    "User authentication, registration, and profile management",
    "Threaded discussion forum with posts, comments, likes, and moderation",
    "Admin module for managing users, posts, and flagged content",
    "Responsive design optimized for mobile, tablet, and desktop devices",
    "Integration with Unsplash REST API for dynamic city and destination images",
    "Automatically generated HTML sitemap to improve navigation and SEO"
  ],

  architecture: [
    {
      title: "Frontend",
      desc: "EJS templates combined with plain HTML and custom CSS to deliver fast-rendered pages and consistent UI across devices."
    },
    {
      title: "Backend",
      desc: "Node.js and Express server exposing RESTful APIs for booking, user management, and forum interactions."
    },
    {
      title: "Database",
      desc: "MongoDB Atlas used to store user profiles, bookings, forum posts, and discussion threads."
    }
  ],

  highlights: [
    "Built without frontend frameworks to demonstrate strong fundamentals in HTML, CSS, and server-side rendering.",
    "Accessibility-focused design with ARIA labels, keyboard navigation, and high-contrast mode.",
    "User-centered improvements driven by structured usability testing.",
    "Optimized performance through image compression and lazy loading.",
    "Clear separation between presentation (EJS) and business logic (REST APIs)."
  ],

  screenshots: [
    // "/screens/booking-1.png"
  ],
},
{
  slug: "evema-event-management-system",
  title: "EVEMA — Event Planning & Management System",
  tagline:
    "A full-stack event management platform with role-based access, RSVP workflows, discussions, and notifications.",
  year: "2025",
  role: "Full-stack Developer",

  stack: [
    "React (Vite)",
    "Node.js",
    "Express",
    "REST API",
    "MongoDB",
    "MySQL",
    "JWT Authentication",
    "Tailwind CSS",
  ],

  repoUrl: "https://github.com/Charles2404200/Event_App",
  liveUrl: "",

  overview: [
    "EVEMA is a full-stack web application designed to support online event planning and management for multiple user roles: Admin, Organizer, and Attendee.",
    "The platform allows users to create and manage events, handle invitations and RSVPs, participate in discussions, and receive notifications.",
    "A hybrid database architecture is used, combining MongoDB for event-driven and user interaction data with MySQL for structured administrative configurations."
  ],

  features: [
    "Role-based access control (Admin, Organizer, Attendee)",
    "Public and private event creation with RSVP and invitation workflows",
    "Booking approval system for public events",
    "Discussion boards for event participants",
    "Notification system for invitations, RSVP updates, and reminders",
    "Admin dashboard for managing users, events, and global system settings",
    "JWT authentication with access token and refresh token flow"
  ],

  architecture: [
    {
      title: "Frontend",
      desc: "React Single Page Application built with Vite and styled using Tailwind CSS, featuring role-based dashboards and protected routes."
    },
    {
      title: "Backend",
      desc: "Node.js and Express REST API handling authentication, event logic, RSVP workflows, discussions, and notifications."
    },
    {
      title: "Databases",
      desc: "MongoDB stores events, users, RSVPs, discussions, and notifications, while MySQL manages admin configurations and system-level constraints."
    }
  ],

  highlights: [
    "Clear separation of concerns using a 3-tier architecture (Frontend, API, Database).",
    "Comprehensive RSVP system supporting both invitations and public bookings.",
    "Hybrid database design balancing flexibility (MongoDB) and relational integrity (MySQL).",
    "Admin-level overrides for event limits, invitations, and user roles.",
    "Designed and implemented as a production-style full-stack application."
  ],

  screenshots: [
    // "/screens/evema-1.png"
  ],
},
{
  slug: "event-manager-system-ems",
  title: "Event Manager System (EMS)",
  tagline:
    "A Java-based event management system with a JavaFX GUI, designed using OOP, SOLID principles, and layered architecture to handle large-scale event data efficiently.",
  year: "2024",
  role: "Java Full-stack Developer (Desktop Application)",

  stack: [
    "Java",
    "JavaFX",
    "OOP & SOLID Principles",
    "Design Patterns (DDD / Layered Architecture)",
    "JDBC",
    "SQL",
    "Relational Database",
  ],

  repoUrl: "https://github.com/Charles2404200/Event-Manager-System-EMS-",
  liveUrl: "",

  overview: [
    "Event Manager System (EMS) is a desktop-based event management application developed in Java with a JavaFX graphical user interface.",
    "The project is an extended group assignment that evolves from a console-based, file-persistence system into a full-featured, database-driven application with multiple user roles.",
    "The system focuses on clean object-oriented design, scalability, and performance optimization when handling large datasets."
  ],

  features: [
    "Multi-role system: Anonymous Visitor, Participant (Attendee / Presenter), Event Administrator, and System Administrator",
    "Event and session management with full lifecycle control (create, update, cancel, complete)",
    "Ticket generation and management with QR code support",
    "Advanced scheduling system preventing session conflicts",
    "Presenter analytics including session counts, audience size, and engagement trends",
    "Exportable reports for events, tickets, presenters, and attendance statistics",
    "JavaFX-based GUI replacing the original console interface"
  ],

  architecture: [
    {
      title: "Domain Model",
      desc: "Core entities such as Person, Attendee, Presenter, Event, Session, Ticket, and Schedule are modeled using inheritance and polymorphism."
    },
    {
      title: "Application Layer",
      desc: "Business logic implemented following SOLID principles, ensuring separation of concerns and high maintainability."
    },
    {
      title: "Persistence Layer",
      desc: "Relational database integration using JDBC, optimized SQL queries, and indexing to support large-scale data loading."
    },
    {
      title: "Presentation Layer",
      desc: "JavaFX GUI providing role-based dashboards and interactive workflows for different user types."
    }
  ],

  highlights: [
    "Strong application of OOP concepts: inheritance, abstraction, encapsulation, and polymorphism.",
    "SOLID-compliant design enabling extensibility and easier maintenance.",
    "Optimized SQL queries and efficient data-loading strategies to handle large datasets smoothly.",
    "Clear role-based access control separating participant, event admin, and system admin responsibilities.",
    "Transition from file-based persistence to a database-backed architecture.",
    "Use of design patterns to structure a complex, real-world desktop application."
  ],

screenshots: [
  "/images/ems-3.png",
  "/images/ems-2.png",
  "/images/ems.png",
  "/images/ems-4.png"
],
},

];
