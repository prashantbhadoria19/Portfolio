// --- 🎨 Site Styling ---

// Colors (recommendation: choose a color suitable for dark and light modes)
// Should be inputted as a hex value. Use https://g.co/kgs/XCcs7T for choosing colors with hex.
const colors = {
    buttonColor: "#4305ba",
    LinkHighlightColor: "#4305ba"
}

// Transitions
const transitions = {
    active: true, // activate for all sections
    onlyLanding: false, // activate only for initial load of landing page
    showOnce: true, // transition only once
    thresholdOption: 0.2 // indicates at what percentage of the sections visibility the transition should start
}

// Splash Screen
const splashScreen = true // recommended: for best behavior after refresh

// --- 👋 Greeting Section ---
const greeting = {
    intro: "Hello 👋, I'm",
    name: "Prashant Bhadoria",
    message: "Software Engineer at Capgemini, building Java/JEE and Spring Boot services, batch-processing workflows, and AI-powered applications. Computer Science graduate from GLA University.",
    basedLocation: "Bengaluru, Karnataka",
    resumeLink: "https://drive.google.com/file/d/1UciSB6Ad10QE23Ad1WsCzYMDVjCPNMMh/view?usp=drivesdk", // recommended: google drive file share link (change to "anyone on the internet can view")
    logo: {
        link: "images/initials.png", // use relative path from  parent directory -> ex: images/image.ext
        custom: true // takes precedence over image logo and allows for custom HTML logo (./components/Navbar.vue)
    },
    portraitLink: 'images/profile7.png'
}

const socialMediaLinks = {
    github: "https://github.com/prashantbhadoria19",
    linkedin: "https://www.linkedin.com/in/prashant-bhadoria-5b26ba218/",
} // to add any additional social media links check out the README.md or src/icons.js file

