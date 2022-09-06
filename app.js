const elToggler = document.querySelector(".header__burger");
const elHeader = document.querySelector(".header");

elToggler.addEventListener("click", function () {
  elHeader.classList.toggle("header--opened");
});