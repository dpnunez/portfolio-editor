const aboutSnippet = `type Hobby = {
  name: string;
  description?: string;
  stat?: Record<string, string>;
};

const personalInfo = {
  name: "Daniel",
  title: "Front-End Developer",
  bio: "Building seamless web interfaces while indulging in tech and gaming hobbies.",
  contact: {
    email: "daniel.portonunez@gmail.com",
    github: "https://www.github.com/dpnunez",
    linkedin: "https://www.linkedin.com/in/daniel-porto-nunez/",
  },
};

const hobbies: Hobby[] = [
  {
    name: "Mechanical Keyboards",
    description: "Collecting, customizing, and experimenting with mechanical switches for the perfect typing feel.",
  },
  {
    name: "Travel",
    description: "Exploring new cultures and places, capturing inspiration for creative projects.",
  },
  {
    name: "CS2",
    stat: {
      gc: 18,
      faceit: 8
    },
  },
  {
    name: "League of Legends", // retired 🙏
    stat: {
      main: "Cassiopeia",
      peak_rank: "Platinum I"
    },
  },
];

export { personalInfo, hobbies };`;

const educationSnippet = `type Education = {
  degree: string;
  institution: string;
  location: string;
  startYear: number;
  endYear?: number;
  description?: string;
};

const education: Education[] = [
  {
    degree: "High School with Technical Focus in Electronics",
    institution: "Instituto Federal Sul-Rio-Grandense (IFSul)",
    location: "Pelotas, Brazil",
    startYear: 2015,
    endYear: 2019,
    description: "A technical high school program with an emphasis on electronics, including circuit design and hardware programming.",
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "Universidade Federal de Pelotas (UFPEL)",
    location: "Pelotas, Brazil",
    startYear: 2020,
    description: "Currently pursuing a degree focused on software development, algorithms, and data structures.",
  },
  {
    degree: "Exchange Program in Computer Science",
    institution: "Instituto Politécnico de Bragança (IPB)",
    location: "Bragança, Portugal",
    startYear: 2025,
    description: "Part of an exchange program, this internship will focus on software engineering and development practices.",
  },
];

export { education };`;

const skillsSnippet = `const skills = {
  languages: ["JavaScript", "TypeScript", "Swift", "Elixir", "Java"],
  frameworks: [
    "React", 
    "Next.js", 
    "Vue", 
    "Svelte", 
    "Express", 
    "NestJS", 
    "Phoenix",
    "Spring Boot"
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB"],
  orm: ["TypeORM", "Prisma"],
  tools: [
    "Git", 
    "Docker", 
    "Vitest", 
    "Playwright", 
    "VSCode",
    "NeoVim", // btw I use Vim 🤓👆 
    "XCode",
    "Figma",
    "TablePlus",
    "Vim"
  ],
};

export { skills };
`;

export { aboutSnippet, educationSnippet, skillsSnippet };
