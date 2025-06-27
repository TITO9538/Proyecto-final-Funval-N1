/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

import { hoteles } from "./stays.js";
import {
  counterAdults,
  counterChildrens,
  gueToFilter,
  inputGuests,
  renderAll,
  searchBtn,
  showGuestsInInput,
  showModal,
} from "./utils.js";

const articles = document.querySelector("#articles");

renderAll(articles);
showModal();
inputGuests();

counterAdults();
counterChildrens();
showGuestsInInput();

///////////////////////////////////////////////
//SEARCH ACTION

searchBtn();

//////////////////////////////////////////
const navbar = document.querySelector("#navbar");
const logo = document.querySelector("#logo");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100 && !navbar.classList.contains("h-25")) {
    navbar.classList.remove("h-35", "md:h-20");
    navbar.classList.add("h-25", "md:h-15");
    logo.classList.add("max-md:hidden");
  } else if (scrollY <= 100 && !navbar.classList.contains("h-35")) {
    navbar.classList.remove("h-25", "md:h-15");
    logo.classList.remove("max-md:hidden");
    navbar.classList.add("h-35", "md:h-20");
  }
});
