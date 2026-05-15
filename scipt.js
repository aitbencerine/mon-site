console.log("Portfolio de Cerine (version beauty brand) chargé ✨");
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.querySelector(".contact-form form");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Merci pour ton message ! 💌\nComme c’est un portfolio, le formulaire est une démo.");
            contactForm.reset();
        });
    }
});