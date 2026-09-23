const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const nav = document.querySelector(".nav");


openBtn.addEventListener("click", () => {
  nav.classList.add("nav-show");
})

closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-show");
})