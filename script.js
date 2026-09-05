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




const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", async function (event) {

        event.preventDefault();

        const submitButton = contactForm.querySelector(
            'button[type="submit"]'
        );

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const messageInput = document.getElementById("message");

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();


        // Check fields

        if (name === "" || email === "" || message === "") {

            alert("Please complete all fields before submitting.");

            return;

        }


        // Disable button while sending

        if (submitButton) {

            submitButton.disabled = true;
            submitButton.textContent = "Sending...";

        }


        try {

            const formData = new FormData(contactForm);


            const response = await fetch(
                contactForm.action,
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "Accept": "application/json"
                    }
                }
            );


            if (response.ok) {

                alert(
                    "Thank you, " +
                    name +
                    ". Your message has been sent successfully."
                );

                contactForm.reset();

            } else {

                alert(
                    "Sorry, your message could not be sent. Please try again."
                );

            }


        } catch (error) {

            alert(
                "Something went wrong while sending your message. Please try again."
            );

        }


        // Restore button

        if (submitButton) {

            submitButton.disabled = false;
            submitButton.textContent = "Send Message";

        }

    });

}


// =========================
// CLOSE MOBILE MENU
// =========================

document.addEventListener("click", function (event) {

    if (!menuToggle || !navLinks) {
        return;
    }


    const clickedInsideMenu =
        navLinks.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (!clickedInsideMenu && !clickedMenuButton) {

        navLinks.classList.remove("active");

    }

});
