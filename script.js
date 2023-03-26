let section = document.querySelector(".section3");
let spans = document.querySelectorAll(".rate span")
window.onscroll = function () {
    if (window.scrollY >= section.offsetTop-300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }
}

