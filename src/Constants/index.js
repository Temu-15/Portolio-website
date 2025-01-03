import ClouderImage from "../assets/images/clouderimage.png";
import RestaurantImage from "../assets/images/restaurant-web.png";
import fashionImage from "../assets/images/fashion-image.png";
import CalculatorImage from "../assets/images/calculatorImage.png";
import designerLandingImage from "../assets/images/landingPage.png";
import spotifyCloneImage from "../assets/images/Spotify1.png";
import tourismWebsite from "../assets/images/tourism-website.png";
import { CiShare1 } from "react-icons/ci";
const navLinks = [
  {
    id: "",
    title: "Home",
  },

  {
    id: "about",
    title: "About Me",
  },

  {
    id: "Projects",
    title: "Projects",
  },
  {
    id: "blogs",
    title: "Blogs",
  },
];

const technologyItems = [
  {
    name: "React",
    description: "UI Library",
    imageUrl:
      "https://www.devtopics.com/wp-content/uploads/2023/01/React-icon.svg_.png",
  },
  {
    name: "NextJs",
    description: "React Framework",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMklBUVBX0yV0l3hIdTIxP-luLdoRYZAzvbA&s",
  },
  {
    name: "Redux",
    description: " Production-grade State Management",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/redux.svg",
  },
  {
    name: "Zustand",
    description: "State Management (personal projects)",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpHj4UwTW4ANSlNjzQOiiOqfDa6kal9RpF0A&s",
  },
  {
    name: "Sanity",
    description: "Headless CMS",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/sanity.svg",
  },
  {
    name: "Tailwind CSS",
    description: "Styling Library",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
  },
  {
    name: "TypeScript",
    description: "Typed Superset of JavaScript Library",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
  },
  {
    name: "Sass",
    description: "CSS Preprocessor",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/sass-1.svg",
  },
  {
    name: "VitePress",
    description: "Static Site Generator",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMmiq5npYENgOp6jbcvCSYCfGtG6z9RAbkHQ&s",
  },
  {
    name: "Python",
    description: "Programming Language",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
];

const ProjectInfo = [
  {
    name: "clouder",
    liveLink: "https://temu-15.github.io/cloud-hosting-web/",
    GithubLink: "https://github.com/Temu-15/cloud-hosting-web",
    previewImage: ClouderImage,
    overviewInfo: [
      "Clouder is a user-friendly application designed to provide cheap and effective cloud hosting services. It is one of the first projects I created while learning web development three years ago.",
      "The platform offers features like quick deployment, affordable plans, and a user-friendly interface to manage cloud hosting services.",
    ],
    technologies: [
      { name: "Figma", link: "https://www.figma.com/" },
      { name: "HTML", link: "https://www.w3schools.com/html/" },
      { name: "CSS", link: "https://www.w3schools.com/css/" },
      { name: "Vanilla JavaScript", link: "https://www.w3schools.com/js/" },
    ],
    features: {
      smallDescription:
        "Features include user-friendly control panels and automated updates.",
      featureLists: [
        "Websites deployed in under 60 seconds.",
        "Flexible hosting plans for all budgets.",
        "Dynamic caching for optimal speed.",
        "24/7 expert support.",
        "Automated site migration tools.",
      ],
    },
    challenges: {
      smallDescription:
        "The main challenge was optimizing performance under high traffic.",
      challengeLists: [
        "Implemented Nginx as a load balancer.",
        "Used Redis for caching API responses.",
        "Secured user sessions with advanced authentication mechanisms.",
      ],
    },
    nextItemLink: "Restaurant Website",
  },
  {
    name: "Restaurant Website",
    liveLink: "https://restaurant-app-steel-kappa.vercel.app/",
    GithubLink: "https://github.com/Temu-15/restaurant-app",
    previewImage: RestaurantImage,
    overviewInfo: [
      "A modern, user-friendly restaurant website with dynamic menu functionality and responsive design.",
      "The website includes features like a contact form, map integration, and a clean UI.",
    ],
    technologies: [
      { name: "ReactJs", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "React Icons", link: "https://reactjs.org/docs/react-api.html" },
      { name: "React Router", link: "https://reactrouter.com/" },
      { name: "Vite", link: "https://vitejs.dev/" },
    ],
    features: {
      smallDescription:
        "The project features a clean UI and responsive layout.",
      featureLists: [
        "Dynamic menu fetched from a JSON file.",
        "Responsive layout using CSS Grid and Flexbox.",
        "Google Maps API integration.",
        "Contact form with validation.",
      ],
    },
    challenges: {
      smallDescription:
        "Adapting the website to various screen sizes was a challenge.",
      challengeLists: [
        "Used CSS Grid and Flexbox for responsive design.",
        "Implemented ARIA attributes for accessibility.",
        "Optimized the website for SEO.",
      ],
    },
    nextItemLink: "Tourism Agency Website",
  },
  {
    name: "Tourism Agency Website",
    liveLink: "https://tourism-website-x.vercel.app/",
    GithubLink: "https://github.com/Temu-15/Tourism-Website",
    previewImage: tourismWebsite,
    overviewInfo: [
      "A vibrant tourism agency website promoting travel packages and destinations.",
      "Features include a dynamic menu, map integration, and responsive design.",
    ],
    technologies: [
      { name: "ReactJs", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "React Icons", link: "https://reactjs.org/docs/react-api.html" },
      {
        name: "Google Maps API",
        link: "https://developers.google.com/maps/documentation",
      },
      { name: "Vite", link: "https://vitejs.dev/" },
    ],
    features: {
      smallDescription: "The project emphasizes modern UI and functionality.",
      featureLists: [
        "Dynamic menu fetched from JSON.",
        "Responsive design with CSS Grid and Flexbox.",
        "Contact form for user inquiries.",
        "Google Maps API integration.",
      ],
    },
    challenges: {
      smallDescription:
        "Ensuring compatibility across devices and SEO optimization.",
      challengeLists: [
        "Responsive design for different screen sizes.",
        "Added accessibility features with ARIA attributes.",
        "Improved search engine optimization.",
      ],
    },
    nextItemLink: "Fashionista",
  },
  {
    name: "Fashionista",
    liveLink: "https://temu-15.github.io/Fashion-Website/",
    GithubLink: "https://github.com/Temu-15/Fashion-Website",
    previewImage: fashionImage,
    overviewInfo: [
      "An eCommerce platform showcasing fashion collections with promotional offers.",
      "The project includes a dynamic UI with a modern aesthetic.",
    ],
    technologies: [
      { name: "ReactJs", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "React Icons", link: "https://reactjs.org/docs/react-api.html" },
      { name: "React Router", link: "https://reactrouter.com/" },
      {
        name: "Google Maps API",
        link: "https://developers.google.com/maps/documentation",
      },
    ],
    features: {
      smallDescription: "Features a sleek UI and responsive layout.",
      featureLists: [
        "Promotional discount sections.",
        "Responsive design for various devices.",
        "Dynamic product catalog.",
      ],
    },
    challenges: {
      smallDescription:
        "Adapting the UI to eCommerce standards and optimizing for speed.",
      challengeLists: [
        "Improved responsiveness for various devices.",
        "Implemented caching for faster load times.",
        "Enhanced product display with dynamic sorting.",
      ],
    },
    nextItemLink: "Calculator App",
  },
  {
    name: "Calculator App",
    liveLink: "https://temu-15.github.io/Calculator-App/",
    GithubLink: "https://github.com/temu-15/calculator-app",
    previewImage: CalculatorImage,
    overviewInfo: [
      "A simple yet functional calculator application for basic arithmetic operations.",
      "This project demonstrates my ability to handle DOM manipulation and JavaScript logic effectively.",
    ],
    technologies: [
      { name: "HTML", link: "https://www.w3schools.com/html/" },
      { name: "CSS", link: "https://www.w3schools.com/css/" },
      { name: "JavaScript", link: "https://www.w3schools.com/js/" },
    ],
    features: {
      smallDescription:
        "A lightweight, user-friendly calculator with essential features.",
      featureLists: [
        "Performs addition, subtraction, multiplication, and division.",
        "Responsive design for desktop and mobile.",
        "Clear and intuitive UI for ease of use.",
      ],
    },
    challenges: {
      smallDescription: "Handling edge cases in arithmetic operations.",
      challengeLists: [
        "Implemented error handling for invalid inputs.",
        "Designed responsive layouts for smaller devices.",
        "Optimized for quick calculations with minimal lag.",
      ],
    },
    nextItemLink: "Designer Landing Page",
  },
  {
    name: "Designer Landing Page",
    liveLink:
      "https://phenomenal-crostata-79064a.netlify.app/components/contacts",
    GithubLink: "https://github.com/Temu-15/Alok-Kaushik",
    previewImage: designerLandingImage,
    overviewInfo: [
      "A stunning, modern landing page created for showcasing design services.",
      "The project emphasizes clean aesthetics and intuitive navigation.",
    ],
    technologies: [
      { name: "ReactJs", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      { name: "React Icons", link: "https://reactjs.org/docs/react-api.html" },
    ],
    features: {
      smallDescription:
        "A professional and responsive landing page for designers.",
      featureLists: [
        "Custom hero section with animations.",
        "Showcase for portfolios and services.",
        "Responsive design for all screen sizes.",
      ],
    },
    challenges: {
      smallDescription: "Ensuring consistent design across all devices.",
      challengeLists: [
        "Used advanced CSS utilities in Tailwind for consistency.",
        "Optimized image loading for fast rendering.",
        "Enhanced UI with scroll-based animations.",
      ],
    },
    nextItemLink: "Spotify Clone",
  },
  {
    name: "Spotify Clone",
    liveLink: "https://spotify-web-temu15.netlify.app/",
    GithubLink: "https://github.com/Temu-15/Spotify-Clone-Website-",
    previewImage: spotifyCloneImage, // Replace with the actual image import if available
    overviewInfo: [
      "A Spotify-inspired music streaming app that mimics the core functionalities of the platform.",
      "The app integrates the Spotify API to authenticate users and fetch their playlists.",
    ],
    technologies: [
      { name: "ReactJs", link: "https://reactjs.org/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
      {
        name: "Spotify API",
        link: "https://developer.spotify.com/documentation/",
      },
      { name: "React Router", link: "https://reactrouter.com/" },
      { name: "Vite", link: "https://vitejs.dev/" },
    ],
    features: {
      smallDescription:
        "A fully responsive music streaming app with Spotify API integration.",
      featureLists: [
        "User authentication via Spotify API.",
        "Real-time playlist fetching and display.",
        "Interactive UI with dark/light themes.",
        "Music player controls for playback.",
      ],
    },
    challenges: {
      smallDescription: "Managing API rate limits and user authentication.",
      challengeLists: [
        "Implemented caching for API requests.",
        "Used context API for state management.",
        "Resolved cross-origin resource sharing (CORS) issues.",
      ],
    },
    nextItemLink: "clouder",
  },
];

const ProjectItems = [
  {
    name: "clouder",
    description: "A sleek website for cloud storage services and applications",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/things-cloud.svg",
  },
  {
    name: "Restaurant Website",
    description: " A user-friendly restaurant website with online ordering.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2PYX5MFetjhhaJPiiDTkN9YwImO8BUuFJw&s",
  },
  {
    name: "Tourism Agency Website",
    description: "  A vibrant website to promote tourism and activities.",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/travel.svg",
  },
  {
    name: "Fashionista",
    description:
      "Developed a stylish and user-friendly platform showcasing fashion collections, with features for promotional discounts and new arrivals",
    imageUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2019/11/01/1572596168/Woman-in-short-dress-312x208.jpg",
  },
  {
    name: "Calculator App",
    description:
      "A simple calculator app that performs basic arithmetic operations",
    imageUrl:
      "https://cdn.mos.cms.futurecdn.net/U8JaYvumQNxwDTjbJCjUeL-1200-80.jpg",
  },
  {
    name: "Designer Landing Page",
    description:
      "This is a portfolio website that I have done for Alok kaushik a software engineer living in india",
    imageUrl:
      "https://phenomenal-crostata-79064a.netlify.app/Images/thumb_imgpsh_fullsize_anim-removebg-preview%20(1)%20(1).png",
  },
  {
    name: "Spotify Clone",
    description:
      "A clone of the popular music player Spotify with ReactJs , Context Api and Spotify Web Api.",
    imageUrl:
      "https://media.wired.com/photos/5927001eaf95806129f51539/master/w_2560%2Cc_limit/spotify-logo-zoom-s.jpg",
  },
];

const Heroes = [
  "Brad Traversy",
  "Mosh Hamedani",
  "Angela Yu",
  "Jonas Schmedtman",
  "Nicholas Covunda",
  "maximilian schwartzeler",
  "Florin Pop",
  "James Q Quick",
  "Dev Ed",
  "Web Dev Simplified",
  "Wes Bos",
  "Stephen Grider",
  "Andrei Neagoie",
];

const Tools = [
  {
    name: "Visual Studio Code",
    description: "Text Editor",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
  },
  {
    name: "JetBrainsPycharm",
    description: "Python IDE",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/jetbrains-pycharm.svg",
  },

  {
    name: "jetbrainsIntelliJ Idea",
    description: "Java IDE",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/intellij-idea-1.svg",
  },
  {
    name: "Mozilla Firefox",
    description: "Web Browser",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/firefox-3.svg",
  },
  {
    name: "Google Chrome",
    description: "Web Browser",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/chrome-modern-.svg",
  },
  {
    name: "Figma",
    description: "Design tool",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/figma-icon.svg",
  },
  {
    name: "Microsoft Todo",
    description: "Task Management",
    imageUrl: "",
  },
  {
    name: "git Bash",
    description: "Git Terminal",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/git-bash.svg",
  },
  {
    name: "Notion",
    description: "note taking and Organization",
    imageUrl: "https://cdn.worldvectorlogo.com/logos/notion-2.svg",
  },
];

export { navLinks, Tools, technologyItems, Heroes, ProjectItems, ProjectInfo };
