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


const degreeNames = {

    "btech": "B.Tech",

    "be": "B.E.",

    "bca": "BCA",

    "bsc": "B.Sc.",

    "mca": "MCA",

    "mtech": "M.Tech",

    "other": "Other"

};


const yearNames = {

    "1": "1st Year",

    "2": "2nd Year",

    "3": "3rd Year",

    "4": "4th Year"

};


/* ==========================================
   LOAD SAVED PROFILE
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

    }

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