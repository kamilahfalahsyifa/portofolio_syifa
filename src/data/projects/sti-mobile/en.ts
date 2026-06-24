import type { ProjectContent } from "@/types/project";

const stiMobileEn: ProjectContent = {
  title: "STI Mobile – Internship Logbook Feature",
  subtitle: "Academic mobile application feature for managing internship guidance activities.",
  description:
    "STI Mobile is an academic application used to support several university services. My contribution focused on the Internship (Kerja Praktek) Logbook module, which allows students to track guidance activities and monitor their internship progress.",
  shortDescription:
    "Academic mobile application feature for managing internship guidance activities.",
  year: "2025",
  role: "Mobile Developer",
  techStack: [
    "Flutter",
    "Dart",
    "BLoC",
    "GoRouter",
    "Dio",
    "Repository Pattern",
    "REST API",
    "Sizer",
  ],
  introduction: [
    "STI Mobile is an academic application used to support several university services. My contribution focused on the Internship (Kerja Praktek) Logbook module, which allows students to track guidance activities and monitor their internship progress.",
  ],
  decisions: [
    {
      label: "Decision",
      title: "BLoC + Repository Pattern for a large academic codebase",
      description:
        "Because the feature was added to an existing large-scale application, the work had to follow the established architecture. BLoC handled state, while the Repository Pattern kept business logic separate from the presentation layer, so the new logbook module could be added without disrupting the rest of the codebase.",
    },
  ],
  problem: {
    background:
      "Students had no structured digital place to record their internship guidance activities. Information about supervision history and progress was scattered, and monitoring each student's progress manually was time-consuming for both lecturers and students.",
    challenges: [
      "Students needed a structured way to record internship guidance activities.",
      "Monitoring internship progress manually was inefficient.",
      "Guidance information and documents were difficult to organize.",
      "Students required easier access to their supervision history.",
    ],
    objectives: [
      "Provide a structured digital logbook for internship guidance activities.",
      "Make it easier for students and lecturers to monitor progress.",
      "Organize guidance information and documents in one place.",
      "Give students easy access to their full supervision history.",
    ],
  },
  discussion: {
    requirements: [
      "Structured logbook entries for guidance activities.",
      "Display of guidance history and progress information.",
      "Integration with REST API for retrieving logbook data.",
      "Expandable logbook entries for better readability.",
      "Responsive UI across multiple screen sizes.",
    ],
    architecture:
      "The feature was built using Flutter with BLoC for state management and the Repository Pattern to separate business logic from presentation. GoRouter handled navigation between screens, Dio managed REST API communication, and Sizer ensured responsive layouts across devices.",
    technologyStack: [
      { name: "Flutter", description: "Cross-platform framework for building the application." },
      { name: "Dart", description: "Programming language used throughout the project." },
      { name: "BLoC", description: "State management architecture for handling UI and business logic." },
      { name: "GoRouter", description: "Navigation management across the application." },
      { name: "Dio", description: "HTTP client for API communication." },
      { name: "Repository Pattern", description: "Layered architecture for maintainable code." },
      { name: "REST API", description: "Backend communication for retrieving and updating data." },
      { name: "Sizer", description: "Responsive UI adaptation across different screen sizes." },
    ],
    developmentProcess:
      "Development started by exploring the existing codebase to understand its architecture and conventions. The logbook feature was then built on top of the existing BLoC and Repository structure, integrated with REST API endpoints, and refined based on feedback from the mobile and backend teams.",
    screenshots: [
      "/projects/sti-mobile/cover.jpg",
      "/projects/sti-mobile/banner.jpg",
    ],
  },
  result: {
    outcome:
      "The module provided students with a more organized way to manage internship guidance activities and monitor their progress digitally.",
    featuresDelivered: [
      "Internship Logbook feature built with Flutter and BLoC architecture.",
      "REST API integration to retrieve internship and logbook data.",
      "Interfaces for displaying guidance history and progress information.",
      "Expandable logbook entries to improve readability.",
      "Repository Pattern to separate business logic from presentation.",
    ],
    lessonsLearned: [
      "Working on a large codebase requires understanding existing architecture.",
      "State management becomes essential in complex applications.",
      "Separation of concerns improves maintainability.",
      "Collaboration with backend developers is crucial for feature development.",
      "Building reusable components speeds up development.",
    ],
  },
};

export default stiMobileEn;