const $btnOpn = document.querySelector(".navbar-toggler");
const $header = document.querySelector("header");
const $nav = document.querySelector(".navi");
const $navItem = document.querySelectorAll(".nav-item");

$btnOpn.addEventListener("click", () => {
    $header.classList.toggle("opn");
});

for (const item of $navItem) {
    item.addEventListener("click", () => {
        for (const i of $navItem) {
            i.classList.remove("active");
        }
        item.classList.add("active");
    });
}

$nav.addEventListener("mouseover", () => {
    $header.classList.add("expand");
}).addEventListener("mouseout", () => {
    $header.classList.remove("expand");
});
