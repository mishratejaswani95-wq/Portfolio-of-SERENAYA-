// ===============================
// MOBILE MENU
// ===============================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
        menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }

});

// ===============================
// NAVBAR SHADOW
// ===============================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ===============================
// SMOOTH SCROLL
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        e.preventDefault();

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});

// ===============================
// SCROLL REVEAL
// ===============================

const revealElements = document.querySelectorAll(
    ".about, .approach, .skills, .quote, .featured, .contact, .card, .work-card"
);

const reveal = () => {

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 120) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

reveal();

// ===============================
// FLOATING POLAROID
// ===============================

const polaroid = document.querySelector(".polaroid");

let angle = -3;
let direction = 1;

setInterval(() => {

    angle += 0.3 * direction;

    if (angle > 2) direction = -1;

    if (angle < -3) direction = 1;

    polaroid.style.transform =
        `translateY(${Math.sin(Date.now()/600)*6}px) rotate(${angle}deg)`;

}, 30);

// ===============================
// ACTIVE NAVIGATION
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("current");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("current");

        }

    });

});

// ===============================
// BUTTON HOVER
// ===============================

const button = document.querySelector(".hero-button");

button.addEventListener("mouseenter", () => {

    button.style.transform = "translateY(-5px) scale(1.03)";

});

button.addEventListener("mouseleave", () => {

    button.style.transform = "translateY(0) scale(1)";

});
