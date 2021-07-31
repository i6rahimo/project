
const burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    if (!burger.classList.contains("active")) {
        burger.classList.add("active");
    }
    else {
        burger.classList.remove('active');
    }
});