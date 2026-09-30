// ================= LOGIN =================

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const studentId =
        document.getElementById("studentId").value;

    const password =
        document.getElementById("password").value;

    const error =
        document.getElementById("loginError");


    // Demo login credentials

    if (studentId === "KA1001" && password === "1234") {

        document.getElementById("loginPage")
            .style.display = "none";

        document.getElementById("dashboard")
            .classList.remove("hidden");

        error.textContent = "";

    } else {

        error.textContent =
            "Invalid Student ID or Password.";

    }

});


// ================= SECTION NAVIGATION =================

function showSection(sectionId) {

    // Hide all sections

    const sections =
        document.querySelectorAll(".section");

    sections.forEach(function(section) {

        section.classList.remove("active-section");

    });


    // Show selected section

    document
        .getElementById(sectionId)
        .classList.add("active-section");


    // Remove active navigation

    const buttons =
        document.querySelectorAll(".nav-btn");

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Find clicked navigation button

    buttons.forEach(function(button) {

        if (button
            .getAttribute("onclick")
            .includes(sectionId)) {

            button.classList.add("active");

        }

    });


    // Change page title

    const titles = {

        home: "Dashboard",

        profile: "Student Profile",

        classroom: "Classroom",

        attendance: "Attendance",

        tests: "Tests & Exams",

        performance: "Performance"

    };


    document.getElementById("pageTitle")
        .textContent = titles[sectionId];

}


// ================= LOGOUT =================

function logout() {

    document.getElementById("dashboard")
        .classList.add("hidden");

    document.getElementById("loginPage")
        .style.display = "flex";

    document.getElementById("loginForm")
        .reset();

}