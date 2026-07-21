import type { Job } from "../types/job";

export const jobs: Job[] = [
  {
    id: 1,
    company: "Google",
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹18 LPA",
    type: "Full Time",
    experience: "2-4 Years",
    posted: "2 Days Ago",

    description:
      "Google is looking for a passionate Frontend Developer who enjoys building fast, scalable and user-friendly web applications using modern technologies.",

    requirements: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "REST API",
      "Git",
      "Tailwind CSS",
    ],

    responsibilities: [
      "Build reusable UI components",
      "Integrate REST APIs",
      "Collaborate with designers",
      "Write clean and maintainable code",
      "Improve performance",
    ],

    aboutCompany:
      "Google is one of the world's leading technology companies focused on innovation, AI, cloud computing and digital products.",
  },

  {
    id: 2,
    company: "Microsoft",
    title: "React Developer",
    location: "Hyderabad",
    salary: "₹22 LPA",
    type: "Remote",
    experience: "3-5 Years",
    posted: "1 Day Ago",

    description:
      "Microsoft is hiring experienced React Developers to create enterprise-grade web applications used by millions of users.",

    requirements: [
      "React",
      "TypeScript",
      "Azure",
      "Redux",
      "HTML",
      "CSS",
    ],

    responsibilities: [
      "Develop enterprise applications",
      "Work with backend engineers",
      "Improve application performance",
      "Participate in code reviews",
      "Write reusable code",
    ],

    aboutCompany:
      "Microsoft builds world-class software products including Windows, Azure, Microsoft 365 and AI-powered services.",
  },

  {
    id: 3,
    company: "Amazon",
    title: "UI Engineer",
    location: "Pune",
    salary: "₹20 LPA",
    type: "Hybrid",
    experience: "1-3 Years",
    posted: "Today",

    description:
      "Amazon is looking for a UI Engineer to build responsive and high-performance customer experiences.",

    requirements: [
      "React",
      "JavaScript",
      "CSS",
      "Responsive Design",
      "Git",
    ],

    responsibilities: [
      "Develop responsive interfaces",
      "Optimize page speed",
      "Collaborate with product teams",
      "Fix UI bugs",
      "Maintain design consistency",
    ],

    aboutCompany:
      "Amazon is a global leader in e-commerce, cloud computing and digital services.",
  },

  {
    id: 4,
    company: "Adobe",
    title: "Frontend Engineer",
    location: "Noida",
    salary: "₹16 LPA",
    type: "Full Time",
    experience: "2-5 Years",
    posted: "3 Days Ago",

    description:
      "Adobe is seeking creative frontend engineers to build premium digital experiences.",

    requirements: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
    ],

    responsibilities: [
      "Develop new UI features",
      "Improve accessibility",
      "Maintain reusable components",
      "Fix frontend issues",
      "Work with UX team",
    ],

    aboutCompany:
      "Adobe develops creative software like Photoshop, Illustrator and Acrobat used worldwide.",
  },

  {
    id: 5,
    company: "Netflix",
    title: "React Engineer",
    location: "Remote",
    salary: "₹28 LPA",
    type: "Remote",
    experience: "4-6 Years",
    posted: "5 Hours Ago",

    description:
      "Netflix is hiring React Engineers to improve the streaming experience across devices.",

    requirements: [
      "React",
      "Performance Optimization",
      "TypeScript",
      "GraphQL",
      "Testing",
    ],

    responsibilities: [
      "Build streaming interfaces",
      "Optimize rendering",
      "Develop reusable modules",
      "Write tests",
      "Work with global teams",
    ],

    aboutCompany:
      "Netflix is one of the largest streaming platforms serving millions of users worldwide.",
  },

  {
    id: 6,
    company: "Meta",
    title: "Software Engineer",
    location: "London",
    salary: "$120K",
    type: "Hybrid",
    experience: "3-6 Years",
    posted: "Yesterday",

    description:
      "Meta is hiring Software Engineers to build products used by billions of people.",

    requirements: [
      "React",
      "GraphQL",
      "TypeScript",
      "Performance",
      "Git",
    ],

    responsibilities: [
      "Develop scalable products",
      "Improve UI performance",
      "Collaborate with global teams",
      "Review code",
      "Build reusable libraries",
    ],

    aboutCompany:
      "Meta builds products like Facebook, Instagram, WhatsApp and Threads connecting billions of users.",
  },
];