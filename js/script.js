/*=========================================
    MENU MOBILE
=========================================*/

const menuButton = document.querySelector(".menu-mobile");
const menu = document.querySelector("nav");

if (menuButton) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
        const icon = menuButton.querySelector("i");
        if (menu.classList.contains("active")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");
        } else {
            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");
        }
    });
}

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
        const icon = menuButton.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 120) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
});

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 500) backToTop.classList.add("show");
    else backToTop.classList.remove("show");
});

backToTop.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
});

const revealElements = document.querySelectorAll(
    ".card, .about-image, .about-text, .gallery div, .contact-card"
);

function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;
    revealElements.forEach(element => {
        const top = element.getBoundingClientRect().top;
        if (top < trigger) element.classList.add("fade-up");
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        if (scrollY >= sectionTop) current = section.getAttribute("id");
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) link.classList.add("active");
    });
});

window.addEventListener("load", () => {
    document.querySelector(".hero-text").classList.add("fade-up");
    setTimeout(() => {
        document.querySelector(".hero-image").classList.add("fade-up");
    }, 250);
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (!target) return;
        target.scrollIntoView({behavior: "smooth"});
    });
});