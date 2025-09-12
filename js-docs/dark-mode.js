const BODY = document.body;
const THEME_TOGGLE_BTNS = document.querySelectorAll(".theme-toggle");
const CURRENT_THEME = localStorage.getItem("theme");
const THEME_TOGGLE_IMGS = document.querySelectorAll(".theme-toggle");

if (CURRENT_THEME === "light") {
    BODY.classList.add("light-mode");
    THEME_TOGGLE_IMGS.forEach(img => {
        img.src = "images/moon.png";
        img.alt = "Dark Theme Icon";
    });
}

THEME_TOGGLE_BTNS.forEach(btn => {
    btn.addEventListener("click", () => {
        BODY.classList.toggle("light-mode");

        if (BODY.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
            THEME_TOGGLE_IMGS.forEach(img => {
                img.src = "images/moon.png";
                img.alt = "Dark Theme Icon";
            });
        } else {
            localStorage.removeItem("theme");
            THEME_TOGGLE_IMGS.forEach(img => {
                img.src = "images/sun.png";
                img.alt = "Light Theme Icon";
            });
        }

        BODY.style.transition = "background-color .25s ease-in-out";
    });
});
