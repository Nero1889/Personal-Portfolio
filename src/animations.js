/* Scatter and Gather Effect */
document.addEventListener("DOMContentLoaded", () => {
    const HERO_TITLE = document.querySelector("#hero-title");
    const LETTERS = HERO_TITLE.querySelectorAll("span");
  
    LETTERS.forEach((letter) => {
        const X = (Math.random() - 0.5) * 25;
        const Y = (Math.random() - 0.5) * 34;
        const ROTATION = (Math.random() - 0.5) * 360;
        const DELAY = Math.random() * 325;
  
        letter.style.transform = `translate(${X}vw, ${Y}vh) rotate(${ROTATION}deg)`;
        letter.style.opacity = 1;
        letter.style.animation = `scatterAndGather .75s forwards ${DELAY}ms`;
  
        letter.dataset.initialTransform = `translate(0px, 0px) rotate(0deg)`;
        letter.dataset.x = 0;
        letter.dataset.y = 0;
    });
});

/* Lazy Loading Effect for Images */
const LAZY_IMG = document.querySelectorAll(".lazy");
const OBSERVER = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const IMG = entry.target;
            IMG.src = IMG.dataset.src;
            IMG.classList.remove("loading");
            IMG.classList.add("loaded");
            observer.unobserve(IMG);
        }
    });
});
    
LAZY_IMG.forEach((img) => OBSERVER.observe(img));