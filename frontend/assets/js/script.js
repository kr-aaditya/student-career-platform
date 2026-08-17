/* ==========================================
   NAVBAR
========================================== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

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

        profileMessage.textContent =
            "✅ Profile saved successfully!";

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
   LEARNING PROGRESS
========================================== */

const learningModules =
    document.querySelectorAll(".learning-module");

const progressPercent =
    document.getElementById("progress-percent");

const progressFill =
    document.getElementById("progress-fill");


/* Get saved learning progress */

const savedProgress =
    localStorage.getItem("pathpilotProgress");


let learningProgress =
    savedProgress
        ? JSON.parse(savedProgress)
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


    /* Update percentage text */

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

learningModules.forEach((module, index) => {

    module.addEventListener("click", function () {


        /* Toggle completed state */

        module.classList.toggle("completed");


        const status =
            module.querySelector(".module-status");


        /* If completed */

        if (module.classList.contains("completed")) {

            if (status) {

                status.textContent = "✓";

            }


            learningProgress[index] = true;

        }


        /* If not completed */

        else {

            if (status) {

                status.textContent = "○";

            }


            learningProgress[index] = false;

        }


        /* Save progress */

        localStorage.setItem(

            "pathpilotProgress",

            JSON.stringify(learningProgress)

        );


        /* Recalculate progress */

        updateLearningProgress();

    });

});


/* ==========================================
   INITIAL PROGRESS CALCULATION
========================================== */

updateLearningProgress();