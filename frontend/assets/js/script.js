const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navButtons = document.querySelector(".nav-buttons");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");
    navButtons.classList.toggle("active");

});