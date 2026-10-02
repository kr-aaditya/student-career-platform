/* ==========================================
   NAVBAR
========================================== */

const menuToggle =
    document.querySelector(".menu-toggle");

const navLinks =
    document.querySelector(".nav-links");

const navButtons =
    document.querySelector(".nav-buttons");


if (menuToggle) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        navButtons.classList.toggle("active");

    });

}


/* ==========================================
   PROFILE FORM
========================================== */

const profileForm =
    document.getElementById("profile-form");

const profileMessage =
    document.getElementById("profile-message");


/* ==========================================
   LOAD SAVED PROFILE INTO FORM
========================================== */

const savedProfileData =
    localStorage.getItem("pathpilotProfile");


if (profileForm && savedProfileData) {

    const profile =
        JSON.parse(savedProfileData);


    document.getElementById("full-name").value =
        profile.name || "";


    document.getElementById("email").value =
        profile.email || "";


    document.getElementById("college").value =
        profile.college || "";


    document.getElementById("degree").value =
        profile.degree || "";


    document.getElementById("year").value =
        profile.year || "";


    document.getElementById("skills").value =
        profile.skills || "";


    document.getElementById("career-goal").value =
        profile.careerGoal || "";

}


/* ==========================================
   SAVE PROFILE
========================================== */

if (profileForm) {

    profileForm.addEventListener("submit", function (event) {

        event.preventDefault();


        const profile = {

            name:
                document.getElementById("full-name").value,

            email:
                document.getElementById("email").value,

            college:
                document.getElementById("college").value,

            degree:
                document.getElementById("degree").value,

            year:
                document.getElementById("year").value,

            skills:
                document.getElementById("skills").value,

            careerGoal:
                document.getElementById("career-goal").value

        };


        localStorage.setItem(
            "pathpilotProfile",
            JSON.stringify(profile)
        );


        if (profileMessage) {

            profileMessage.textContent =
                "✅ Profile saved successfully!";

        }

    });

}


/* ==========================================
   DASHBOARD - PROFILE DATA
========================================== */

const savedProfile =
    localStorage.getItem("pathpilotProfile");


const careerGoalDisplay =
    document.getElementById("career-goal-display");


const userNameDisplay =
    document.getElementById("user-name");


const profileCollege =
    document.getElementById("profile-college");


const profileDegree =
    document.getElementById("profile-degree");


const profileYear =
    document.getElementById("profile-year");


const profileSkills =
    document.getElementById("profile-skills");


const profileEmail =
    document.getElementById("profile-email");


/* ==========================================
   DISPLAY NAME MAPPINGS
========================================== */

const careerGoalNames = {

    "web-development": "Web Development",

    "ai-ml": "AI / ML",

    "data-science": "Data Science",

    "cloud-devops": "Cloud / DevOps",

    "cybersecurity": "Cybersecurity",

    "mobile-development": "Mobile Development"

};


/* ==========================================
   LEARNING PAGE - CAREER
========================================== */

const careerTitle =
    document.getElementById("career-title");


if (careerTitle && savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    careerTitle.textContent =
        careerGoalNames[profile.careerGoal] ||
        profile.careerGoal;

}


/* ==========================================
   DEGREE DISPLAY NAMES
========================================== */

const degreeNames = {

    "btech": "B.Tech",

    "be": "B.E.",

    "bca": "BCA",

    "bsc": "B.Sc.",

    "mca": "MCA",

    "mtech": "M.Tech",

    "other": "Other"

};


/* ==========================================
   YEAR DISPLAY NAMES
========================================== */

const yearNames = {

    "1": "1st Year",

    "2": "2nd Year",

    "3": "3rd Year",

    "4": "4th Year"

};


/* ==========================================
   LOAD SAVED PROFILE - DASHBOARD
========================================== */

if (savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    /* Career Goal */

    if (careerGoalDisplay) {

        careerGoalDisplay.textContent =
            careerGoalNames[profile.careerGoal] ||
            profile.careerGoal;

    }


    /* User Name */

    if (userNameDisplay) {

        userNameDisplay.textContent =
            profile.name;

    }


    /* College */

    if (profileCollege) {

        profileCollege.textContent =
            profile.college;

    }


    /* Degree */

    if (profileDegree) {

        profileDegree.textContent =
            degreeNames[profile.degree] ||
            profile.degree;

    }


    /* Year */

    if (profileYear) {

        profileYear.textContent =
            yearNames[profile.year] ||
            profile.year;

    }


    /* Skills */

    if (profileSkills) {

        const skills =
            profile.skills
                .split(",")
                .map(skill => skill.trim())
                .filter(skill => skill !== "");


        skills.forEach(skill => {

            const skillTag =
                document.createElement("span");


            skillTag.textContent =
                skill.charAt(0).toUpperCase() +
                skill.slice(1);


            skillTag.classList.add("skill-tag");


            profileSkills.appendChild(skillTag);

        });

    }


    /* Email */

    if (profileEmail) {

        profileEmail.textContent =
            profile.email;

    }

}


