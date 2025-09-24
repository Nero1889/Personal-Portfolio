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
        HEADER_BARS.src = CLOSE_ICON;
        HEADER_BARS.alt = "Close Icon";
    } else {
        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
        HEADER_BARS.src = MENU_ICON;
        HEADER_BARS.alt = "Menu Icon";
    }
});

MOBILE_LINKS.forEach(link => {
    link.addEventListener("click", () => {
        isMobileNavOpen = false;
        MOBILE_NAV.style.display = "none";
        document.body.style.overflowY = "auto";
        HEADER_BARS.src = MENU_ICON;
        HEADER_BARS.alt = "Menu Icon";
    });
});
