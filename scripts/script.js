const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".nav");


openBtn.addEventListener("click", () => {
  nav.classList.add("nav-show");
})

closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-show");
})

overlay.addEventListener("click", () => {
  nav.classList.remove("nav-show");
})