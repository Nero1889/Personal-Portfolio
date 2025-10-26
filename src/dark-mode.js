/* Theme Toggle */
const BODY = document.body;
const TOGGLE_BTNS = document.querySelectorAll("#theme-toggle");
const THEME = localStorage.getItem("theme");

THEME && document.body.classList.add(THEME);

const handleThemeToggle = () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light-mode");
    } else {
        localStorage.removeItem("theme");
        document.body.removeAttribute("class");
    }

    BODY.style.transition = "background-color .25s ease-in-out";
};

TOGGLE_BTNS.forEach(btn =>
    btn.addEventListener("click", handleThemeToggle)
);