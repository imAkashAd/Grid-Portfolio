// ============================================================
//  portfolio.js  –  ALL YOUR CONTENT LIVES HERE
//  Edit this file to update your portfolio. No other file
//  needs to be touched for content changes.
// ============================================================

export const meta = {
  name: "Akash Adhikary",
  title: "Software Engineer",
  tagline: "Building cross-platform apps & scalable software.",
  email: "akadhikary199901@gmail.com",
  phone: "+880 1708-504027",
  location: "Badda, Dhaka-1212, Bangladesh",
  domain: "akash.swe", // shown in header logo
  availableForWork: true, // toggle the "Open to opportunities" badge
};

export const links = [
  { label: "GitHub",       href: "https://github.com/imAkashAd",            icon: "github" },
  { label: "LinkedIn",     href: "https://linkedin.com/in/akash-cse",        icon: "linkedin" },
  { label: "Email",        href: "mailto:akadhikary199901@gmail.com",        icon: "email" },
  { label: "Phone",        href: "tel:+8801708504027",                       icon: "phone" },
  { label: "Portfolio",    href: "https://akashadhikary.vercel.app",         icon: "link" },
  // { label: "Resume", href: "/resume.pdf", icon: "file" }, // add your PDF to /public
];

export const intro = [
  `Hi, I'm Akash — a software engineer who genuinely loves what he does. Over the past 2 years I've worked professionally as a Flutter developer, shipping real products for 10+ international clients across industries while meeting tight deadlines.`,
  `I started as an intern with a willingness to learn. I figured things out fast, took ownership early, and eventually found myself leading a development team — coordinating sprints, reviewing my teammates' code, and making architectural decisions I had to stand behind.`,
  `Right now I'm deepening my backend skills with Spring Boot, because I believe a great mobile engineer who also understands the server side is far more valuable than one who doesn't. I like knowing how the whole system works — not just my corner of it. I enjoy pulling apart a hard problem, finding the logic underneath it, and building something clean on top.`,
  `I hold a B.Sc. in CSE from Green University of Bangladesh, and research genuinely excites me — the idea of working on a problem that doesn't have a Stack Overflow answer yet is something I find more motivating than intimidating. I'm looking for an environment where I can keep growing fast, contribute meaningfully from day one, and work with people who take their craft seriously.`,
];

// tag variants: "mobile" | "web" | "ai" | "cli" | "research" | "live" | "default"
export const projects = [
  {
    title: "Expense Tracker",
    tags: [
      { label: "Mobile App", variant: "mobile" },
      { label: "Play Store Live", variant: "live" },
    ],
    description:
      "A cross-platform personal finance app built with Flutter — lets users track income and expenses with real-time UI updates powered by GetX state management. Optimised for a wide range of Android and iOS screen sizes.",
    playStoreHref: "https://play.google.com/store/apps/details?id=com.ar.soft.solutions.expense_tracker",
    githubHref:    "",
  },
  {
    title: "Geography Geyser",
    tags: [
      { label: "Mobile App", variant: "mobile" },
      { label: "Play Store Live", variant: "live" },
    ],
    description:
      "An interactive educational mobile app featuring geography quizzes and progressive challenges. Firebase backend handles real-time data, user progress tracking, and secure authentication. Designed for accessibility across student age groups.",
    playStoreHref: "https://play.google.com/store/apps/details?id=com.geographygeyser.simon",
    githubHref:    "",
  },
  {
    title: "AI Meeting Tool",
    tags: [{ label: "AI Tool", variant: "ai" }],
    description:
      "An AI-powered tool to transcribe meetings, extract action items, and summarise key decisions using voice input and NLP APIs. Built during work at Join Venture AI.",
    playStoreHref: "",
    githubHref:    "",
  },
  {
    title: "API-integrated Flutter Screens",
    tags: [{ label: "Mobile App", variant: "mobile" }],
    description:
      "Multiple client-facing Flutter applications — translating Figma designs into pixel-perfect, production-ready screens with RESTful API integration and robust error/loading state handling.",
    playStoreHref: "",
    githubHref:    "",
  },
];