/* ==========================================
   CAREER ROADMAP DATA
========================================== */

const roadmaps = {

    "ai-ml": [

        "Python Fundamentals",

        "NumPy & Pandas",

        "Machine Learning",

        "Deep Learning",

        "AI Projects"

    ],


    "web-development": [

        "HTML & CSS",

        "JavaScript",

        "Frontend Development",

        "Backend Development",

        "Full Stack Project"

    ],


    "data-science": [

        "Python for Data Science",

        "NumPy & Pandas",

        "Data Visualization",

        "Statistics",

        "Data Science Projects"

    ],


    "cloud-devops": [

        "Linux Fundamentals",

        "Networking",

        "Cloud Fundamentals",

        "Docker",

        "CI/CD & DevOps Project"

    ],


    "cybersecurity": [

        "Networking Fundamentals",

        "Linux Fundamentals",

        "Cybersecurity Basics",

        "Web Security",

        "Security Projects"

    ],


    "mobile-development": [

        "Programming Fundamentals",

        "Mobile UI Development",

        "App Navigation",

        "APIs & Databases",

        "Mobile App Project"

    ]

};

/* ==========================================
   CAREER PROJECT DATA
========================================== */

const projects = {

    "ai-ml": [

        {
            title: "House Price Prediction",

            description:
                "Build a machine learning model that predicts house prices from property features.",

            technologies: [
                "Python",
                "Pandas",
                "Scikit-learn"
            ],

            difficulty: "Beginner"
        },

        {
            title: "Image Classification",
            description:
                "Train a model to classify images into different categories."
        },

        {
            title: "Sentiment Analysis",
            description:
                "Build a model that determines whether text expresses positive or negative sentiment."
        },

        {
            title: "End-to-End ML Project",
            description:
                "Build and deploy a complete machine learning application."
        }

    ],


    "web-development": [

        {
            title: "Portfolio Website",
            description:
                "Build a personal portfolio website to showcase your skills and projects."
        },

        {
            title: "Task Manager",
            description:
                "Build a web application for creating and managing tasks."
        },

        {
            title: "E-Commerce Website",
            description:
                "Build an online store with products, users and shopping functionality."
        },

        {
            title: "Full Stack Application",
            description:
                "Build a complete application with a frontend, backend and database."
        }

    ],


    "data-science": [

        {
            title: "Data Analysis Project",
            description:
                "Analyze a real-world dataset and discover useful patterns and insights."
        },

        {
            title: "Data Visualization Dashboard",
            description:
                "Create an interactive dashboard to visualize important data."
        },

        {
            title: "Customer Analysis",
            description:
                "Analyze customer data to identify patterns and useful business insights."
        },

        {
            title: "End-to-End Data Science Project",
            description:
                "Complete a data science project from data collection to insights."
        }

    ],


    "cloud-devops": [

        {
            title: "Dockerized Application",
            description:
                "Containerize a web application using Docker."
        },

        {
            title: "CI/CD Pipeline",
            description:
                "Create an automated pipeline for building and deploying an application."
        },

        {
            title: "Cloud Deployment",
            description:
                "Deploy an application to a cloud platform."
        },

        {
            title: "DevOps Project",
            description:
                "Build an application with automated deployment and monitoring."
        }

    ],


    "cybersecurity": [

        {
            title: "Network Security Scanner",
            description:
                "Build a learning project that analyzes network information."
        },

        {
            title: "Password Security Tool",
            description:
                "Build a tool that demonstrates password strength and security concepts."
        },

        {
            title: "Web Security Project",
            description:
                "Study common web security concepts through a controlled project."
        },

        {
            title: "Cybersecurity Lab",
            description:
                "Build a practical cybersecurity learning environment."
        }

    ],


    "mobile-development": [

        {
            title: "To-Do Mobile App",
            description:
                "Build a mobile application for managing daily tasks."
        },

        {
            title: "Expense Tracker",
            description:
                "Build a mobile application for tracking expenses."
        },

        {
            title: "Weather App",
            description:
                "Build a mobile application that displays weather information using an API."
        },

        {
            title: "Full Mobile Application",
            description:
                "Build and deploy a complete mobile application."
        }

    ]

};

