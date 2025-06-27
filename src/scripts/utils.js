/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */
import { hoteles } from "./stays.js";

function renderSkeletons(where) {
  hoteles.forEach(() => {
    where.innerHTML += `
        <article class="w-[90%] h-[100%] flex flex-col items-center justify-center animate-pulse">
          <div
          class="flex items-center justify-center w-full h-60 bg-gray-300 dark:bg-slate-600 rounded-2xl">
          <svg
            class="w-10 h-10 text-gray-200 dark:bg-slate-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
          <div class="w-[90%] flex justify-between items-center mt-2">
            <div class="h-4 w-[50%] bg-gray-200 dark:bg-slate-500 rounded-xl">
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-5 text-gray-300 dark:text-slate-600 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="w-[90%] h-5 bg-gray-300 dark:bg-slate-600 rounded-xl mt-2"></div>
        </article>`;
  });
}
function renderCards(array, where) {
  setTimeout(() => {
    where.innerHTML = "";
    array.forEach((hotel) => {
      where.innerHTML += `
      <article class="w-[90%] flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-400 hover:scale-102">
          <div class="rounded-2xl overflow-hidden w-full h-50 md:h-60">
            <img
              src="${hotel.photo}"
              alt="Hotel Image"
              class="object-cover w-full h-full transform transition-transform duration-800 hover:scale-125 active:scale-170" />
            </div>
          <div class="w-[90%] flex justify-between items-center mt-2">
            <!-- superHost, type, beds  -->
            <div class="flex items-center gap-1 text-xs text-gray-500 xl:text-sm">
              ${
                hotel.superHost
                  ? `<div
                class="h-6 w-22 border rounded-xl flex items-center justify-center text-gray-600 dark:text-slate-900 dark:bg-slate-600 dark:font-bold xl:w-25">
                SUPERHOST
              </div>`
                  : ""
              }
              <div>${hotel.type}</div>
              <span>.</span>
              <div>${
                hotel.beds == null
                  ? `unspecified`
                  : `${hotel.beds > 1 ? `${hotel.beds} beds` : `${hotel.beds} bed`}`
              }</div>
            </div>
            <!-- rating -->
            <div class="flex items-center gap-1 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 text-[#eb5757] fill-current hover:animate-spin">
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="font-light dark:text-slate-200">${hotel.rating}</span>
            </div>
          </div>
          <!-- Title -->
          <h3 class="w-[90%] text-sm my-2 font-medium lg:text-lg">
            ${hotel.title}
          </h3>
        </article>`;
    });
  }, 1500);
}

function renderAll(where) {
  where.innerHTML = "";
  hoteles.forEach((hotel) => {
    where.innerHTML += `
        <article class="w-[90%] h-[100%] flex flex-col items-center justify-center animate-pulse">
          <div
          class="flex items-center justify-center w-full h-60 bg-gray-300 dark:bg-slate-600 rounded-2xl">
          <svg
            class="w-10 h-10 text-gray-200 dark:bg-slate-500"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 18">
            <path
              d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
          </svg>
        </div>
          <div class="w-[90%] flex justify-between items-center mt-2">
            <div class="h-4 w-[50%] bg-gray-200 dark:bg-slate-500 rounded-xl">
            </div>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-5 text-gray-300 dark:text-slate-600 fill-current">
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd" />
              </svg>
            </div>
          </div>
          <div class="w-[90%] h-5 bg-gray-300 dark:bg-slate-600 rounded-xl mt-2"></div>
        </article>`;
  });
  setTimeout(() => {
    where.innerHTML = "";
    hoteles.forEach((hotel) => {
      where.innerHTML += `
      <article class="w-[90%] flex flex-col items-center justify-center overflow-hidden transform transition-transform duration-400 hover:scale-102">
          <div class="rounded-2xl overflow-hidden w-full h-50 md:h-60">
            <img
              src="${hotel.photo}"
              alt="Hotel Image"
              class="object-cover w-full h-full transform transition-transform duration-800 hover:scale-125 active:scale-170" />
            </div>
          <div class="w-[90%] flex justify-between items-center mt-2">
            <!-- superHost, type, beds  -->
            <div class="flex items-center gap-1 text-xs text-gray-500 xl:text-sm">
              ${
                hotel.superHost
                  ? `<div
                class="h-6 w-22 border rounded-xl flex items-center justify-center text-gray-600 dark:text-slate-900 dark:bg-slate-600 dark:font-bold xl:w-25">
                SUPERHOST
              </div>`
                  : ""
              }
              <div>${hotel.type}</div>
              <span>.</span>
              <div>${
                hotel.beds == null
                  ? `unspecified`
                  : `${hotel.beds > 1 ? `${hotel.beds} beds` : `${hotel.beds} bed`}`
              }</div>
            </div>
            <!-- rating -->
            <div class="flex items-center gap-1 text-sm text-gray-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                class="size-4 text-[#eb5757] fill-current hover:animate-spin">
                <path
                  fill-rule="evenodd"
                  d="M8 1.75a.75.75 0 0 1 .692.462l1.41 3.393 3.664.293a.75.75 0 0 1 .428 1.317l-2.791 2.39.853 3.575a.75.75 0 0 1-1.12.814L7.998 12.08l-3.135 1.915a.75.75 0 0 1-1.12-.814l.852-3.574-2.79-2.39a.75.75 0 0 1 .427-1.318l3.663-.293 1.41-3.393A.75.75 0 0 1 8 1.75Z"
                  clip-rule="evenodd" />
              </svg>
              <span class="font-light dark:text-slate-200">${hotel.rating}</span>
            </div>
          </div>
          <!-- Title -->
          <h3 class="w-[90%] text-sm my-2 font-medium lg:text-lg">
            ${hotel.title}
          </h3>
        </article>`;
    });
  }, 1500);
}

