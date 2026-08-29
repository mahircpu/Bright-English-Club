// Bright English Club
// Main JavaScript


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    const links = navLinks.querySelectorAll("a");

    links.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });
}


// =========================
// FAQ ACCORDION
// =========================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(function (item) {

    const question = item.querySelector(".faq-question");

    if (question) {
        question.addEventListener("click", function () {

            faqItems.forEach(function (otherItem) {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
        });
    }

});


// =========================
// CURRENT YEAR
// =========================

const currentYear = document.getElementById("current-year");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (name === "" || email === "" || message === "") {
            alert("Please complete all fields before submitting.");
            return;
        }

        alert(
            "Thank you, " +
            name +
            ". Your message has been received."
        );

        contactForm.reset();
    });
}


// =========================
// CLOSE MOBILE MENU
// =========================

document.addEventListener("click", function (event) {

    if (!menuToggle || !navLinks) {
        return;
    }

    const clickedInsideMenu = navLinks.contains(event.target);
    const clickedMenuButton = menuToggle.contains(event.target);

    if (!clickedInsideMenu && !clickedMenuButton) {
        navLinks.classList.remove("active");
    }

});