/* =========================
   BEFORE / AFTER SLIDER
========================= */

const slider = document.querySelector(".slider");
const beforeContainer = document.querySelector(".before-container");
const sliderButton = document.querySelector(".slider-button");

slider.addEventListener("input", function () {

    const value = this.value;

    beforeContainer.style.width = value + "%";
    sliderButton.style.left = value + "%";

});


/* =========================
   SCROLL REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold: 0.15
    }
);


revealElements.forEach((element) => {
    observer.observe(element);
});


/* =========================
   MOBILE MENU
========================= */

const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


/* =========================
   CONTACT FORM
========================= */

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Thank you! Your cleaning request has been received.");

    form.reset();

});