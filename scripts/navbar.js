const navbar = document.querySelector("#navbar");
let scrolled = false;

window.addEventListener("scroll", () => {
    if (window.pageYOffset > 70) {
        if (!scrolled) {
            navbar.classList.remove("top");
            scrolled = true;
        }
    } else {
        navbar.classList.add("top");
        scrolled = false;
    }
});
