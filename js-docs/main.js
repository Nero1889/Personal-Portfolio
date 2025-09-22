const HEADER_BARS = document.querySelector("#header-bars");
const MOBILE_NAV = document.querySelector("#mobile-nav");
const MOBILE_LINKS = document.querySelectorAll(".mobile-link");
const MENU_ICON = "images/menu.png";
const CLOSE_ICON = "images/close.png";
let isMobileNavOpen = false;
    
HEADER_BARS.addEventListener("click", () => {
    isMobileNavOpen = !isMobileNavOpen;

    if (isMobileNavOpen) {
        MOBILE_NAV.style.display = "flex";
        document.body.style.overflowY = "hidden";
    } else {
        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
    }
});

MOBILE_LINKS.forEach(link => {
    link.addEventListener("click", () => {
        isMobileNavOpen = !isMobileNavOpen;

        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
    });
});


HEADER_BARS.addEventListener("click", () => {
    if (MOBILE_NAV.style.display === "none" || MOBILE_NAV.style.display === "") {
        MOBILE_NAV.style.display = "flex";
        HEADER_BARS.src = CLOSE_ICON;
        HEADER_BARS.alt = "Close Icon";
    } else {
        MOBILE_NAV.style.display = "none";
        HEADER_BARS.src = MENU_ICON;
        HEADER_BARS.alt = "Menu Icon";
    }
});

const mobileLinks = document.querySelectorAll(".mobile-link");
mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
        MOBILE_NAV.style.display = "none";
        HEADER_BARS.src = MENU_ICON;
        HEADER_BARS.alt = "Menu Icon";
    });
});
