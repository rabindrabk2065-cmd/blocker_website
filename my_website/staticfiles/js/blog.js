/*====================================
        BLOG SEARCH FILTER
====================================*/


const searchInput = document.getElementById("searchBlog");

const blogCards = document.querySelectorAll(".blog-card");


if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        let searchValue = this.value.toLowerCase();


        blogCards.forEach(card => {


            let title = card
                .querySelector("h3")
                .innerText
                .toLowerCase();


            let category = card
                .querySelector(".category")
                .innerText
                .toLowerCase();



            if (
                title.includes(searchValue) ||
                category.includes(searchValue)
            ) {

                card.style.display = "block";

            }

            else {

                card.style.display = "none";

            }


        });


    });


}





/*====================================
        SCROLL REVEAL ANIMATION
====================================*/


const revealElements = document.querySelectorAll(
    ".featured-blog, .blog-card, .blog-cta"
);



const revealObserver = new IntersectionObserver(
    (entries) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("show");


            }


        });


    },
    {
        threshold: 0.15
    });



revealElements.forEach(element => {

    element.classList.add("hidden");

    revealObserver.observe(element);

});






/*====================================
        BUTTON CLICK EFFECT
====================================*/


const buttons = document.querySelectorAll(
    ".featured-btn, .primary-btn, .secondary-btn"
);



buttons.forEach(button => {


    button.addEventListener("click", () => {


        button.style.transform = "scale(.95)";


        setTimeout(() => {


            button.style.transform = "";


        }, 150);


    });


});

/*====================================
        BACK TO TOP
====================================*/


const topBtn = document.getElementById("topBtn");


window.addEventListener("scroll", () => {


    if (window.scrollY > 400) {

        topBtn.classList.add("active");

    }

    else {

        topBtn.classList.remove("active");

    }


});



if (topBtn) {

    topBtn.addEventListener("click", () => {


        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });


    });

}
/*======= nav bar ko menu slide ko lagi ho yo code js ko */
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});

// Menu item click गर्दा menu बन्द हुने
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    });
});