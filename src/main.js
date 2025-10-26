import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/header.css";
import "../styles/hero.css";
import "../styles/about.css";
import "../styles/work.css";
import "../styles/services.css";
import "../styles/contact.css";
import "../styles/footer.css";
import "../styles/mobile-nav.css";
import "../styles/utils.css";

/* Mobile Navigation */
const MENU = document.querySelector(".header-bars");
const MOBILE_NAV = document.querySelector(".mobile-nav");
const LINKS = document.querySelectorAll(".mobile-nav-link");
let isMobileNavOpen = false;

MENU.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    if(isMobileNavOpen) {
        MOBILE_NAV.style.display = "flex";
        document.body.style.overflowY = "hidden";
    } else {
        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
    }
});

LINKS.forEach(link => {
    link.addEventListener("click", () => {
        isMobileNavOpen = false;
        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
    });
});