const projectSteps = {

    "House Price Prediction": [
        "Understand the problem",
        "Load the dataset",
        "Clean and prepare the data",
        "Explore the dataset",
        "Train the machine learning model",
        "Evaluate the model",
        "Build the final application"
    ],

    "Image Classification": [
        "Understand image classification",
        "Collect the image dataset",
        "Prepare and preprocess images",
        "Train the classification model",
        "Evaluate the model",
        "Test the model with new images"
    ],

    "Sentiment Analysis": [
        "Understand sentiment analysis",
        "Collect text data",
        "Clean and preprocess the text",
        "Convert text into numerical features",
        "Train the classification model",
        "Evaluate the model",
        "Test the model with new text"
    ],

    "End-to-End ML Project": [
        "Choose the problem",
        "Collect the dataset",
        "Clean and prepare the data",
        "Train the model",
        "Evaluate the model",
        "Build the application",
        "Deploy the application"
    ],
        "Data Analysis Project": [
        "Understand the problem",
        "Find and load the dataset",
        "Clean and prepare the data",
        "Explore the dataset",
        "Analyze patterns and trends",
        "Create insights",
        "Present the findings"
    ],

    "Data Visualization Dashboard": [
        "Choose the dataset",
        "Clean and prepare the data",
        "Identify important metrics",
        "Create visualizations",
        "Build the dashboard",
        "Add useful filters",
        "Test the dashboard"
    ],

    "Customer Analysis": [
        "Understand the business problem",
        "Load the customer dataset",
        "Clean and prepare the data",
        "Explore customer patterns",
        "Analyze customer behavior",
        "Create useful insights",
        "Present the results"
    ],

    "End-to-End Data Science Project": [
        "Choose the problem",
        "Collect the dataset",
        "Clean and prepare the data",
        "Perform exploratory data analysis",
        "Build the analysis or model",
        "Evaluate the results",
        "Present the final solution"
    ],
        "Portfolio Website": [
        "Plan the portfolio structure",
        "Create the HTML pages",
        "Style the website with CSS",
        "Add JavaScript interactions",
        "Make the website responsive",
        "Test the website",
        "Deploy the portfolio"
    ],

    "Task Manager": [
        "Plan the application",
        "Build the frontend",
        "Create the task functionality",
        "Create the backend API",
        "Connect the database",
        "Test the application",
        "Deploy the application"
    ],

    "E-Commerce Website": [
        "Plan the e-commerce features",
        "Create the product interface",
        "Build product and cart functionality",
        "Create the backend API",
        "Connect the database",
        "Implement user functionality",
        "Test and deploy the website"
    ],

    "Full Stack Application": [
        "Choose the application idea",
        "Design the frontend",
        "Build the backend API",
        "Connect the database",
        "Connect frontend and backend",
        "Test the application",
        "Deploy the application"
    ],
        "Dockerized Application": [
        "Choose the application",
        "Create the application",
        "Write the Dockerfile",
        "Build the Docker image",
        "Run the application in a container",
        "Test the container",
        "Document the setup"
    ],

    "CI/CD Pipeline": [
        "Understand the deployment workflow",
        "Set up the repository",
        "Create the build process",
        "Configure automated testing",
        "Create the deployment pipeline",
        "Test the pipeline",
        "Deploy the application"
    ],

    "Cloud Deployment": [
        "Choose a cloud platform",
        "Prepare the application",
        "Configure the cloud environment",
        "Deploy the application",
        "Configure the required services",
        "Test the deployment",
        "Monitor the application"
    ],

    "DevOps Project": [
        "Choose the project",
        "Set up version control",
        "Containerize the application",
        "Create the CI/CD pipeline",
        "Deploy the application",
        "Add monitoring",
        "Document the project"
    ],
        "Network Security Scanner": [
        "Understand the security problem",
        "Learn the required networking concepts",
        "Design the scanner",
        "Implement the scanner",
        "Test it in a controlled environment",
        "Analyze the results",
        "Document the project"
    ],

    "Password Security Tool": [
        "Understand password security",
        "Define security requirements",
        "Design the tool",
        "Implement password-strength checks",
        "Test the tool",
        "Improve the security checks",
        "Document the project"
    ],

    "Web Security Project": [
        "Choose a web security topic",
        "Understand the vulnerability",
        "Create a controlled test environment",
        "Implement the learning project",
        "Test the security behavior",
        "Analyze the results",
        "Document the findings"
    ],

    "Cybersecurity Lab": [
        "Define the lab objectives",
        "Set up the lab environment",
        "Configure the required tools",
        "Perform controlled security exercises",
        "Analyze the results",
        "Improve the lab",
        "Document the environment"
    ],
        "To-Do Mobile App": [
        "Plan the application",
        "Design the mobile interface",
        "Create the task functionality",
        "Add data storage",
        "Test the application",
        "Fix issues",
        "Build the final application"
    ],

    "Expense Tracker": [
        "Plan the application",
        "Design the interface",
        "Create expense functionality",
        "Add data storage",
        "Add expense summaries",
        "Test the application",
        "Build the final application"
    ],

    "Weather App": [
        "Plan the application",
        "Design the mobile interface",
        "Find a weather API",
        "Connect the API",
        "Display weather data",
        "Handle errors and loading states",
        "Test the application"
    ],

    "Full Mobile Application": [
        "Choose the application idea",
        "Plan the features",
        "Design the user interface",
        "Implement the application",
        "Connect APIs and databases",
        "Test the application",
        "Build and deploy the application"
    ]

};