export const experience = [
  {
    title: "Junior Flutter Developer & Co-Leader, Dev Team",
    company: "Join Venture AI",
    period: "Mar 2025 – Present",
    location: "Mohakhali, Dhaka",
    bullets: [
      "Develop and maintain cross-platform Flutter apps used by real clients, focusing on performance and responsive UI.",
      "Integrate RESTful APIs and manage app state with GetX for smooth, consistent user experiences.",
      "Promoted to Co-Leader — coordinate sprint tasks, review code, mentor junior developers, and contribute to technical decisions.",
      "Support client communication and ensure on-time milestone delivery.",
    ],
  },
  {
    title: "Junior Flutter Developer",
    company: "Softvence Agency",
    period: "Jan 2025 – Mar 2025",
    location: "Mohakhali, Dhaka",
    bullets: [
      "Assisted senior engineers in building Flutter mobile applications — UI development and feature implementation.",
      "Translated Figma designs into functional, responsive Flutter screens.",
      "Gained hands-on experience in RESTful API integration and cross-platform debugging.",
    ],
  },
  {
    title: "Flutter Developer Intern",
    company: "Zensoft Lab",
    period: "Nov 2024 – Jan 2025",
    location: "Kuril, Dhaka",
    bullets: [
      "Converted UI/UX mockups into fully functional Flutter screens, learning industry standards for design-to-code workflow.",
      "Integrated RESTful APIs handling data fetching, error states, and loading flows.",
      "Implemented GetX for clean state management and built production APK files for deployment.",
      "Participated in agile sprints, code reviews, and daily standups.",
    ],
  },
];

export const education = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Green University of Bangladesh",
    period: "2021 – 2025",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "HSC in Science",
    institution: "Govt. BL College, Khulna",
    period: "2017 – 2019",
    location: "Dhaka, Bangladesh",
  },
  {
    degree: "SSC in Science",
    institution: "Border Guard Public School, Khulna",
    period: "2015 – 2017",
    location: "Dhaka, Bangladesh",
  },
];

export const certifications = [
  "Flutter Masterclass — Complete Guide to App Development (Udemy) · Advanced Flutter, state management, deployment",
  "Certificate of Membership — Executive Branch, Green University Computer Club (GUCC)",
];

export const researchInterests = [
  {
    title: "Mobile Systems & Performance",
    description:
      "Cross-platform compilation, rendering pipelines, and performance benchmarking in mobile frameworks like Flutter.",
  },
  {
    title: "AI / ML Integration in Apps",
    description:
      "Applied NLP, speech-to-text, and on-device ML models within mobile and web applications.",
  },
  {
    title: "Software Engineering Practices",
    description:
      "Clean architecture, state management patterns, and CI/CD for scalable software delivery.",
  },
];

export const interests = [
  { title: "Mobile Development",      description: "Flutter, Dart, cross-platform apps, Play Store deployment" },
  { title: "Full-Stack Engineering",  description: "REST APIs, Firebase, Python backends, system design" },
  { title: "Design Engineering",      description: "Figma, Adobe Illustrator, Photoshop, UI/UX implementation" },
];

export const hobbies = [
  { title: "Open Source",      description: "Contributing to Flutter packages and dev-tooling projects on GitHub." },
  { title: "Vibe Coding",      description: "Rapidly prototyping ideas into working apps with AI coding tools." },
  { title: "Technical Writing", description: "Documenting projects, writing clean READMEs, and sharing knowledge." },
];

export const skills = [
  { group: "Languages",           items: ["Dart", "Java", "Python", "C/C++"] },
  { group: "Mobile & Frameworks", items: ["Flutter", "GetX", "Firebase", "REST APIs"] },
  { group: "Tools",               items: ["Git", "GitHub", "Android Studio", "VS Code", "Figma"] },
  { group: "Design",              items: ["Adobe Illustrator", "Adobe Photoshop"] },
  { group: "Soft Skills",         items: ["Leadership", "Mentoring", "Client Communication", "Agile"] },
];
