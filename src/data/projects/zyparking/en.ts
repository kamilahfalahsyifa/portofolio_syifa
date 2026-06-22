import type { ProjectContent } from "@/types/project";

const zyparkingEn: ProjectContent = {
  title: "ZyParking",
  description: "A smart parking experience concept focused on parking discovery, navigation, reservation, and QR-based access.",
  shortDescription: "Smart Parking Experience for Urban Mobility",
  year: "2025",
  role: "Product Lead & UI/UX Designer",
  techStack: ["Figma"],
  introduction: [
    "ZyParking is a self-initiated concept exploring what a parking experience could feel like when it is treated as a connected journey, from planning a trip to walking out of the building, rather than a fragmented stop along the way.",
    "The project is a design exploration, not a shipped product. It gave me room to think about indoor navigation, real-time availability, and QR access as a single system, and to test how far Figma could carry a product idea before any code is written.",
  ],
  decisions: [
    {
      label: "Decision 01",
      title: "Color-coded parking map",
      description:
        "To improve readability while driving, the parking slots were simplified into red and green indicators. Drivers can see availability at a glance instead of decoding numbers or empty lots.",
    },
    {
      label: "Decision 02",
      title: "Hybrid QR flow",
      description:
        "Different parking facilities use different hardware, so the system supports both scanning a kiosk QR and presenting a personal QR at the gate. One flow, two entry modes.",
    },
    {
      label: "Decision 03",
      title: "Premium membership",
      description:
        "Subscription was introduced to support long-term sustainability. Members get priority slots, faster exit, and bundled services, framed as convenience rather than a paywall.",
    },
  ],
  contributions: [
    "Conducted user research and mapped the end-to-end parking journey.",
    "Designed the full UI/UX system in Figma, including flow, components, and visual style.",
    "Designed the color-coded parking availability map and indoor navigation flow.",
    "Prototyped the QR-based entry and exit system with reservation flow.",
    "Iterated on the design based on feedback to simplify the parking experience.",
  ],
  problem: {
    background:
      "Finding a parking space in large buildings such as shopping malls, office complexes, and public facilities can be surprisingly time-consuming. Drivers often spend several minutes navigating crowded parking areas without knowing where available spaces are located. Beyond the inconvenience, this creates unnecessary traffic inside parking facilities, increases fuel consumption, and negatively impacts the overall visitor experience.",
    challenges: [
      "Limited visibility into available parking spaces",
      "Difficult navigation inside large parking facilities",
      "Dependence on physical parking tickets",
      "Inability to reserve parking spaces before arrival",
      "Limited opportunities for additional value-added services",
    ],
    objectives: [
      "Help users locate parking spaces more efficiently",
      "Provide intuitive indoor navigation",
      "Replace physical tickets with QR-based access",
      "Enable parking reservations",
      "Explore premium service opportunities",
    ],
  },
  discussion: {
    requirements: [
      "Real-time parking availability display",
      "Indoor navigation to parking spaces",
      "QR-based entry and exit system",
      "Parking reservation before arrival",
      "Premium membership concept",
    ],
    architecture:
      "The design follows a mobile-first approach with a focus on simplicity and clarity. The parking map uses color-coded indicators for availability status. Navigation is simplified to just essential guidance elements.",
    technologyStack: [
      { name: "Figma", description: "Primary design tool for UI/UX design and prototyping" },
      { name: "Color-coded Map", description: "Visual parking availability indicators" },
      { name: "QR Access System", description: "Digital ticketing for entry and exit" },
      { name: "Reservation Flow", description: "Pre-arrival parking booking" },
    ],
    developmentProcess:
      "The design process began by mapping the end-to-end parking journey, from planning a trip to exiting the parking facility. Several friction points were identified around parking availability, navigation, and ticket management. Key design decisions included color-coded parking maps, simplified parking grid layouts, minimal navigation guidance, and a flexible QR access flow.",
    screenshots: [
      "/projects/zyparking/zyparking mockup.jpg",
      "/projects/zyparking/zyparking mockup.jpg",],
  },
  result: {
    outcome:
      "The final design presents a connected parking experience focused on visibility, convenience, and ease of navigation. Rather than treating parking as a simple entry-and-exit process, the concept reimagines it as a digital journey that begins before arrival and continues until departure.",
    featuresDelivered: [
      "Real-time parking map with availability indicators",
      "Indoor navigation to selected parking spaces",
      "QR-based digital ticketing system",
      "Parking reservation before arrival",
      "Premium membership concept with priority benefits",
    ],
    lessonsLearned: [
      "Designing for physical environments requires consideration of hardware constraints",
      "Complex parking layouts should be simplified into familiar visual patterns",
      "Business goals can be integrated without compromising the core user experience",
    ],
  },
};

export default zyparkingEn;