let projectProgress = {};

const savedProjectProgress =
    localStorage.getItem("pathpilotProjectProgress");

if (savedProjectProgress) {
    projectProgress =
        JSON.parse(savedProjectProgress);
}
/* ==========================================
   GENERATE PROJECT CARDS
========================================== */

const projectsGrid =
    document.getElementById("projects-grid");

const projectDetails =
    document.getElementById("project-details");


if (projectsGrid && savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    const selectedProjects =
        projects[profile.careerGoal];


    if (selectedProjects) {

        selectedProjects.forEach((project, index) => {

            const projectCard =
                document.createElement("div");


            projectCard.classList.add("project-card");


            projectCard.innerHTML = `

                <h3>
                    ${project.title}
                </h3>

                <p>
                    ${project.description}
                </p>

                <button
                    class="project-btn"
                    data-project-index="${index}"
                >
                    View Project
                </button>

            `;


            projectsGrid.appendChild(projectCard);

        });

    }

}

/* ==========================================
   PROJECT DETAILS
========================================== */

if (projectsGrid) {

    projectsGrid.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".project-btn");

            if (!button) {
                return;
            }

            const projectIndex =
                Number(button.dataset.projectIndex);

            const profile =
                JSON.parse(savedProfile);

            const selectedProjects =
                projects[profile.careerGoal];

            const project =
                selectedProjects[projectIndex];

            if (!project) {
                return;
            }

            /* ==================================
               VIEW PROJECT
            ================================== */

            projectDetails.innerHTML = `

                <div
                    class="project-details-card"
                    data-project-index="${projectIndex}"
                >

                    <h2>
                        ${project.title}
                    </h2>

                    <p>
                        ${project.description}
                    </p>

                    <p>
                        <strong>Difficulty:</strong>
                        ${project.difficulty || "Not specified"}
                    </p>

                    ${
                        project.technologies
                            ? `
                                <h3>
                                    Technologies
                                </h3>

                                <ul>

                                    ${project.technologies
                                        .map(technology => `
                                            <li>
                                                ${technology}
                                            </li>
                                        `)
                                        .join("")}

                                </ul>
                            `
                            : ""
                    }

                    <button
                        class="project-start-btn"
                        data-project-index="${projectIndex}"
                    >
                        Start Project
                    </button>

                </div>

            `;

            projectDetails.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

}


/* ==========================================
   START PROJECT + PROJECT STEPS
========================================== */

if (projectDetails) {

    projectDetails.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".project-start-btn, .project-step-btn");

            if (!button) {
                return;
            }


            /* ==================================
               START PROJECT
            ================================== */

            if (
                button.classList.contains(
                    "project-start-btn"
                )
            ) {

                const projectIndex =
                    Number(button.dataset.projectIndex);

                const profile =
                    JSON.parse(savedProfile);

                const selectedProjects =
                    projects[profile.careerGoal];

                const project =
                    selectedProjects[projectIndex];

                if (!project) {
                    return;
                }

                const steps =
                    projectSteps[project.title];

                if (!steps) {
                    return;
                }


                /* Calculate completed steps */

                const completedSteps =
                    projectProgress[project.title]
                        ? Object.values(
                            projectProgress[project.title]
                        ).filter(
                            value => value === true
                        ).length
                        : 0;


                /* Display project steps */

                projectDetails.innerHTML = `

                    <div
                        class="project-details-card"
                        data-project-index="${projectIndex}"
                    >

                        <h2>
                            ${project.title} - Project Steps
                        </h2>

                        <p class="project-progress-text">
                            Progress:
                            ${completedSteps}
                            /
                            ${steps.length}
                            steps completed
                        </p>

                        <ol>

                            ${steps
                                .map((step, index) => {

                                    const isCompleted =
                                        projectProgress[project.title] &&
                                        projectProgress[project.title][index];

                                    return `

                                        <li>

                                            <span>
                                                ${step}
                                            </span>

                                            <button
                                                class="project-step-btn"
                                                data-step-index="${index}"
                                                ${isCompleted ? "disabled" : ""}
                                            >
                                                ${
                                                    isCompleted
                                                        ? "✓ Completed"
                                                        : "Complete"
                                                }
                                            </button>

                                        </li>

                                    `;

                                })
                                .join("")}

                        </ol>

                    </div>

                `;


                projectDetails.scrollIntoView({
                    behavior: "smooth"
                });

                return;
            }


            /* ==================================
               COMPLETE PROJECT STEP
            ================================== */

            if (
                button.classList.contains(
                    "project-step-btn"
                )
            ) {

                const stepIndex =
                    Number(button.dataset.stepIndex);

                const projectDetailsCard =
                    projectDetails.querySelector(
                        ".project-details-card"
                    );

                if (!projectDetailsCard) {
                    return;
                }

                const projectIndex =
                    Number(
                        projectDetailsCard.dataset.projectIndex
                    );

                const profile =
                    JSON.parse(savedProfile);

                const selectedProjects =
                    projects[profile.careerGoal];

                const project =
                    selectedProjects[projectIndex];

                if (!project) {
                    return;
                }


                /* Create progress object if needed */

                if (!projectProgress[project.title]) {

                    projectProgress[project.title] = {};

                }


                /* Mark step as completed */

                projectProgress[project.title][stepIndex] = true;


                /* Save progress */

                localStorage.setItem(
                    "pathpilotProjectProgress",
                    JSON.stringify(projectProgress)
                );


                /* Update button */

                button.textContent =
                    "✓ Completed";

                button.disabled = true;


                /* Update progress text */

                const completedSteps =
                    Object.values(
                        projectProgress[project.title]
                    ).filter(
                        value => value === true
                    ).length;

                const steps =
                    projectSteps[project.title];

                const progressText =
                    projectDetails.querySelector(
                        ".project-progress-text"
                    );

                if (progressText) {

                    progressText.textContent =
                        `Progress: ${completedSteps} / ${steps.length} steps completed`;

                }

            }

        }
    );

}
/* ==========================================
   GENERATE CAREER ROADMAP
========================================== */

