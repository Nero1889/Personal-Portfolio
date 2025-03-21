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