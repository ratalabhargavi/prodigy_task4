// Select the menu icon and navbar
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle 'active' class on menu icon and navbar on click
menuIcon.onclick = function () {
    menuIcon.classList.toggle("fa-times");
    navbar.classList.toggle("active");
};

// Scroll sections active link
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.onscroll = function () {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(`.navbar a[href*=${id}]`).classList.add("active");
            });
        }
    });
};

// Close the navbar when a link is clicked (for mobile view)
navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove("fa-times");
        navbar.classList.remove("active");
    };
});