const learningModulesContainer =
    document.getElementById("learning-modules");


const roadmapTitle =
    document.getElementById("roadmap-title");


if (learningModulesContainer && savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    const selectedRoadmap =
        roadmaps[profile.careerGoal];


    if (selectedRoadmap) {


        /* Update roadmap title */

        if (roadmapTitle) {

            roadmapTitle.textContent =
                `${careerGoalNames[profile.careerGoal]} Roadmap`;

        }


        /* Generate modules */

        selectedRoadmap.forEach((moduleName, index) => {

            const module =
                document.createElement("div");


            module.classList.add("learning-module");


            /* First two modules completed by default */

            if (index < 2) {

                module.classList.add("completed");

            }


            module.innerHTML = `

                <span class="module-status">
                    ${index < 2 ? "✓" : "○"}
                </span>

                <div>

                    <h4>${moduleName}</h4>

                    <p>
                        Continue learning and building your skills.
                    </p>

                </div>

            `;


            learningModulesContainer.appendChild(module);

        });

    }

}


/* ==========================================
   LEARNING PAGE - MODULES
========================================== */

const learningPageModules =
    document.getElementById("learning-page-modules");


if (learningPageModules && savedProfile) {

    const profile =
        JSON.parse(savedProfile);


    const selectedRoadmap =
        roadmaps[profile.careerGoal];


    if (selectedRoadmap) {

        selectedRoadmap.forEach((moduleName, index) => {

            const module =
                document.createElement("div");


            module.classList.add("learning-page-module");


            module.innerHTML = `

                <div class="learning-page-module-number">
                    ${index + 1}
                </div>

                <div class="learning-page-module-content">

                    <h3>
                        ${moduleName}
                    </h3>

                    <p>
                        Learn the fundamentals and build
                        practical skills in this area.
                    </p>

                </div>

                <button class="module-start-btn">
                    Start Learning
                </button>

            `;


            learningPageModules.appendChild(module);

        });

    }

}


/* ==========================================
   LEARNING PAGE - MODULE CONTENT
========================================== */

const moduleLearningContent =
    document.getElementById("module-learning-content");


