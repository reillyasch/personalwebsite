const hamburger = document.querySelector(".hamburger");
const navMenu  = document.querySelector(".nav-menu");
const header = document.querySelector("header");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    header.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu(){
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
    header.classList.toggle("active");
}