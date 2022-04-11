"use strict";

const menu_btn = document.querySelector("#menu-btn");
const sidebar = document.querySelector("#sidebar");
const container = document.querySelector(".my-container");
let countries;
const countriesList = document.getElementById("countries");

menu_btn.addEventListener("click", () => {
  sidebar.classList.toggle("active-nav");
  container.classList.toggle("active-cont");
});

const initialize = function(countriesData) {
  countries = countriesData;
  let options = "";
  // for(let i= 0; i<countries.length;i++){
  //   options+= ` <option value="${countries[i].alpha3Code}">${countries[i].name}</option>`;
  // }
  countries.forEach(
    (country) =>
      (options += ` <option value="${country.alpha3Code}">${country.name}</option>`)
  );
  countriesList.innerHTML = options;
}

fetch("https://restcountries.com/v2/region/africa")
  .then((res) => res.json())

  .then((data) => initialize(data))
  .catch((err) => console.log("Error", err));


const displayCountryInfo = function (countryByAlPha3Code) {
  const countryData = countries.find(
    (country) => country.alpha3Code === countryByAlPha3Code
  );

  document.getElementById("capital").innerHTML = countryData.capital;
  document.getElementById("currency").innerHTML = countryData.currencies
    .filter((c) => c.name)
    .map((c) => `${c.name}(${c.code})  (${c.symbol})`)
    .join(", ");
  document.getElementById(
    "dialing-code"
  ).innerHTML = `+${countryData.callingCodes[0]}`;
  document.getElementById("population").innerHTML =
    countryData.population.toLocaleString("en-US");
  document.getElementById("region").innerHTML = countryData.region;
  document.getElementById("subregion").innerHTML = countryData.subregion;
  document.querySelector("#flag-container img").src = countryData.flag;
  document.querySelector(
    "#flag-container img"
  ).alt = `Flag of ${countryData.name}`;
};

countriesList.addEventListener("change", (event) =>
  displayCountryInfo(event.target.value)
);