const learningContent = {

    "Python Fundamentals": {

        title: "Python Fundamentals",

        description:
            "Build a strong foundation in Python programming.",

        topics: [

            "Variables and Data Types",

            "Conditional Statements",

            "Loops",

            "Functions",

            "Lists, Tuples and Dictionaries"

        ]

    },


    "NumPy & Pandas": {

        title: "NumPy & Pandas",

        description:
            "Learn the essential Python libraries used for data manipulation and analysis.",

        topics: [

            "NumPy Arrays",

            "Array Operations",

            "Pandas Series and DataFrames",

            "Data Cleaning",

            "Reading and Writing Data"

        ]

    },


    "Machine Learning": {

        title: "Machine Learning",

        description:
            "Learn how machines identify patterns in data and make predictions.",

        topics: [

            "Introduction to Machine Learning",

            "Supervised and Unsupervised Learning",

            "Training and Testing Data",

            "Regression and Classification",

            "Model Evaluation"

        ]

    },


    "Deep Learning": {

        title: "Deep Learning",

        description:
            "Explore neural networks and the foundations of modern deep learning.",

        topics: [

            "Introduction to Neural Networks",

            "Neurons and Layers",

            "Activation Functions",

            "Forward and Backpropagation",

            "Building Neural Networks"

        ]

    },


    "AI Projects": {

        title: "AI Projects",

        description:
            "Apply your AI and machine learning knowledge by building practical projects.",

        topics: [

            "Choosing an AI Project",

            "Collecting and Preparing Data",

            "Training an AI Model",

            "Building an Application",

            "Deploying Your Project"

        ]

    },
        "Python for Data Science": {

        title: "Python for Data Science",

        description:
            "Learn how Python is used to work with data and solve data science problems.",

        topics: [

            "Python Data Types and Collections",

            "NumPy for Data Analysis",

            "Pandas for Data Manipulation",

            "Working with CSV Data",

            "Basic Data Analysis"

        ]

    },


    "Data Visualization": {

        title: "Data Visualization",

        description:
            "Learn how to represent and understand data using visualizations.",

        topics: [

            "Introduction to Data Visualization",

            "Matplotlib",

            "Seaborn",

            "Charts and Graphs",

            "Interpreting Visualizations"

        ]

    },


    "Statistics": {

        title: "Statistics",

        description:
            "Learn the statistical concepts needed to analyze and understand data.",

        topics: [

            "Mean, Median and Mode",

            "Variance and Standard Deviation",

            "Probability Basics",

            "Correlation",

            "Distributions"

        ]

    },


    "Data Science Projects": {

        title: "Data Science Projects",

        description:
            "Apply your data science knowledge by working on practical projects.",

        topics: [

            "Choosing a Dataset",

            "Data Cleaning",

            "Exploratory Data Analysis",

            "Data Visualization",

            "Presenting Insights"

        ]

    },
        "HTML & CSS": {

        title: "HTML & CSS",

        description:
            "Learn the fundamentals of building and styling web pages.",

        topics: [
            "HTML Structure and Elements",
            "Forms and Semantic HTML",
            "CSS Selectors and Properties",
            "Flexbox and Grid",
            "Responsive Web Design"
        ]

    },

    "JavaScript": {

        title: "JavaScript",

        description:
            "Learn JavaScript fundamentals and use it to create interactive web applications.",

        topics: [
            "Variables and Data Types",
            "Functions",
            "Arrays and Objects",
            "DOM Manipulation",
            "Events and Fetch API"
        ]

    },

    "Frontend Development": {

        title: "Frontend Development",

        description:
            "Learn how to build complete interactive frontend applications.",

        topics: [
            "DOM and Events",
            "API Integration",
            "Async JavaScript",
            "Frontend Project Structure",
            "Building Interactive Interfaces"
        ]

    },

    "Backend Development": {

        title: "Backend Development",

        description:
            "Learn how servers, APIs and databases power modern web applications.",

        topics: [
            "Introduction to Backend Development",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Connecting to a Database"
        ]

    },

    "Full Stack Project": {

        title: "Full Stack Project",

        description:
            "Build a complete web application using frontend, backend and database technologies.",

        topics: [
            "Plan the Application",
            "Build the Frontend",
            "Create the Backend API",
            "Connect the Database",
            "Test and Deploy the Application"
        ]

    },
        "Cloud Fundamentals": {

        title: "Cloud Fundamentals",

        description:
            "Learn the core concepts behind cloud computing and modern cloud platforms.",

        topics: [
            "What is Cloud Computing",
            "Cloud Service Models",
            "Cloud Deployment Models",
            "Virtual Machines",
            "Cloud Storage"
        ]

    },

    "Linux Fundamentals": {

        title: "Linux Fundamentals",

        description:
            "Learn the Linux basics commonly used in cloud and DevOps environments.",

        topics: [
            "Linux File System",
            "Basic Linux Commands",
            "File Permissions",
            "Processes",
            "Shell Basics"
        ]

    },

    "Networking": {

        title: "Networking",

        description:
            "Understand the networking concepts required for cloud and DevOps.",

        topics: [
            "IP Addresses",
            "DNS",
            "HTTP and HTTPS",
            "Ports and Protocols",
            "Basic Networking Commands"
        ]

    },

    "Docker": {

        title: "Docker",

        description:
            "Learn how to package and run applications using containers.",

        topics: [
            "What is Docker",
            "Images and Containers",
            "Dockerfile",
            "Docker Commands",
            "Docker Compose"
        ]

    },

    "CI/CD & DevOps Project": {

        title: "CI/CD & DevOps Project",

        description:
            "Apply DevOps concepts by building an automated development and deployment workflow.",

        topics: [
            "Version Control",
            "Build Automation",
            "Continuous Integration",
            "Continuous Deployment",
            "Deploying the Project"
        ]

    },
        "Networking Fundamentals": {

        title: "Networking Fundamentals",

        description:
            "Learn the networking concepts that form the foundation of cybersecurity.",

        topics: [
            "Network Types",
            "IP Addresses",
            "Ports and Protocols",
            "DNS",
            "Basic Network Security"
        ]

    },

    "Cybersecurity Basics": {

        title: "Cybersecurity Basics",

        description:
            "Learn the fundamental concepts of protecting systems, networks and data.",

        topics: [
            "Introduction to Cybersecurity",
            "Common Threats",
            "Authentication and Authorization",
            "Encryption Basics",
            "Security Best Practices"
        ]

    },

    "Web Security": {

        title: "Web Security",

        description:
            "Learn the fundamentals of securing web applications.",

        topics: [
            "Web Security Fundamentals",
            "Input Validation",
            "Authentication Security",
            "Common Web Vulnerabilities",
            "Secure Coding Practices"
        ]

    },

    "Security Projects": {

        title: "Security Projects",

        description:
            "Apply cybersecurity concepts through practical and controlled projects.",

        topics: [
            "Choose a Security Problem",
            "Plan the Project",
            "Build the Security Tool",
            "Test the Project",
            "Document the Results"
        ]

    },


    "Programming Fundamentals": {

        title: "Programming Fundamentals",

        description:
            "Build the programming foundation needed for mobile application development.",

        topics: [
            "Variables and Data Types",
            "Conditions and Loops",
            "Functions",
            "Arrays and Objects",
            "Basic Programming Concepts"
        ]

    },

    "Mobile UI Development": {

        title: "Mobile UI Development",

        description:
            "Learn how to design and build user interfaces for mobile applications.",

        topics: [
            "Mobile UI Fundamentals",
            "Layouts",
            "Buttons and Forms",
            "Navigation",
            "Responsive Mobile Design"
        ]

    },

    "App Navigation": {

        title: "App Navigation",

        description:
            "Learn how users move between screens and features in a mobile application.",

        topics: [
            "Screen Navigation",
            "Navigation Menus",
            "Passing Data Between Screens",
            "Navigation State",
            "Building User Flows"
        ]

    },

    "APIs & Databases": {

        title: "APIs & Databases",

        description:
            "Learn how mobile applications communicate with APIs and store data.",

        topics: [
            "Introduction to APIs",
            "HTTP Requests",
            "JSON Data",
            "Database Fundamentals",
            "Connecting an App to an API"
        ]

    },

    "Mobile App Project": {

        title: "Mobile App Project",

        description:
            "Build a complete mobile application by applying the concepts you have learned.",

        topics: [
            "Plan the Application",
            "Design the User Interface",
            "Implement the Features",
            "Connect APIs and Data",
            "Test the Application"
        ]

    },

};