//SHOW MODAL
const barraDeBusqueda = document.querySelector("#barraDeBusqueda");
const modalBusqueda = document.querySelector("#modalBusqueda");
const modal = document.querySelector("#modal");

function showModal() {
  barraDeBusqueda.addEventListener("click", function (e) {
    e.stopPropagation();
    modalBusqueda.classList.add("flex");
    modalBusqueda.classList.remove("hidden");

    document.addEventListener("click", function (a) {
      if (!modal.contains(a.target) && modalBusqueda.classList.contains("flex")) {
        modalBusqueda.classList.add("hidden");
        modalBusqueda.classList.remove("flex");
      }
    });
  });
}

function hideModal() {
  modalBusqueda.classList.add("hidden");
  modalBusqueda.classList.remove("flex");
}

//INPUTS Guests
const guests = document.querySelector("#guests");
const guestsForm = document.querySelector("#guestsForm");
const btnLessGuestAdults = document.querySelector("#btnLessGuestAdults");
const btnPlusGuestAdults = document.querySelector("#btnPlusGuestAdults");
const btnLessGuestChildren = document.querySelector("#btnLessGuestChildren");
const btnPlusGuestChildren = document.querySelector("#btnPlusGuestChildren");
const adults = document.querySelector("#adults");
const children = document.querySelector("#children");
const guestsOnDisplay = document.querySelector("#guestsOnDisplay");
const guestsOnMainDisplay = document.querySelector("#guestsOnMainDisplay");

let adultos = 0;
let niños = 0;

function counterAdults() {
  btnLessGuestAdults.addEventListener("click", function (e) {
    if (adultos > 0) {
      adultos--;
      adults.innerHTML = adultos;
      showGuestsInInput();
    }
  });
  btnPlusGuestAdults.addEventListener("click", function (e) {
    adultos++;
    adults.innerHTML = adultos;
    showGuestsInInput();
  });
}
function counterChildrens() {
  btnLessGuestChildren.addEventListener("click", function (e) {
    if (niños > 0) {
      niños--;
      children.innerHTML = niños;
      showGuestsInInput();
    }
  });
  btnPlusGuestChildren.addEventListener("click", function (e) {
    niños++;
    children.innerHTML = niños;
    showGuestsInInput();
  });
}
let guestTot = 0;
function showGuestsInInput() {
  let rta = adultos + niños;
  if (rta == 0) {
    guestsOnDisplay.innerHTML = `Add guests`;
    guestsOnMainDisplay.innerHTML = `Add guests`;
    guestsOnMainDisplay.classList.add("text-gray-300", "dark:text-slate-500");
    guestsOnMainDisplay.classList.remove("text-gray-800", "dark:text-slate-300");
  } else {
    guestsOnDisplay.innerHTML = `${rta} guests`;
    guestsOnMainDisplay.innerHTML = `${rta} guests`;
    guestsOnMainDisplay.classList.add("text-gray-800", "dark:text-slate-300");
    guestsOnMainDisplay.classList.remove("text-gray-300", "dark:text-slate-500");
  }
  guestTot = rta;
}

function gueToFilter() {
  return guestTot;
}

function inputGuests() {
  guests.addEventListener("click", function (e) {
    e.stopPropagation();
    guestsForm.classList.add("flex");
    guests.classList.add("md:border", "md:border-black", "md:rounded-xl", "md:dark:border-white");
    enterLocation.classList.remove(
      "md:border",
      "md:border-black",
      "md:rounded-xl",
      "md:dark:border-white"
    );
    guestsForm.classList.remove("hidden");

    document.addEventListener("click", function (a) {
      if (!guestsForm.contains(a.target) && guestsForm.classList.contains("flex")) {
        guestsForm.classList.add("hidden");
        guestsForm.classList.remove("flex");
        guests.classList.remove(
          "md:border",
          "md:border-black",
          "md:rounded-xl",
          "md:dark:border-white"
        );
      }
    });
  });
}

