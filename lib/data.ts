export const profile = {
  name: "Eryll Joy Salamanes",
  firstName: "Eryll Joy",
  lastName: "Salamanes",
  tag: "Portfolio / Mobile & Full-Stack Developer",
  roles: ["Flutter", "Laravel", "React", "Android"],
  summary:
    "Results-driven developer with deep expertise in cross-platform mobile and full-stack web development. Known for clean, testable code and delivering scalable solutions across enterprise and startup environments.",
  contact: {
    email: "eryll.salamanes27@gmail.com",
    phone: "09284629589",
    location: "Davao City, PH",
    languages: "English · Tagalog",
  },
};

export const stats = [
  { value: "9+", label: "Years exp." },
  { value: "9", label: "Companies" },
  { value: "2", label: "Platforms" },
  { value: "10+", label: "Tech stacks" },
];

export type Experience = {
  title: string;
  company: string;
  date: string;
  duties: string[];
};

export const experiences: Experience[] = [
  {
    title: "Full-stack Web Developer",
    company: "Webee Labs (Part-time)",
    date: "May 2025 — Present",
    duties: [
      "Built and maintained scalable REST APIs with Laravel, handling auth, role-based access, and complex data workflows.",
      "Developed responsive front-end interfaces with HTML, CSS/SCSS, JavaScript, and modern frameworks.",
    ],
  },
  {
    title: "Flutter & Backend Developer",
    company: "Codev Solutions Inc",
    date: "Jun 2023 — Aug 2025",
    duties: [
      "Developed and maintained cross-platform mobile apps using Flutter for iOS and Android.",
      "Implemented Firebase integration for real-time driver location tracking.",
      "Built a ticketing & payment system using Laravel REST APIs with PayMongo SDK.",
      "Designed RESTful APIs for authentication, ticketing, and workflows using Eloquent ORM.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "AirAsia / IndraPH (Freelance)",
    date: "Aug 2022 — Sep 2024",
    duties: [
      "Maintained RedEye, an internal incident-reporting platform used by AirAsia cabin crew.",
      "Implemented UI improvements and new features using Flutter.",
      "Designed and integrated Laravel-based APIs for authentication and secure communication.",
    ],
  },
  {
    title: "Flutter Developer",
    company: "TelosHealth / FinaleHealth",
    date: "Jan 2021 — Feb 2023",
    duties: [
      "Maintained and enhanced a healthcare app on Google Play Store.",
      "Added new Flutter modules to improve patient experience and performance.",
      "Integrated REST APIs with backend team for reliable data flow.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Rev365",
    date: "Apr 2021 — Jun 2022",
    duties: [
      "Built middleware systems for Valore Books, connecting multiple external APIs.",
      "Developed scalable back-end services using PHP CodeIgniter.",
      "Enhanced frontend with API-driven features for smoother UX.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Awesome OS",
    date: "Oct 2020 — Aug 2021",
    duties: [
      "Co-developed an HR and payroll management system covering recruitment, DTR, and payroll.",
      "Maintained backend with PHP CodeIgniter; enhanced UI with jQuery.",
    ],
  },
  {
    title: "Full-Stack Web Developer",
    company: "Naxum Online Marketing Service, LLC",
    date: "Aug 2019 — Sep 2020",
    duties: [
      "Built commission calculator systems and backend logic from scratch.",
      "Designed financial computation systems using PHP Laravel.",
      "Delivered multiple frontend projects with Vue.js, React.js, and jQuery.",
    ],
  },
  {
    title: "Mobile App Developer (Android)",
    company: "IdeaHub Solutions Inc & Futuristech Studios",
    date: "Aug 2019 — Sep 2020",
    duties: [
      "Developed mobile ordering systems from scratch with custom UI designs and interactive animations.",
      "Created business apps for product advertisement and merchant promotions.",
      "Maintained and updated apps on Google Play Store; applied strong debugging and optimization practices.",
    ],
  },
];

export type Project = {
  name: string;
  stack: string;
  description: string;
  status: "inprogress" | "done" | "placeholder";
  liveUrl?: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    name: "[Project Name]",
    stack: "Next.js · [Your Tech Stack]",
    description:
      "Brief 1-line description of what the project does and the problem it solves.",
    status: "inprogress",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    name: "[Project Name]",
    stack: "Flutter · Laravel · [Your Tech Stack]",
    description:
      "Brief 1-line description of what the project does and the problem it solves.",
    status: "done",
    liveUrl: "#",
    githubUrl: "#",
  },
];

export type Skill = {
  name: string;
  hot?: boolean;
};

export const skills: Skill[] = [
  { name: "Flutter", hot: true },
  { name: "Laravel", hot: true },
  { name: "Firebase", hot: true },
  { name: "REST APIs", hot: true },
  { name: "Android Dev" },
  { name: "React.js" },
  { name: "Vue.js" },
  { name: "CodeIgniter" },
  { name: "PHP" },
  { name: "Eloquent ORM" },
  { name: "PayMongo SDK" },
  { name: "HTML / CSS" },
  { name: "SCSS" },
  { name: "JavaScript" },
  { name: "jQuery" },
  { name: "Git" },
];

export type Education = {
  school: string;
  degree: string;
  year: string;
};

export const education: Education[] = [
  {
    school: "University of the Immaculate Conception",
    degree: "BS Information Technology — Major in Networks",
    year: "2012 – 2016",
  },
  {
    school: "Saint Theresa College of Tandag Inc",
    degree: "Secondary Education",
    year: "2008 – 2012",
  },
];
