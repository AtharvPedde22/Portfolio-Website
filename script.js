// Smooth scrolling for navigation links
document.querySelectorAll("nav ul li a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetID = this.getAttribute("href").substring(1);
        document.getElementById(targetID).scrollIntoView({ behavior: "smooth" });
    });
});

// Form validation
document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = this.querySelector('input[name="Name"]').value.trim();
    const email = this.querySelector('input[name="Email"]').value.trim();
    const message = this.querySelector('textarea[name="Message"]').value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
    } else {
        alert("Thank you for your message, " + name + "!");
    }
});

// Dynamic tab switching
const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener("click", function () {
        // Remove active state from all tabs
        tabLinks.forEach((link) => link.classList.remove("active-link"));
        tabContents.forEach((content) => content.classList.remove("active-tab"));

        // Add active state to the clicked tab
        this.classList.add("active-link");
        const targetTab = this.textContent.toLowerCase();
        document.getElementById(targetTab).classList.add("active-tab");
    });
});
