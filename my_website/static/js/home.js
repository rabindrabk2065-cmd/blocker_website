/* // ==============================
// Mobile Menu Toggle
// ==============================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

if (menuBtn && navLinks && menuIcon) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });
}

// ==============================
// Close Menu When Click Link
// ==============================
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks && menuIcon) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });
});

// ==============================
// Navbar Shadow on Scroll
// ==============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ==============================
// Smooth Scroll (Fixed)
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Ignore empty "#"
        if (href === "#") return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// =====================================
// ABOUT SECTION ANIMATION
// =====================================
const aboutSection = document.querySelector(".about");
const progressBars = document.querySelectorAll(".progress-bar");

function animateAbout() {

    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        progressBars.forEach(bar => {

            if (!bar.dataset.width) {
                bar.dataset.width = window.getComputedStyle(bar).width;
            }

            bar.style.width = "0";

            setTimeout(() => {
                bar.style.transition = "width 2s ease";
                bar.style.width = bar.dataset.width;
            }, 100);

        });

        window.removeEventListener("scroll", animateAbout);
    }
}

window.addEventListener("scroll", animateAbout);

// ===============================
// ACTIVE NAVIGATION
// ===============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (
            href &&
            href.startsWith("#") &&
            href === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});*/


// ==============================
// Mobile Menu Toggle
// ==============================
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const menuIcon = document.querySelector(".menu-btn i");

if (menuBtn && navLinks && menuIcon) {
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");

        if (navLinks.classList.contains("active")) {
            menuIcon.classList.remove("fa-bars");
            menuIcon.classList.add("fa-xmark");
        } else {
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });
}

// ==============================
// Close Menu When Click Link
// ==============================
const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        if (navLinks && menuIcon) {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("fa-xmark");
            menuIcon.classList.add("fa-bars");
        }
    });
});

// ==============================
// Navbar Shadow on Scroll
// ==============================
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (!header) return;

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.3)";
    } else {
        header.style.boxShadow = "none";
    }
});

// ==============================
// Smooth Scroll (Fixed)
// ==============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Ignore empty "#"
        if (href === "#") return;

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }

    });

});

// =====================================
// ABOUT SECTION ANIMATION
// =====================================
const aboutSection = document.querySelector(".about");
const progressBars = document.querySelectorAll(".progress-bar");

function animateAbout() {

    if (!aboutSection) return;

    const sectionTop = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {

        progressBars.forEach(bar => {

            if (!bar.dataset.width) {
                bar.dataset.width = window.getComputedStyle(bar).width;
            }

            bar.style.width = "0";

            setTimeout(() => {
                bar.style.transition = "width 2s ease";
                bar.style.width = bar.dataset.width;
            }, 100);

        });

        window.removeEventListener("scroll", animateAbout);
    }
}

window.addEventListener("scroll", animateAbout);

// ===============================
// ACTIVE NAVIGATION
// ===============================
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            current = section.id;
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (
            href &&
            href.startsWith("#") &&
            href === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});