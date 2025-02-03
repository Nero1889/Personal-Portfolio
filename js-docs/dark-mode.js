const THEME_TOGGLE_BTNS = document.querySelectorAll(".theme-toggle");

const CURRENT_THEME = localStorage.getItem("theme");
if (CURRENT_THEME === "light") {
    document.body.classList.add("light-mode");
}

THEME_TOGGLE_BTNS.forEach(btn => {
    btn.addEventListener("click", () => {
        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.removeItem("theme", "dark");
        }

        document.body.style.transition = "background-color .2s ease-in-out";
    });
}); 