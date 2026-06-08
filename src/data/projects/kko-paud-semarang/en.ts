import type { ProjectContent } from "@/types/project";

const kkoPaudEn: ProjectContent = {
  title: "KKO PAUD Semarang City",
  description: "Organization Profile Website and Community Information Platform",
  shortDescription: "Developed during an internship at the Communication and Information Office (Diskominfo) of Semarang City to provide a centralized digital platform for KKO PAUD.",
  year: "2024",
  role: "Frontend Developer & UI/UX Designer (Internship)",
  techStack: ["Laravel", "PHP", "MySQL", "Bootstrap", "JavaScript", "Figma"],
  problem: {
    background:
      "KKO PAUD Semarang City is an organization focused on collaboration and development in early childhood education. Prior to this project, information about organizational profiles, activities, news, and documentation was distributed across multiple channels, making it difficult for members and the public to access information efficiently.",
    challenges: [
      "Organizational information was not centralized.",
      "News and activity updates relied heavily on social media.",
      "Activity documentation was difficult to archive and retrieve.",
      "The public had limited access to official organizational information.",
      "The organization lacked a dedicated digital platform to strengthen its credibility.",
    ],
    objectives: [
      "Build an official website as a centralized information platform.",
      "Provide organization profiles, news, activities, galleries, and contact information.",
      "Improve information distribution to members and the public.",
      "Strengthen organizational credibility through a professional online presence.",
      "Provide an easy-to-manage content management system for administrators.",
    ],
  },
  discussion: {
    requirements: [
      "Organization profile pages.",
      "News and article management.",
      "Activity gallery.",
      "Member and organizational structure information.",
      "Contact and legal information pages.",
      "Administrative dashboard for content management.",
    ],
    architecture:
      "The website was designed using a content-driven approach with a strong focus on information accessibility. Navigation was intentionally simplified to help users find important information quickly. The interface was developed responsively to ensure a consistent experience across desktop and mobile devices.",
    technologyStack: [
      { name: "PHP", description: "Used to build the backend functionality and manage dynamic website content." },
      { name: "MySQL", description: "Used to store articles, galleries, organizational profiles, and supporting information." },
      { name: "Bootstrap", description: "Used to create a responsive and consistent user interface." },
      { name: "Figma", description: "Used for wireframing and interface design before implementation." },
    ],
    developmentProcess:
      "The development process started with stakeholder discussions and requirements gathering. Information architecture and UI designs were prepared before implementation. The website was then developed using Laravel with a content management workflow that allows administrators to update content independently without modifying source code.",
    screenshots: [
      "/projects/kkopaud/kko mockup.jpg",
      "/projects/kkopaud/kko mockup.jpg",
    ],
  },
  result: {
    outcome:
      "The website successfully became the official information platform for KKO PAUD Semarang City. Important information is now centralized and easily accessible, improving communication, information distribution, and the organization's digital presence.",
    featuresDelivered: [
      "Organization profile website.",
      "News and article management system.",
      "Activity gallery.",
      "Member and legal information pages.",
      "Administrative dashboard.",
      "Responsive design for desktop and mobile.",
    ],
    lessonsLearned: [
      "Understanding non-technical user needs is essential when building organizational information systems.",
      "Well-structured information architecture significantly improves usability.",
      "Effective stakeholder communication helps streamline development and revision cycles.",
    ],
  },
};

export default kkoPaudEn;
