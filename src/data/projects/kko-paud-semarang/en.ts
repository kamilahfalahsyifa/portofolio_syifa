import type { ProjectContent } from "@/types/project";

const kkoPaudEn: ProjectContent = {
  title: "KKO PAUD Semarang City",
  subtitle: "Organization Profile Website & Community Information System",
  description:
    "KKO PAUD Semarang City is an organization focused on early childhood education coordination across the city. This platform was built to centralize their organizational profile, activities, and member information in one accessible place.",
  shortDescription:
    "Organization profile website and community information system for KKO PAUD Semarang City.",
  year: "2024",
  role: "Fullstack Developer & UI/UX Designer (Internship)",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Figma"],
  introduction: [
    "KKO PAUD Semarang City is an organization focused on early childhood education coordination across the city. This platform was built to centralize their organizational profile, activities, and member information in one accessible place.",
  ],
  decisions: [
    {
      label: "Decision",
      title: "Laravel-powered CMS website",
      description:
        "We built an organization profile website using Laravel with a simple content management system, allowing administrators to update information independently without relying on developers for every change.",
    },
  ],
  problem: {
    background:
      "Before this platform, KKO PAUD Semarang City had no central place to publish information about the organization, its activities, or its members. Communication was fragmented across social media, and the public had no reliable source for official updates.",
    challenges: [
      "Organizational information was scattered across multiple channels with no central source of truth.",
      "Activity documentation was difficult to archive and retrieve.",
      "News and updates relied entirely on social media platforms.",
      "The public had no access to official organizational information.",
      "There was no digital platform to strengthen the organization's credibility.",
    ],
    objectives: [
      "Provide a single official source for organizational information.",
      "Make activity documentation easy to archive and retrieve.",
      "Publish news and updates independently of social media.",
      "Give the public a reliable channel for official information.",
      "Strengthen the organization's digital credibility.",
    ],
  },
  discussion: {
    requirements: [
      "Official organization profile page.",
      "News and article management system.",
      "Activity documentation gallery.",
      "Member and legal information pages.",
      "Admin dashboard for content management.",
      "Responsive design for desktop and mobile.",
    ],
    architecture:
      "The website is built with Laravel as a server-rendered PHP application. A simple admin dashboard lets organization administrators manage news, activities, galleries, and legal documents independently, without requiring code changes for routine content updates.",
    technologyStack: [
      { name: "Laravel", description: "Server-side PHP framework powering the website and admin CMS." },
      { name: "MySQL", description: "Relational database for storing news, activities, and member information." },
      { name: "Bootstrap", description: "CSS framework for a responsive and consistent user interface." },
      { name: "Figma", description: "UI/UX design tool used for wireframing and interface design." },
    ],
    developmentProcess:
      "The project was developed iteratively in close collaboration with the organization. The information architecture was mapped first, then wireframes and UI were designed in Figma, followed by Laravel implementation of the public website and the admin dashboard.",
    screenshots: [
      "/projects/kkopaud/cover.jpg",
      "/projects/kkopaud/banner.jpg",
    ],
  },
  result: {
    outcome:
      "The website successfully became the official information platform for KKO PAUD Semarang City, improving communication, simplifying information distribution, and strengthening the organization's digital presence.",
    featuresDelivered: [
      "Official organization profile page.",
      "News and article management system.",
      "Activity documentation gallery.",
      "Member and legal information pages.",
      "Admin dashboard for content management.",
      "Responsive design for desktop and mobile.",
    ],
    lessonsLearned: [
      "Building administrative systems requires balancing functionality and simplicity.",
      "Responsive design is essential because users access information from multiple devices.",
      "Separating public and admin modules improves maintainability.",
      "File uploads and media management need careful organization.",
      "User-friendly interfaces significantly reduce operational complexity.",
    ],
  },
};

export default kkoPaudEn;