/* ==========================================
   START LEARNING BUTTON
========================================== */

if (learningPageModules && moduleLearningContent) {

    learningPageModules.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(".module-start-btn");


            /* Ignore clicks outside buttons */

            if (!button) {

                return;

            }


            const module =
                button.closest(".learning-page-module");


            if (!module) {

                return;

            }


            const moduleTitle =
                module.querySelector(
                    ".learning-page-module-content h3"
                ).textContent.trim();


            const content =
                learningContent[moduleTitle];


            /* If content exists */

            if (content) {

                moduleLearningContent.innerHTML = `

                    <div class="module-content-card">

                        <h2>
                            ${content.title}
                        </h2>

                        <p>
                            ${content.description}
                        </p>

                        <h3>
                            What you will learn
                        </h3>

                        <ul>

                            ${content.topics
                                .map(topic => `
                                    <li>${topic}</li>
                                `)
                                .join("")}

                        </ul>

                        <button
                            class="btn-primary"
                            id="module-complete-btn"
                        >
                            Mark as Complete
                        </button>

                    </div>

                `;


                /* Scroll to content */

                moduleLearningContent.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* ==========================================
   LEARNING PROGRESS
========================================== */

const learningModules =
    document.querySelectorAll(".learning-module");


const progressPercent =
    document.getElementById("progress-percent");


const progressFill =
    document.getElementById("progress-fill");


/* Get current career */

const currentCareer =
    savedProfile
        ? JSON.parse(savedProfile).careerGoal
        : null;


/* Get all saved career progress */

const savedProgress =
    localStorage.getItem("pathpilotProgress");


let allLearningProgress =
    savedProgress
        ? JSON.parse(savedProgress)
        : {};


/* Get progress for current career */

let learningProgress =
    currentCareer && allLearningProgress[currentCareer]
        ? allLearningProgress[currentCareer]
        : {};


/* ==========================================
   RESTORE SAVED PROGRESS
========================================== */

learningModules.forEach((module, index) => {

    if (learningProgress[index]) {

        module.classList.add("completed");


        const status =
            module.querySelector(".module-status");


        if (status) {

            status.textContent = "✓";

        }

    }

});


/* ==========================================
   UPDATE LEARNING PROGRESS
========================================== */

function updateLearningProgress() {

    const completedModules =
        document.querySelectorAll(
            ".learning-module.completed"
        ).length;


    const totalModules =
        learningModules.length;


    /* Avoid division by zero */

    if (totalModules === 0) {

        return;

    }


    const progress =
        Math.round(
            (completedModules / totalModules) * 100
        );


    /* Update percentage */

    if (progressPercent) {

        progressPercent.textContent =
            `${progress}%`;

    }


    /* Update progress bar */

    if (progressFill) {

        progressFill.style.width =
            `${progress}%`;

    }

}


/* ==========================================
   MODULE CLICK
========================================== */

if (learningModulesContainer) {

    learningModulesContainer.addEventListener(
        "click",
        function (event) {

            const module =
                event.target.closest(".learning-module");


            /* Ignore clicks outside a module */

            if (
                !module ||
                !learningModulesContainer.contains(module)
            ) {

                return;

            }


            /* Find module index */

            const index =
                Array.from(learningModules)
                    .indexOf(module);


            if (
                index === -1 ||
                !currentCareer
            ) {

                return;

            }


            /* Toggle completion */

            module.classList.toggle("completed");


            const isCompleted =
                module.classList.contains("completed");


            /* Update status symbol */

            const status =
                module.querySelector(".module-status");


            if (status) {

                status.textContent =
                    isCompleted ? "✓" : "○";

            }


            /* Save current career progress */

            learningProgress[index] =
                isCompleted;


            allLearningProgress[currentCareer] =
                learningProgress;


            localStorage.setItem(
                "pathpilotProgress",
                JSON.stringify(allLearningProgress)
            );


            /* Recalculate progress */

            updateLearningProgress();

        }
    );

}


/* ==========================================
   INITIAL PROGRESS CALCULATION
========================================== */

updateLearningProgress();


/* ==========================================
   MARK MODULE AS COMPLETE
========================================== */

if (moduleLearningContent) {

    moduleLearningContent.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest("#module-complete-btn");


            /* Ignore other clicks */

            if (!button) {

                return;

            }


            if (!currentCareer) {

                return;

            }


            /* Get the module title */

            const moduleTitle =
                moduleLearningContent
                    .querySelector(".module-content-card h2")
                    .textContent
                    .trim();


            /* Get current career roadmap */

            const currentRoadmap =
                roadmaps[currentCareer];


            if (!currentRoadmap) {

                return;

            }


            /* Find module index */

            const moduleIndex =
                currentRoadmap.indexOf(moduleTitle);


            if (moduleIndex === -1) {

                return;

            }


            /* Mark module as completed */

            learningProgress[moduleIndex] = true;


            /* Save progress for current career */

            allLearningProgress[currentCareer] =
                learningProgress;


            localStorage.setItem(
                "pathpilotProgress",
                JSON.stringify(allLearningProgress)
            );


            /* Update button */

            button.textContent =
                "✓ Completed";


            button.disabled = true;


            /* Update dashboard progress if visible */

            updateLearningProgress();

        }
    );

}

