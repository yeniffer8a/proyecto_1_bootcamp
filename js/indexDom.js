//import darkTheme from "./dark_theme";

const themeBtn = document.querySelector(".change-theme");
const selectors = document.querySelectorAll("[data-dark]");

themeBtn.addEventListener("click", () => {
  let moon = "🌚",
    sun = "☀️";
  //console.log(themeBtn);
  if (themeBtn.textContent === moon) {
    selectors.forEach((selector) => {
      selector.classList.add("dark-mode");
      console.log(selector);
    });

    //selector.classList.add("dark-mode");
    themeBtn.textContent = sun;
  } else {
    selectors.forEach((selector) => selector.classList.remove("dark-mode"));
    //selector.classList.remove("dark-mode");
    themeBtn.textContent = moon;
  }
});

// document.addEventListener("DOMContentLoaded", (e) => {
//   //Primer parámetro id de botón, segundo parámetro clase que se va a activar con classList
//   darkTheme("#ids", "dark-mode");
// });
