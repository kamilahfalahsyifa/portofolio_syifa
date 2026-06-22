import type { ProjectContent } from "@/types/project";

const kissEn: ProjectContent = {
  title: "KISS",
  subtitle:
    "Internal web application for managing component replacement activities and APL component files with multi-role access and approval workflows.",
  description:
    "KISS is an internal maintenance management system designed to simplify component replacement tracking and file management. I designed the UI/UX and developed the entire application independently.",
  shortDescription:
    "Internal web application for managing component replacement activities and APL component files with multi-role access and approval workflows.",
  year: "2025",
  role: "Full-Stack Developer & UI/UX Designer (Solo Project)",
  techStack: [
    "Laravel 11",
    "Inertia.js",
    "Vue 3",
    "TypeScript",
    "Tailwind CSS",
    "DaisyUI",
    "MySQL",
    "SQLite",
    "Vite",
  ],
  introduction: [
    "KISS is an internal maintenance management system designed to simplify component replacement tracking and file management. I designed the UI/UX and developed the entire application independently.",
  ],
  decisions: [
    {
      label: "Decision",
      title: "Laravel + Inertia.js + Vue 3 for a unified full-stack experience",
      description:
        "The application was built using Laravel 11 paired with Inertia.js and Vue 3, which lets the frontend and backend share a single mental model. This avoided the overhead of a separate API layer while still giving an interactive, responsive user interface.",
    },
  ],
  problem: {
    background:
      "Maintenance teams needed a single place to track component replacement activities, manage approval flows, and organize historical APL files. Existing processes were scattered across spreadsheets, chat messages, and paper forms, making it hard to track status and audit history.",
    challenges: [
      "Component replacement records were difficult to organize and monitor.",
      "Approval processes were still manual and inefficient.",
      "Different users required different access permissions.",
      "Historical data and APL files needed better organization.",
    ],
    objectives: [
      "Centralize component replacement records in one system.",
      "Streamline approval workflows across roles.",
      "Provide role-based access for Mechanics, Group Leaders, Administrators, and Planners.",
      "Organize historical data and APL files for easy retrieval.",
    ],
  },
  discussion: {
    requirements: [
      "Role-based access for Mechanics, Group Leaders, Administrators, and Planners.",
      "Activity workflows with pending, approved, and rejected statuses.",
      "APL file management with spreadsheet-like structures.",
      "Search, filtering, pagination, and Excel export capabilities.",
      "Responsive interface for daily operational use.",
    ],
    architecture:
      "Laravel 11 powers the backend APIs and business logic, Inertia.js bridges Laravel and the Vue 3 frontend, and Tailwind CSS with DaisyUI keeps the UI consistent. Vite handles the frontend build, and MySQL stores activities and APL data.",
    technologyStack: [
      { name: "Laravel", description: "Backend framework used to build APIs and business logic." },
      { name: "Inertia.js", description: "Connects Laravel and Vue without creating separate APIs." },
      { name: "Vue 3", description: "Builds interactive and responsive user interfaces." },
      { name: "TypeScript", description: "Provides type safety and improves code maintainability." },
      { name: "Tailwind CSS", description: "Creates consistent and modern UI components." },
      { name: "MySQL", description: "Stores activity records and APL component data." },
    ],
    developmentProcess:
      "Designed end-to-end by a single developer, the project moved from information architecture and UI/UX mockups to Laravel API scaffolding, then Inertia + Vue 3 for the frontend, and finally iterative refinement of approval flows and data tables based on real operational feedback.",
    screenshots: [
      "/projects/kiss/cover.jpg",
      "/projects/kiss/banner.jpg",
    ],
  },
  result: {
    outcome:
      "KISS streamlines maintenance workflows, improves traceability, and centralizes component management into a single platform.",
    featuresDelivered: [
      "Role-based system for Mechanics, Group Leaders, Administrators, and Planners.",
      "Activity workflows with pending, approved, and rejected statuses.",
      "APL file management with spreadsheet-like structures.",
      "Search, filtering, pagination, and Excel export capabilities.",
      "Responsive interface for daily operational use.",
    ],
    lessonsLearned: [
      "Designing role-based systems requires careful access control.",
      "Approval workflows improve operational efficiency.",
      "Clear information architecture simplifies data management.",
      "Combining UI/UX design with development leads to more cohesive products.",
    ],
  },
};

export default kissEn;