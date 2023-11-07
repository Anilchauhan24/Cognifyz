// script.js
const burgerMenu = document.getElementById("burger-menu");
const navLinks = document.getElementById("nav-links");
const smallNav = document.getElementById("small-nav");

burgerMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    smallNav.classList.toggle('active');
});
