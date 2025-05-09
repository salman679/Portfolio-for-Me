import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    slug: "hostel-pro",
    title: "Hostel Pro",
    description:
      "A comprehensive hostel management system for universities, streamlining administration tasks.",
    longDescription:
      "Hostel Pro is a robust MERN stack application designed to simplify hostel administration in universities. It manages meals, reviews, and memberships, providing a delightful experience for students and administrators alike.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    imageUrl: "/image/hostel-pro.png",
    githubUrl: "https://github.com/salman679/Hostel-Pro",
    liveUrl: "https://hostelpro-ed1bf.web.app",
    features: [
      "Responsive design for all devices",
      "Seamless login experience",
      "Meal management system",
      "Review and feedback module",
      "Membership management",
    ],
    challenges:
      "Integrating multiple modules like meals, reviews, and memberships into a cohesive system while ensuring user-friendly navigation.",
    outcome:
      "Successfully deployed a full-featured hostel management system adopted by university administrations for efficient hostel operations.",
  },
  {
    id: 2,
    slug: "fixify",
    title: "Fixify",
    description:
      "A service-sharing web application connecting users with various service providers.",
    longDescription:
      "Fixify is a platform that bridges the gap between service providers and users. It allows users to add, update, and delete services, browse services shared by others, book services, and manage the statuses of booked services, all within a user-friendly interface.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Firebase",
    ],
    imageUrl: "/image/fixify.png",
    githubUrl: "https://github.com/salman679/Fixify-client",
    liveUrl: "https://peak-summer-445602-e8.web.app",
    features: [
      "User authentication and authorization",
      "Service listing and management",
      "Booking system with status updates",
      "Responsive design for various devices",
      "Real-time notifications",
    ],
    challenges:
      "Ensuring real-time updates and synchronization between service providers and users, especially in managing booking statuses.",
    outcome:
      "Launched a reliable platform that facilitates seamless service sharing, enhancing user engagement and satisfaction.",
  },
  {
    id: 3,
    slug: "movie-portal",
    title: "Movie Portal",
    description:
      "An intuitive platform for exploring, adding, and managing a curated collection of movies.",
    longDescription:
      "Movie Portal offers users an engaging interface to discover new movies, add them to their favorites, and manage their personal movie collections. The platform emphasizes user experience with features like movie details, search functionality, and personalized recommendations.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Firebase"],
    imageUrl: "/image/movie-portal.png",
    githubUrl: "https://github.com/salman679/movie-client",
    liveUrl: "https://movie-portal-ad9bf.web.app",
    features: [
      "User registration and login",
      "Add, update, and delete movie entries",
      "Favorite movies management",
      "Search and filter functionality",
      "Responsive design for optimal viewing",
    ],
    challenges:
      "Implementing efficient search and filter functionalities while maintaining a responsive and intuitive user interface.",
    outcome:
      "Delivered a user-centric movie portal that simplifies movie exploration and personal collection management.",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
