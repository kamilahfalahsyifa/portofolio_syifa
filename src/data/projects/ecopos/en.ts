import type { ProjectContent } from "@/types/project";

const ecoposEn: ProjectContent = {
  title: "EcoPos Mobile",
  subtitle: "Point of Sale mobile application for retail stores and SMEs.",
  description:
    "EcoPos is a Flutter-based Point of Sale application developed to help stores manage products, transactions, reports, and attendance activities. The application integrates with a REST API backend and supports multiple user roles.",
  shortDescription:
    "Point of Sale mobile application for retail stores and SMEs.",
  year: "2024",
  role: "Mobile Frontend Developer",
  techStack: [
    "Flutter",
    "Dart",
    "BLoC",
    "Dio",
    "GetIt",
    "Shared Preferences",
    "Geolocator",
    "PDF",
    "Printing",
  ],
  introduction: [
    "EcoPos is a Flutter-based Point of Sale application developed to help stores manage products, transactions, reports, and attendance activities. The application integrates with a REST API backend and supports multiple user roles.",
  ],
  decisions: [
    {
      label: "Decision",
      title: "Clean architecture with BLoC, Repository, and DataSource layers",
      description:
        "The project was structured around a clean architecture pattern. BLoC handled state management, Repository abstracted data sources, and DataSource layers communicated with the REST API. This kept features modular, testable, and easy to maintain as the app grew.",
    },
  ],
  problem: {
    background:
      "Small and medium retail businesses often rely on manual processes for managing products, transactions, and employee attendance. These workflows are slow, error-prone, and difficult to monitor from a single place, especially when operations span multiple devices or roles.",
    challenges: [
      "Small businesses need a simple system to manage sales and inventory.",
      "Manual transaction records increase the risk of errors.",
      "Store owners need daily reports and sales history.",
      "Attendance tracking for employees should be integrated into one application.",
      "Business operations need to be accessible from mobile devices.",
    ],
    objectives: [
      "Provide a simple mobile POS for managing products, transactions, and reports.",
      "Reduce manual errors through a digital transaction flow.",
      "Give store owners visibility into daily reports and sales history.",
      "Integrate employee attendance into the same application.",
      "Make business operations accessible from any mobile device.",
    ],
  },
  discussion: {
    requirements: [
      "Product management module.",
      "Shopping cart and checkout flow.",
      "Voucher, payment, and digital receipt support.",
      "Reporting module with PDF export.",
      "GPS-based attendance with check-in and check-out validation.",
      "Multi-role user access integrated with a REST API backend.",
    ],
    architecture:
      "The application is built with Flutter and follows a clean architecture. BLoC manages state, Repository layers abstract data access, and DataSource classes communicate with the REST API. Local preferences are handled with Shared Preferences, while location-based attendance uses Geolocator.",
    technologyStack: [
      { name: "Flutter", description: "Cross-platform framework used to build the mobile application." },
      { name: "Dart", description: "Primary programming language for application development." },
      { name: "BLoC", description: "State management architecture for scalable and maintainable code." },
      { name: "Dio", description: "HTTP client for API communication." },
      { name: "GetIt", description: "Dependency injection for service management." },
      { name: "Shared Preferences", description: "Local storage for authentication and session management." },
      { name: "Geolocator", description: "Location services for attendance features." },
      { name: "PDF & Printing", description: "Generate and export reports and transaction receipts." },
    ],
    developmentProcess:
      "The project was developed iteratively, starting with authentication and the product catalog, then expanding into transactions, vouchers, and checkout. The reporting and attendance modules were added in later phases, with each feature integrated with the REST API backend through the Repository layer.",
    screenshots: [
      "/projects/ecopos/cover.jpg",
      "/projects/ecopos/banner.jpg",
    ],
  },
  result: {
    outcome:
      "EcoPos provides a complete mobile POS experience for retail businesses, combining transaction management, reporting, and attendance tracking in a single application.",
    featuresDelivered: [
      "Complete POS system built with Flutter and BLoC architecture.",
      "Product management and shopping cart features.",
      "Checkout, voucher, payment, and digital receipt functionality.",
      "Report modules with PDF export support.",
      "GPS-based attendance with check-in and check-out validation.",
      "Clean architecture using BLoC, Repository, and DataSource layers.",
    ],
    lessonsLearned: [
      "Modular architecture improves scalability and maintainability.",
      "State management is essential for handling complex features.",
      "API integration requires proper error handling and session management.",
      "User experience becomes more important as application complexity grows.",
      "Collaboration between frontend and backend teams is critical.",
    ],
  },
};

export default ecoposEn;