///////////////////////////////////////////////////////////////////
//INPUTS Location

const searcher = document.querySelector("#searcher");
const suggestions = document.getElementById("suggestions");
const locationOnMainDisplay = document.querySelector("#locationOnMainDisplay");
const enterLocation = document.querySelector("#enterLocation");

let cityToFilter = "";
let countryToFilter = "";
let guestsToFilter = gueToFilter();

enterLocation.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent bubbling to body
  enterLocation.classList.add(
    "md:border",
    "md:border-black",
    "md:rounded-xl",
    "md:dark:border-white"
  );
  guests.classList.remove("md:border", "md:border-black", "md:rounded-xl", "md:dark:border-white");
  guestsForm.classList.add("hidden");
  guestsForm.classList.remove("flex");
});
document.addEventListener("click", () => {
  enterLocation.classList.remove(
    "md:border",
    "md:border-black",
    "md:rounded-xl",
    "md:dark:border-white"
  );
});

searcher.addEventListener("input", function () {
  const texto = searcher.value.toLowerCase();
  suggestions.innerHTML = "";

  if (texto === "") {
    suggestions.classList.add("hidden");
    return;
  }

  const coincidencias = hoteles.filter((hotel) => hotel.city.toLowerCase().includes(texto));

  if (coincidencias.length > 0) {
    suggestions.classList.remove("hidden");
    suggestions.classList.add("flex");

    coincidencias.forEach((hotel) => {
      const div = document.createElement("div");
      div.className = "flex gap-1 text-xs text-gray-500 dark:text-slate-300 cursor-pointer";

      div.innerHTML = `
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 16 16"
        fill="currentColor"
        class="size-4 text-gray-600 dark:text-slate-400 fill-current">
        <path
            fill-rule="evenodd"
            d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
            clip-rule="evenodd" />
      </svg>
      <p>${hotel.city}, ${hotel.country}</p>
      `;

      div.addEventListener("click", () => {
        searcher.value = `${hotel.city}, ${hotel.country}`;
        suggestions.classList.add("hidden");
        suggestions.classList.remove("flex");
        cityToFilter = `${hotel.city}`;
        countryToFilter = `${hotel.country}`;
        showLocationOnSerchBar();
      });

      suggestions.appendChild(div);
    });
  } else {
    suggestions.classList.add("hidden");
    suggestions.classList.remove("flex");
  }
});

function showLocationOnSerchBar() {
  locationOnMainDisplay.innerHTML = "";
  if (searcher.value == "") {
    locationOnMainDisplay.innerHTML = `Add location`;
    locationOnMainDisplay.classList.add("text-gray-300", "dark:text-slate-500");
    locationOnMainDisplay.classList.remove("text-gray-800", "dark:text-slate-300");
  } else {
    locationOnMainDisplay.innerHTML = `${cityToFilter}, ${countryToFilter}`;
    locationOnMainDisplay.classList.add("text-gray-800", "dark:text-slate-300");
    locationOnMainDisplay.classList.remove("text-gray-300", "dark:text-slate-500");
  }
}

//SEARCH Btn => SHOW FILTERED

const articles = document.querySelector("#articles");
const btnSearch1 = document.querySelector("#btnSearch1");
const btnSearch2 = document.querySelector("#btnSearch2");
const numberOfCards = document.querySelector("#numberOfCards");
let numOfCards = 0;

function searchBtn() {
  btnSearch1.addEventListener("click", function (e) {
    const hotelesBuscados = hoteles.filter((hotel) => {
      return (
        hotel.city === cityToFilter &&
        hotel.country === countryToFilter &&
        hotel.maxGuests >= guestTot
      );
    });
    articles.innerHTML = "";
    renderSkeletons(articles);
    renderCards(hotelesBuscados, articles);
    hideModal();
    numOfCards = hotelesBuscados.length;
    numberOfCards.innerHTML = `${numOfCards}+ stays`;
  });
  btnSearch2.addEventListener("click", function (e) {
    const hotelesBuscados = hoteles.filter((hotel) => {
      return (
        hotel.city.toLowerCase() === cityToFilter.toLowerCase() &&
        hotel.country.toLowerCase() === countryToFilter.toLowerCase() &&
        hotel.maxGuests >= guestTot
      );
    });

    console.log(hotelesBuscados);
    articles.innerHTML = "";
    renderSkeletons(articles);
    renderCards(hotelesBuscados, articles);
    hideModal();
    numOfCards = hotelesBuscados.length;
    numberOfCards.innerHTML = `${numOfCards}+ stays`;
  });
}

export {
  renderAll,
  showModal,
  hideModal,
  inputGuests,
  counterAdults,
  counterChildrens,
  showGuestsInInput,
  searchBtn,
  gueToFilter,
};

