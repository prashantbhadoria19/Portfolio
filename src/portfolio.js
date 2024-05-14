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
    intro: "Hello 👋, my name is",
    name: "Prashant Bhadoria",
    message: "I'm a computer science student and an aspiring software engineer. Currently working as a web developer at my university building tools to aid students, educators, and staff.",
    basedLocation: "Mathura, UP",
    resumeLink: "https://drive.google.com/file/d/1notL2YLVOLGan8Jv6P7rBXXPWwaPDnzu/view?usp=drive_link", // recommended: google drive file share link (change to "anyone on the internet can view")
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
        "My name is Prashant Bhadoria and I'm a computer science student at GLA University, Mathura. I have a passion for coding in languages such as C++, Java, Python, C. Work in web development and have experience with MERN Stack.",
        "Responsible, organized, problem solver, and independent thinker. Work well in a team and a quick learner. Programming for 3+ years."
    ], // Separated items are paragraphs
    techStack: [
        "C++",
        "Java",
        "Python",
        "JavaScript",
        "React.js",
        "MongoDB",
        "HTML",
        "CSS",
    ],
    photo1Link:"images/profile6.jpeg",
    photo2Link: "images/profile2.jpg",
    photo3Link: "images/profile3.jpg",
    photo4Link: "images/profile4.jpg"
}

// --- 🛡️ Experience Section ---
const experiences = [
    {
        position: "Android and iOS App Developer",
        company: {
            name: "Atirun Techs Pvt Limited",
            link: "https://tools.wolftech.ncsu.edu/support/index.php/WolfTech_Information_Technology"
        },
        duration: "June 2023 - July 2023",
        bulletPoints: [
            "o	Integrated third-party music APIs to fetch and display real-time music data, improving the app's content diversity and freshness.",
            "Conducted rigorous testing and debugging to identify and resolve issues related to audio playback, network connectivity, and UI responsiveness.",
        ],
        hashtags: [
            "React Native",
            "Expo",
            "NPM",
            "Firebase",
        ]
    },
]

// --- 💻 Work Section ---
const works = [
    {
        projectName: "Smart Hiring Platform",
        yearCompleted: "2024",
        description: "Developed a Smart Hiring Platform leveraging the MERN stack, integrating AI-driven candidate matching, automated resume screening, real-time interview scheduling, and advanced analytics, enhancing recruitment efficiency and decision-making.",
        techStack: "Python, MERN Stack",
        links: [
            {
                label: "",
                type: "git",
                url: ""
            },
            {
                label: "",
                type: "external",
                url: ""
            }
        ],
        imageLink: "images/project1.png",
        alignLeft: false
    },
    {
        projectName: "•	MOVIREC (Mini Project)",
        yearCompleted: "2023",
        description: "o	Designed and implemented a Movie Recommendation System as a mini-project using Python, Streamlit, and Heroku. Leveraging scikit-learn for collaborative filtering algorithms and the dataset for training. This platform allows users to input their movie preferences, receiving instant, personalized recommendations.",
        techStack: "Python, NumPy, MatplotLib, Seaborn, NLKT, Streamlit, Heroku",
        links: [
            {
                label: "",
                type: "external",
                url: ""
            }
        ],
        imageLink: "images/project2.jpg",
        alignLeft: true
    },
    {
        projectName: "Sudoku Game & Solver",
        yearCompleted: "2022",
        description: "Built a Sudoku game UI incorporating the Java Swing library. Randomly generates a Sudoku puzzle and solves itself using the backtracking algorithm written in Java..",
        techStack: "Java",
        links: [
            {
                label: "",
                type: "git",
                url: "https://github.com/prashantbhadoria19/Sudoku-Solver"
            },
            {
                label: "",
                type: "external",
                url: ""
            }
        ],
        imageLink: "images/sudoku_pic.png",
        alignLeft: false
    },
]

const archiveLink = "https://github.com/feifyKike?tab=repositories"

// --- 📭 Contact Section ---
// 2 Options available - Choose 1
const contact = {
    externalLink: {
        shortTitle: "Get in Touch",
        note: [
            "Currently seeking web and software development positions/internships in the RTP area for summer 2024.",
            "Also looking to build a team for projects & startup ideas or just make professional connections."
        ], // paragraph breaks will be entered after each item,
        link: {
            email: "", // email takes precedance
            other: "https://docs.google.com/forms/d/e/1FAIpQLSdTejen8qkSbMLvLa8dRfEWIjnJ65MBhe0GJskzCLuO7vpwJQ/viewform?usp=sf_link"
        },
        responseTimeMessage: "...and I'll resopnd within the next 24hrs"
    },
    formEmbedLink: "" // inclusion of this link will take precedance
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
    contact
}