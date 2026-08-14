

/*============= yo code maile bujhiko chhu ============ */
//=============================
// SCROLL REVEAL ANIMATION
//=============================

const revealItems = document.querySelectorAll(
    ".category-card,.semester-card,.note-card"
);

const revealOnScroll = () => {

    const screenHeight = window.innerHeight;

    revealItems.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < screenHeight - 120) {

            item.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

//=============================
// SEARCH NOTES
//=============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", () => {

        const value = searchInput.value.toLowerCase();

        const cards = document.querySelectorAll(".note-card");

        cards.forEach(card => {

            const text = card.innerText.toLowerCase();

            card.style.display = text.includes(value) ? "block" : "none";

        });

    });

}

/*===== menu ko ho yo code ====*/
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});