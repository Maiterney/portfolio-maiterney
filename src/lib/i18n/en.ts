export const en = {
    nav: {
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        contact: "Contact",
    },
    hero: {
        greeting: "Hi, I'm",
        role: "Front-end Developer",
        description: "I build accessible, pixel-perfect, performant, and delightful digital experiences.",
        contactBtn: "Contact Me",
        downloadBtn: "Download CV",
    },
    about: {
        title: "About Me",
        description: [
            "I am a developer with over 5 years of experience in front-end development, passionate about creating intuitive and dynamic user interfaces. My journey is marked by curiosity and the desire to build products that make a difference, always bridging the gap between aesthetics and functionality.",
            "Throughout my career, I have worked with WordPress, PHP with Laravel, and had contact with Vue.js. Currently, my stack is focused on React with Next.js, where I develop modern and scalable solutions. I have also worked with Flutter, including a stint at a financial startup: I joined to assist with the Flutter app's demands, and in a short time, I assumed project leadership, developing the app from scratch and contributing to other company apps.",
            "I am a professional who constantly seeks to evolve, studying on platforms like Udemy and currently taking curso.dev, which keeps me updated with the best practices and technologies in the market."
        ],
    },
    skills: {
        title: "Skills",
        description: "The technologies and tools I use to bring ideas to life.",
    },
    projects: {
        title: "Featured Projects",
        description: "A selection of projects that showcase my skills and passion for development.",
        viewProject: "View Project",
        list: [
            {
                title: "My Portfolio",
                description: "My personal portfolio website built with modern technologies to showcase my work and skills.",
                image: "/assets/images/projects/portfolio.png",
                tags: ["Next.js", "Tailwind CSS", "TypeScript", "Framer Motion", "i18n"],
                github: "https://github.com/Maiterney/portfolio-maiterney",
                demo: "",
            },
            {
                title: "Urbana Garantidora",
                description: "Website refactored from scratch focusing on performance and usability, using Next.js and design patterns for highly reusable components.",
                image: "/assets/images/projects/urbana.png",
                tags: ["Next.js", "TypeScript", "Tailwind CSS", "Design Patterns", "Performance"],
                github: "",
                demo: "https://www.urbanagarantidora.com.br/",
            },
            {
                title: "Auau Petshop",
                description: "Technical test developed for a recruitment process, focusing on pet shop management and development best practices.",
                image: "/assets/images/projects/auau_petshop.png",
                tags: ["React", "TypeScript", "Tailwind CSS", "Technical Test"],
                github: "https://github.com/Maiterney/prova_jet",
                demo: "",
            },
            {
                title: "Octogames",
                description: "Platform for buying and selling digital products.",
                image: "/assets/images/projects/octogames.png",
                tags: ["React", "Next.js", "Tailwind CSS"],
                github: "",
                demo: "https://www.octogames.com.br/",
            },
        ]
    },
    experience: {
        title: "Work Experience",
        description: "My professional journey and career highlights.",
        jobs: [
            {
                role: "Front-end Developer",
                company: "Woltz",
                period: "Aug 2022 - Present",
                location: "Belo Horizonte, Brazil (Remote)",
                description: "Development of complex projects, including an enterprise ERP and systems for automatic and dynamic landing page management. Implementation of modern interfaces with Next.js and Tailwind CSS, ensuring performance and responsiveness. Application of design patterns to structure scalable and maintainable solutions. Creation of custom layouts and reusable components, aligned with visual identity and user experience. Collaboration on strategic projects requiring innovation and use of cutting-edge technologies."
            },
            {
                role: "Mobile Developer (Flutter)",
                company: "IZi bank",
                period: "Jun 2024 - Dec 2024",
                location: "Belo Horizonte, Brazil (Remote)",
                description: "Mobile app development using Flutter, focusing on performance, scalability, and user experience. Started as technical support and, in just one month, became the lead developer for three strategic projects. Responsible for the entire development cycle, from architecture to publication, including deployment and updates on the Play Store and App Store.",
                highlights: [
                    "Banking app: implementation of secure and scalable features for financial operations.",
                    "Customer delivery app: development of an intuitive and responsive interface, ensuring usability and efficiency.",
                    "Courier app: creation of solutions focused on logistics and route optimization."
                ]
            },
            {
                role: "Front-end Developer",
                company: "Mayersoft",
                period: "Mar 2021 - Dec 2024",
                location: "Belo Horizonte, Brazil",
                description: "Development of web applications using Next.js, WordPress, and Laravel (PHP). Creation of custom layouts and templates aligned with client needs. Implementation of front-end solutions integrated with back-end systems. Focus on usability, accessibility, and performance in corporate projects."
            },
            {
                role: "Front-end Developer",
                company: "SQUADevops",
                period: "Nov 2017 - Dec 2022",
                location: "Belo Horizonte, Brazil",
                description: "Construction of web pages and systems using WordPress, Angular, and Next.js. Development of reusable templates and components for different projects. Participation in multidisciplinary teams, contributing to agile and scalable solutions. Experience in diverse projects, serving different market segments."
            },
            {
                role: "Front-end Developer",
                company: "Open Agência Digital",
                period: "Mar 2020 - Apr 2021",
                location: "Belo Horizonte, Brazil",
                description: "Creation of modern and responsive interfaces for institutional websites and e-commerce. Development of custom layouts focused on visual identity and user experience. Integration of front-end solutions with digital platforms. Collaboration on digital marketing projects and brand online presence."
            }
        ]
    },
    contact: {
        title: "Get in Touch",
        description: "Have a project in mind or just want to say hi? Feel free to reach out!",
        cardTitle: "Contact Me",
        cardDesc: "Fill out the form below or send me an email.",
        nameLabel: "Name",
        emailLabel: "Email",
        messageLabel: "Message",
        sendBtn: "Send Message",
        sendNewMsgBtn: "Send New Message",
        successMsg: "Message sent successfully!",
        successDesc: "We'll get back to you as soon as possible.",
        errors: {
            required: "This field is required",
            email: "Invalid email address",
            minLen: "Message must be at least 10 characters",
        },
    },
    footer: {
        copyright: "© 2026 Maiterney Vilela. All rights reserved.",
    }
}
