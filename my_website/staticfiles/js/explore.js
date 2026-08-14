//===============================
// Semester Card Animation
//===============================

const semesterCards = document.querySelectorAll(".semester-card");

semesterCards.forEach((card, index) => {

    card.style.opacity = "0";

    card.style.transform = "translateY(50px)";

    setTimeout(() => {

        card.style.transition = ".6s";

        card.style.opacity = "1";

        card.style.transform = "translateY(0)";

    }, index * 150);

});
