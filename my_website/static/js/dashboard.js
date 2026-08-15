document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");
    const sidebar = document.querySelector(".sidebar");

    if (menuBtn) {

        menuBtn.addEventListener("click", function () {

            // Mobile मा sidebar मात्र खोल्ने
            if (window.innerWidth <= 768) {

                sidebar.classList.toggle("active");

                const icon = menuBtn.querySelector("i");

                if (sidebar.classList.contains("active")) {
                    icon.classList.remove("fa-bars");
                    icon.classList.add("fa-xmark");
                } else {
                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            } else {

                // Desktop मा top navbar चल्ने
                navLinks.classList.toggle("active");

            }

        });
    }


    // Sidebar link click
    if (sidebar) {

        sidebar.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                if (window.innerWidth <= 768) {

                    sidebar.classList.remove("active");

                    const icon = menuBtn.querySelector("i");

                    icon.classList.remove("fa-xmark");
                    icon.classList.add("fa-bars");
                }

            });

        });

    }


    // Mobile बाट desktop resize हुँदा reset
    window.addEventListener("resize", function () {

        if (window.innerWidth > 768) {

            sidebar.classList.remove("active");
            navLinks.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

});