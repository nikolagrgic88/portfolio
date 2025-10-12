import {
  IMAGES_CONTACT,
  IMAGES_MFA,
  IMAGES_PROJECTS,
  IMAGES_SUPPORT,
  IMAGES_WCAG,
} from "./images";

export const ABOUTb =
  "My journey into the world of front-end development began with a spark of curiosity and a drive to solve problems through technology. I'm largely self-taught, having dedicated countless hours to hands-on coding, online courses and building my own projects. This self-directed approach has instilled in me a relentless desire to learn and adapt to new challenges.";
export const ABOUTc =
  "My focus has always been on creating web applications that are not just functional, but truly enjoyable to use. I believe that everyone deserves a seamless and accessible online experience. Through my proficiency in JavaScript, React and other front-end technologies, I strive to build intuitive interfaces that engage and delight users.";
export const ABOUTa = `I'm a self-taught developer with a love for coding and
          problem-solving, focused on creating intuitive and engaging user
          experiences. I have hands-on experience with various front-end
          technologies and a solid understanding of back-end fundamentals,
          enabling effective collaboration on full-stack projects.`;
export const EXPERIENCE = [
  {
    id: 1,
    name: "Experience",
    images: IMAGES_MFA,
    heading: "Experience",
    content:
      "During my time at Service NSW, I contributed significantly to the development of front-end features focused on enhancing customer identity and authentication flows. My work on Multi-Factor Authentication (MFA) and Account Recovery was built with React, Redux, SCSS and React Router, ensuring a seamless and responsive user experience across devices. I collaborated closely with mobile teams to ensure these critical features were tested thoroughly, utilizing tools like JEST and manual testing. I also documented procedures in Confluence, making sure our efforts were well-documented and easily accessible to the team.",
  },
  {
    id: 2,
    name: "Account Recovery",
    images: IMAGES_MFA,
    heading: "Account Recovery",
    content:
      "As part of the team at Service NSW, I contributed to the development of the Account Recovery flow, ensuring users could regain access to their accounts quickly and securely. I worked with React and Redux to help create an intuitive user experience, making the process as smooth as possible. My collaboration with the Customer Profile team ensured that the recovery flow integrated seamlessly with our broader authentication system, providing users with a consistent and efficient experience.",
  },
  {
    id: 3,
    name: "Push Notification",
    images: IMAGES_MFA,
    heading: "Push Notification",
    content:
      "At Service NSW, I helped develop and optimize the Push Notification system as part of the Multi-Factor Authentication (MFA) flow. Working with the Mobile team, I ensured seamless functionality of push notifications across all devices. This feature not only improved security but also enhanced the user experience by offering a streamlined authentication process. I focused on creating a solution that was reliable and easy to use, ensuring users received timely notifications without hassle.",
  },
  {
    id: 4,
    name: "Accessibility",
    images: IMAGES_WCAG,
    heading: "Accessibility Improvements",
    content:
      "I played a key role in improving the accessibility of our authentication login and signup flow to meet AA compliance standards. I conducted thorough audits and implemented code changes to ensure our platform was accessible to all users. My work involved close collaboration with the design team, where we reworked the layout and structure of key pages to ensure that our platform met the highest accessibility standards, making the service easier to use for everyone.",
  },
  {
    id: 5,
    name: "Support",
    images: IMAGES_SUPPORT,
    heading: "Customer Support & Issue Resolution",
    content:
      "As part of the Customer Support team, I tackled a variety of authentication issues ranging from login failures to account unblocking, all while using tools like Postman, Splunk, Auth0 and Salesforce. I took pride in solving complex technical problems and providing clear, concise communication to customers. My efforts helped reduce the backlog of support tickets by over 60%, a testament to my dedication to resolving customer inquiries quickly and effectively.",
  },
];
export const CONNECT = [
  {
    image: IMAGES_CONTACT[0],
    url: "https://www.linkedin.com/in/nikola-grgic-6a0112242/?trk=opento_sprofile_topcard",
  },
  {
    image: IMAGES_CONTACT[1],
    url: "https://github.com/nikolagrgic88?tab=repositories",
  },
];

export const PROJECTS = [
  {
    img: IMAGES_PROJECTS[0],
    name: "Chair Affair - E-commerce store",
    text: "Chair Shop",
    websiteRef: "https://ikea-data-4d4f9.web.app/",
    gitHubRef: "https://github.com/nikolagrgic88/the-Chair-affair",
    stack: "(React • Firebase • CSS • Motion • MUI • Redux • TS)",
    description:
      "A modern e-commerce platform for browsing and purchasing chairs with an intuitive interface and real-time updates.",
    features: [
      "Responsive across devices",
      "Firebase authentication & database",
      "Smooth cart & checkout flow",
      "Optimized performance with lazy loading",
      "State management with Redux",
    ],
    isLive: true,
  },
  {
    img: IMAGES_PROJECTS[2],
    name: "Stockify - Warehouse System",
    text: "Stockify",
    websiteRef: "https://teamview-tv.web.app/",
    gitHubRef: "https://github.com/nikolagrgic88/stockify",
    stack:
      "(React • React Router • Zustand • React Query • MUI • Express.js • JWT Auth • Render • Firestore • Mongoose/MongoDB)",
    description:
      "A full-stack warehouse management system supporting inventory, orders and user authentication.",
    features: [
      "Secure JWT authentication with role-based access control",
      "Inventory and order management dashboard with real-time updates",
      "State management handled by Zustand",
      "Data fetching and caching powered by React Query",
      "Responsive React frontend styled with MUI",
      "Express.js backend deployed on Render",
      "Firestore integration for real-time front-end data",
      "MongoDB with Mongoose for database operations",
    ],
    isLive: true,
    login: {
      company: { id: "6769bf4c7e594591107dd92c", password: "Company1" },
      user: { id: "User@gmail.com", password: "Password123" },
    },
  },
  {
    img: IMAGES_PROJECTS[1],
    name: "Pet registry",
    text: "Pet registry project",
    websiteRef: "",
    gitHubRef: "https://github.com/nikolagrgic88/petProject",
    stack: "(React • React Router • MUI • Kotlin • PostgreSQL)",
    description:
      "A simulation of the NSW Government Pet Registry that allows users to register and manage pets securely.",
    features: [
      "User-friendly interface styled with MUI",
      "Secure backend built in Kotlin with PostgreSQL",
      "Routing and navigation powered by React Router",
      "Form validation & data persistence for pet records",
    ],
    isLive: false,
  },
];

export const HERO_BIO = {
  heading: "Hi! I'm Nikola",
  headingTwo: "Software Developer",
  description: `I design and build modern web applications with a focus on performance, usability and clean architecture. Experienced in both front-end and back-end development, I bring a full-stack perspective to every project.`,
};
