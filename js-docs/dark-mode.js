const BODY = document.body;
const THEME_TOGGLE_BTNS = document.querySelectorAll(".theme-toggle");
const CURRENT_THEME = localStorage.getItem("theme");

if (CURRENT_THEME === "light") BODY.classList.add("light-mode");

THEME_TOGGLE_BTNS.forEach(btn => {
    btn.addEventListener("click", () => {
        BODY.classList.toggle("light-mode");

        BODY.classList.contains("light-mode") 
        ? localStorage.setItem("theme", "light")
        : localStorage.removeItem("theme");
        
        BODY.style.transition = "background-color .2s ease-in-out";
    });
}); 