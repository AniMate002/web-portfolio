import iecho from '../images/projects/iecho.png'
import lueur from '../images/projects/lueur.png'
import nova_plus from '../images/projects/nova_plus.png'
import snap_fiesta from '../images/projects/snap_fiesta.png'
import tech_lane_admin from '../images/projects/tech_lane_admin.png'
import tuff_shop from '../images/projects/tuff_shop.png'
import whisper_wire from '../images/projects/whisper_wire.png'



export const projects = [
    {
        id: 1, 
        image: tech_lane_admin,
        name: "tech lane admin",
        link: "https://tech-lane-admin-63n8-git-deploy-kiryls-projects-b85ee3fe.vercel.app/",
        type: "e-commerce",
        technologies: ["Next.js", "Next-auth" ,"Tailwind", "MongoDB", "Bcryptjs", "Jsonwebtoken", "Cookie-parser"],
        description: [
            "Tech Lane Admin is a powerful and efficient administration app tailored for managing online shops with precision and ease. Designed to simplify the complexities of e-commerce operations, this platform offers a comprehensive suite of tools for monitoring sales, managing inventory, and overseeing user activities.",
            "Built with Next.js, the app delivers a high-performance, server-side rendered experience, ensuring optimal speed and responsiveness for administrators. Authentication is secured with Next-auth, complemented by Bcryptjs, Jsonwebtoken, and Cookie-parser for robust user verification and session management."
        ]
    },
    
    {
        id: 2, 
        image: lueur,
        name: "Lueur",
        link: "https://lueur-production.up.railway.app/",
        type: "social-network",
        technologies: ["MongoDB", "Express.js", "Node.js", "React", "Tanstack/React-query","Tailwind", "Cloudinary", "Bcryptjs", "Jsonwebtoken", "Cookie-parser"],
        description: [
            "Lueur is a dynamic and feature-rich social networking platform designed to foster connections and interactions among users. Built with a modern tech stack, Lueur emphasizes scalability, security, and a seamless user experience.",
            "The backend architecture leverages Node.js and Express.js, providing a robust and efficient server environment. User data and content are securely stored and managed in MongoDB, ensuring flexibility and performance at scale.",
            "Authentication and security are fortified using Bcryptjs for password hashing and Jsonwebtoken for token-based authentication, complemented by Cookie-parser for secure session management.",
            "On the frontend, Lueur employs React for building an intuitive and interactive user interface. State management and server synchronization are handled with Tanstack/React-query, enabling efficient data fetching and caching for a smooth, real-time user experience.",
            "Media uploads and asset management are seamlessly integrated using Cloudinary, providing fast and optimized delivery of user-generated content such as images and videos. Lueur is designed with a focus on user engagement, offering features like user profiles, content sharing, and secure interactions.",
            "The platform's architecture is built to handle a growing user base while maintaining performance and reliability."
        ]
    },
    {
        id: 3, 
        image: snap_fiesta,
        name: "snap fiesta",
        link: "https://snap-fiesta.vercel.app/",
        type: "image sharing app",
        technologies: ["React", "React-redux", "Tailwind", "Public API"],
        description: [
            "Snap Fiesta is an intuitive and stylish image hosting app designed for seamless sharing and exploration of images. Whether you're showcasing your photography, sharing memories, or curating visual content, Snap Fiesta offers a platform that makes image sharing effortless and enjoyable.",
            "The app is built using React, delivering a responsive and user-friendly interface that prioritizes ease of use. With React-redux, Snap Fiesta ensures smooth and efficient state management, allowing users to upload, organize, and interact with images without interruptions.",
            "The sleek, modern design is powered by Tailwind CSS, enabling a visually appealing and fully responsive experience across all devices. Additionally, Snap Fiesta integrates with a free API to handle image uploads and other backend functionalities, ensuring reliable and accessible services for users."
        ]
    },
    {
        id: 4, 
        image: nova_plus,
        name: "nova_plus",
        link: "https://nova-pulse.vercel.app/",
        type: "company website",
        technologies: ["React", "React-redux", "Tailwing", "GSAP"],
        description: [
            "Built with React, the site delivers a fast and seamless browsing experience, while React-redux ensures state management is smooth and scalable.",
            "The visually stunning design is brought to life with Tailwind CSS, which empowers us to create a responsive, pixel-perfect layout that adapts flawlessly to all devices.",
            "Animations are the soul of our website, and they are powered by GSAP (GreenSock Animation Platform). From subtle transitions to breathtaking visual effects, GSAP enables us to craft an engaging and interactive journey that reflects the innovation and creativity at the heart of Nova Pulse."
        ]
    },
    {
        id: 5, 
        image: tuff_shop,
        name: "tuff shop",
        link: "https://happy-shop-mu.vercel.app/",
        type: "online shop",
        technologies: ["React", "React-redux", "Tailwind", "Public API"],
        description: [
            "This online shop marks the beginning of my journey as a developer—a testament to learning, creativity, and dedication. As my very first project, it showcases a functional e-commerce platform designed to offer a smooth and enjoyable shopping experience.",
            "Built with React, the shop delivers a fast and dynamic interface that reflects the core principles of responsive design. React-redux handles state management, ensuring seamless navigation and efficient data flow across the application.",
            "The design, crafted with Tailwind CSS, brings a clean, modern aesthetic, allowing products and features to shine while maintaining a user-friendly layout. By integrating a public API, the shop dynamically fetches and displays product data, adding an element of real-time interaction to the user experience."
        ]
    },
    {
        id: 6, 
        image: whisper_wire,
        name: "whisper wire",
        link: "https://whisper-wire-production.up.railway.app/login",
        type: "chat app",
        technologies: ["MongoDB", "Express.js", "Node.js", "React", "Zustand","Tailwind", "Cloudinary", "Bcryptjs", "Jsonwebtoken", "Cookie-parser"],
        description: [
            "This chat application marks a significant achievement in my development journey as my first full-stack project, where I built both the frontend and backend from scratch. It showcases my ability to combine technologies into a seamless platform for real-time communication, blending functionality, security, and design.",
            "The backend utilizes Node.js and Express.js, with MongoDB as the database to manage user information and chat histories efficiently. Security is a top priority, with Bcryptjs for password hashing, Jsonwebtoken for token-based authentication, and Cookie-parser for secure session management.",
            "On the frontend, I used React to create a sleek and user-friendly interface. Zustand serves as the state management solution, providing a lightweight and efficient approach to managing application state for real-time updates.",
            "The app’s responsive and modern design, powered by Tailwind CSS, ensures a smooth user experience across all devices. Cloudinary integration enhances functionality by allowing users to share and view images seamlessly within chats.",
            "This project reflects my growth as a developer, demonstrating my ability to tackle full-stack challenges and deliver a complete, interactive application. It remains a cornerstone in my portfolio, symbolizing the start of my journey in building robust and user-centric software solutions."
        ]
    },
    {
        id: 7, 
        image: iecho,
        name: "iecho-ui-kit",
        link: "https://iecho-ui-kit.vercel.app/?path=/story/button--default",
        type: "ui library",
        technologies: ["StoryBook", "React", "CSS"],
        description: [
            "This project is a robust and reusable UI Component Library built using React and Storybook to streamline the development of scalable and consistent user interfaces.",
            "The library is designed to serve as a centralized collection of modular, accessible, and customizable components that can be integrated into various applications."
        ]
    },
];