// --- 😎 About Section ---
const about = {
    autobiography: [
        "I'm Prashant Bhadoria, a software engineer at Capgemini in Bengaluru and a Computer Science graduate from GLA University. I build Java/JEE and Spring Boot services, batch-processing workflows, and reliable REST APIs.",
        "My experience spans backend development, performance tuning, production support, and CI/CD. I also build AI agents and RAG-based applications, and enjoy solving problems across the full software lifecycle."
    ],
    skillGroups: [
        {
            category: "Core",
            items: ["Backend Development", "REST APIs", "Batch Processing", "CI/CD", "AI Agents", "RAG", "Data Structures and Algorithms"]
        },
        {
            category: "Languages",
            items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"]
        },
        {
            category: "Frameworks & ML",
            items: ["Spring Boot", "Spring Batch", "Hibernate/JPA", "JUnit", "React.js", "Next.js", "Node.js", "Express.js", "Tailwind CSS", "Streamlit", "scikit-learn", "NLTK", "Pandas"]
        },
        {
            category: "Databases & Messaging",
            items: ["Oracle", "PostgreSQL", "pgvector", "Redis", "Kafka", "Firebase"]
        },
        {
            category: "CI/CD & Tools",
            items: ["Maven", "Jenkins", "Clarive", "SVN", "Git", "Docker", "SoapUI", "Postman", "Bruno", "Oracle SQL Developer", "GitHub Copilot"]
        }
    ],
    photo1Link:"images/profile6.jpeg",
    photo2Link: "images/profile2.jpg",
    photo3Link: "images/profile3.jpg",
    photo4Link: "images/profile4.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Software Engineer (A4)",
        company: {
            name: "Capgemini India Private Limited",
            link: "https://www.capgemini.com/"
        },
        duration: "Jun 2025 - Present · Bengaluru, Karnataka",
        bulletPoints: [
            "Delivered 25+ releases across 3+ environments, building Java/JEE and Spring Boot services with Hibernate/JPA, JUnit, and Maven.",
            "Built Spring Batch chunk-based jobs to reliably bulk-load millions of records into Oracle.",
            "Reduced API response time by 35% by fixing JPA N+1 queries with fetch joins and adding Oracle indexes.",
            "Cut production recovery time by 30% by root-causing live defects and shipping 10+ rollback-safe hotfixes.",
            "Standardized CI pipelines on SVN, Jenkins, and Clarive, with nightly SoapUI, Postman, and Bruno test suites.",
            "Wrote 10+ Oracle SQL migration and rollback scripts, and developed 10+ AI agents and Copilot instruction files."
        ],
        hashtags: [
            "Java/JEE",
            "Spring Boot",
            "Spring Batch",
            "Oracle",
            "Jenkins",
            "AI Agents"
        ]
    },
    {
        position: "Software Engineer Intern",
        company: {
            name: "Capgemini India Private Limited",
            link: "https://www.capgemini.com/"
        },
        duration: "Mar 2025 - May 2025 · Bengaluru, Karnataka",
        bulletPoints: [
            "Fixed 8+ issues in Java/JEE modules built with Maven during development and staging validation.",
            "Validated 5+ SQL scripts and rollback scripts across 2 environments before database rollouts.",
            "Maintained 20+ API test cases in SoapUI, Postman, and Bruno to speed up patch validation.",
            "Wrote Markdown onboarding guides to help new joiners set up the project faster."
        ],
        hashtags: [
            "Java/JEE",
            "Maven",
            "SQL",
            "SoapUI",
            "Postman",
            "Bruno"
        ]
    },
    {
        position: "Web Developer Intern",
        company: {
            name: "Atirun Techs"
        },
        duration: "Jan 2025 - Mar 2025 · Noida, Uttar Pradesh",
        bulletPoints: [
            "Built CRM features including secure authentication and 5+ validated dynamic forms, replacing manual data entry.",
            "Developed 3 analytics dashboards with charts and filters to replace manual spreadsheet reporting.",
            "Created 20+ reusable, responsive components with React.js and Tailwind CSS.",
            "Built 10+ REST endpoints with Express.js and Firebase, keeping API response times under 300ms."
        ],
        hashtags: [
            "React.js",
            "Tailwind CSS",
            "Express.js",
            "Firebase",
            "REST APIs"
        ]
    },
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Code Nexus -- AI Repository Intelligence",
        description: "Built an AI agent that uses RAG and vector embeddings to search GitHub repositories, achieving 95%+ retrieval relevance across 100K+ code tokens per query. Added SSE streaming chat for multi-turn conversations, Redis caching, and Kafka-based asynchronous indexing.",
        techStack: "Next.js, Spring Boot, PostgreSQL, pgvector, Redis, Kafka, Docker, LLM",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/prashantbhadoria19/Code-Nexus"
            },
            {
                label: "Live Demo",
                type: "external",
                url: "https://code-nexus-teal.vercel.app/"
            }
        ],
        imageLink: "images/codenexus.png",
        alignLeft: true
    },
    {
        projectName: "Smart Hiring -- ML Resume Screening",
        description: "Built a resume-screening application that classifies resumes into 25 job categories. Trained and evaluated an NLTK and scikit-learn pipeline using TF-IDF, achieving 95% test accuracy across 962 records, and made predictions available through a Streamlit app.",
        techStack: "Python, Streamlit, NLTK, scikit-learn, TF-IDF",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/prashantbhadoria19/Smart-Hiring"
            }
        ],
        imageLink: "images/project1.png",
        alignLeft: false
    },
    {
        projectName: "MOVIREC -- Movie Recommendation System",
        yearCompleted: "2023",
        description: "Built a movie recommendation app that lets users choose a movie and receive personalized recommendations. Implemented the recommendation workflow in Python and deployed the interactive app with Streamlit.",
        techStack: "Python, scikit-learn, Streamlit, NumPy, Matplotlib, Seaborn",
        links: [],
        imageLink: "images/project2.jpg",
        alignLeft: true
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2022",
        description: "Built a Java Swing Sudoku game that generates puzzles and solves them with a backtracking algorithm.",
        techStack: "Java, Java Swing, Backtracking",
        links: [
            {
                label: "GitHub",
                type: "git",
                url: "https://github.com/prashantbhadoria19/Sudoku-Solver"
            }
        ],
        imageLink: "images/sudoku_pic.png",
        imageMaxHeight: "19.8rem",
        alignLeft: false
    },
]

const archiveLink = "https://github.com/prashantbhadoria19?tab=repositories"

const certificationsAndAchievements = [
    {
        category: "Certification",
        title: "Claude Certified Developer -- Foundations (CCDV-F)",
        description: "Anthropic, 2026"
    },
    {
        category: "Competitive Programming",
        title: "400+ LeetCode & 300+ GeeksforGeeks problems solved",
        description: "LeetCode contest rating: 1900+"
    },
    {
        category: "Hackathon",
        title: "Smart India Hackathon 2023 -- University-Level Winner",
        description: "Hardware & Software Edition"
    }
]

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    intro: "Have a role, project, or idea in mind? Feel free to get in touch.",
    email: "prashantbhadoria1902@gmail.com",
    phone: "+91-6306043361",
    location: "Bengaluru, Karnataka, India",
    links: [
        {
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/prashant-bhadoria-5b26ba218/"
        },
        {
            label: "GitHub",
            url: "https://github.com/prashantbhadoria19"
        },
        {
            label: "LeetCode",
            url: "https://leetcode.com/u/zh9wYwoXuj/"
        },
        {
            label: "GeeksforGeeks",
            url: "https://www.geeksforgeeks.org/profile/prashant_bhadoria_19"
        }
    ]
}

export default {
    colors,
    transitions,
    splashScreen,
    greeting,
    socialMediaLinks,
    about,
    experiences,
    works,
    archiveLink,
    certificationsAndAchievements,
    contact
}