/* ==========================================
   DASHBOARD - NEXT STEP
========================================== */

const nextStepTitle =
    document.getElementById("next-step-title");

const nextStepDescription =
    document.getElementById("next-step-description");

const nextStepButton =
    document.getElementById("next-step-btn");


if (
    nextStepTitle &&
    nextStepDescription &&
    nextStepButton &&
    savedProfile
) {

    const profile =
        JSON.parse(savedProfile);

    const currentCareer =
        profile.careerGoal;

    const currentRoadmap =
        roadmaps[currentCareer];


    if (currentRoadmap) {

        /* Get saved learning progress */

        const savedLearningProgress =
            localStorage.getItem("pathpilotProgress");

        const allProgress =
            savedLearningProgress
                ? JSON.parse(savedLearningProgress)
                : {};

        const careerProgress =
            allProgress[currentCareer] || {};


        /* Find the first incomplete module */

        let nextModuleIndex = -1;

        for (
            let i = 0;
            i < currentRoadmap.length;
            i++
        ) {

            if (!careerProgress[i]) {

                nextModuleIndex = i;
                break;

            }

        }


        /* ==================================
           NEXT LEARNING MODULE
        ================================== */

        if (nextModuleIndex !== -1) {

            const nextModule =
                currentRoadmap[nextModuleIndex];

            nextStepTitle.textContent =
                `Continue: ${nextModule}`;

            nextStepDescription.textContent =
                "Complete this learning module to continue progressing on your career roadmap.";

            nextStepButton.textContent =
                "Continue Learning";

            nextStepButton.href =
                "learning.html";

        }


        /* ==================================
           LEARNING COMPLETED
        ================================== */

        else {

            nextStepTitle.textContent =
                "Start a Project";

            nextStepDescription.textContent =
                "You have completed your learning roadmap. Now apply your skills by building a project.";

            nextStepButton.textContent =
                "View Projects";

            nextStepButton.href =
                "#projects-grid";

        }

    }

}