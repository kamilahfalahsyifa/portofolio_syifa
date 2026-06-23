import type { ProjectContent } from "@/types/project";

const fleetEn: ProjectContent = {
  title: "Fleet Management System (SaaS)",
  subtitle:
    "Cross-platform Flutter mobile app for logistics and fleet operations — built for drivers to manage delivery activities and operational expenses.",
  description:
    "A SaaS Fleet Management System that helps drivers manage schedules, perform real-time delivery tracking, submit operational expenses, and monitor delivery history through an integrated mobile application.",
  shortDescription:
    "Cross-platform Flutter mobile app for logistics and fleet operations.",
  year: "2025",
  role: "Mobile Developer & UI/UX Designer",
  techStack: [
    "Flutter 3",
    "Dart",
    "Clean Architecture",
    "BLoC Pattern",
    "REST API Integration",
    "JWT Authentication",
    "Geolocator",
    "Flutter Map",
    "OpenStreetMap",
    "Google ML Kit",
    "Shared Preferences",
  ],
  introduction: [
    "Fleet Management System is a SaaS mobile platform for logistics and fleet operations. I was responsible for the entire mobile UI/UX design in Figma and for developing and maintaining the Flutter application that drivers use every day to manage their work.",
  ],
  decisions: [
    {
      label: "Decision",
      title: "Clean Architecture with BLoC and a dedicated API client",
      description:
        "Because the application handles authentication, real-time tracking, OCR, and multiple user flows, the codebase was organized using Clean Architecture. BLoC handled state, while a dedicated Dio client managed JWT auth, automatic token refresh, and request retries. This kept the project modular, testable, and easy to evolve as new features were added.",
    },
  ],
  problem: {
    background:
      "Fleet drivers were tracking schedules, deliveries, and operational expenses through fragmented tools — phone calls, paper notes, and manual spreadsheets. This made it hard for both drivers and operations teams to see real-time status, validate expenses, and keep an auditable history of activities.",
    challenges: [
      "Schedules, deliveries, and expenses were tracked across multiple disconnected tools.",
      "There was no real-time visibility into delivery progress or driver location.",
      "Fuel, toll, and meal expenses had to be entered manually from paper receipts.",
      "Operational limit requests were handled manually with poor traceability.",
      "Notifications and history needed a single, reliable entry point for drivers.",
    ],
    objectives: [
      "Provide drivers with a single app for schedules, deliveries, and expenses.",
      "Enable real-time GPS tracking and route visualization.",
      "Automate expense entry through OCR-based receipt scanning.",
      "Streamline operational limit requests and approvals.",
      "Centralize notifications, history, and account management.",
    ],
  },
  discussion: {
    requirements: [
      "Authentication with JWT and automatic token refresh.",
      "Dashboard with daily schedules and checkpoints.",
      "Delivery schedule management.",
      "Real-time GPS tracking with interactive maps and route visualization (OpenStreetMap + OSRM).",
      "OCR-based receipt scanner using Google ML Kit.",
      "Operational limit request and approval tracking.",
      "Delivery history and activity logs.",
      "Notification center with unread badge management.",
      "User profile and account management.",
    ],
    architecture:
      "The application uses Clean Architecture with BLoC for state management. A Dio-based API client handles JWT authentication and automatic token refresh. Geolocator provides device location, Flutter Map renders OpenStreetMap tiles, and Google ML Kit powers the on-device OCR scanner. Shared Preferences handles lightweight local persistence.",
    technologyStack: [
      { name: "Flutter 3", description: "Cross-platform framework used to build the mobile application." },
      { name: "Dart", description: "Primary programming language for the mobile codebase." },
      { name: "Clean Architecture", description: "Layered separation of presentation, domain, and data concerns." },
      { name: "BLoC Pattern", description: "State management for predictable and testable flows." },
      { name: "REST API Integration", description: "Communication with the SaaS backend through RESTful endpoints." },
      { name: "JWT Authentication", description: "Secure authentication with automatic token refresh." },
      { name: "Geolocator", description: "Real-time GPS coordinates for tracking and checkpoints." },
      { name: "Flutter Map + OpenStreetMap", description: "Interactive map rendering and route visualization with OSRM." },
      { name: "Google ML Kit OCR", description: "On-device text recognition for receipt scanning." },
      { name: "Shared Preferences", description: "Local persistence for session and small user data." },
    ],
    developmentProcess:
      "Started with information architecture and UI/UX design in Figma, then bootstrapped the Flutter project with Clean Architecture layers. Authentication, dashboard, and schedules were built first, followed by tracking, OCR, notifications, and operational limit workflows. Iterative QA with drivers shaped the final UX.",
    screenshots: [
      "/projects/fleet-management/cover.jpg",
      "/projects/fleet-management/banner.jpg",
    ],
  },
  result: {
    outcome:
      "Fleet Management System gave drivers one place to plan, execute, and report their work — turning scattered processes into a streamlined mobile workflow that operations teams can monitor in real time.",
    featuresDelivered: [
      "Authentication and session management with JWT refresh.",
      "Dashboard with daily schedules and checkpoints.",
      "Delivery schedule management.",
      "Real-time GPS tracking with interactive maps.",
      "Route visualization using OpenStreetMap and OSRM.",
      "OCR-based receipt scanner for fuel, toll, food, and other expenses.",
      "Operational limit request and approval tracking.",
      "Delivery history and activity logs.",
      "Notification center with unread badge management.",
      "User profile and account management.",
    ],
    lessonsLearned: [
      "Clean Architecture pays off when features grow quickly over time.",
      "JWT refresh and request retries must be designed from day one.",
      "OCR reliability depends on image quality and clear feedback to users.",
      "Mobile-first UX for drivers has to be fast and thumb-friendly.",
      "Collaboration with backend and web teams keeps the data model consistent.",
    ],
  },
};

export default fleetEn;