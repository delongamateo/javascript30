// API url
const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

//fetching and storing API data in variable
fetch(endpoint)
  .then((blob) => blob.json())
  .then((data) => (cities = data));

// function to find matches when typing names
function findMatch(wordToMatch, cities) {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
}

// function for displaying matches
function displayMatches() {
  const matchArray = findMatch(this.value, cities);
  const html = matchArray
    .map((place) => {
      const regex = new RegExp(this.value, "gi");
      const cityName = place.city.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      const stateName = place.state.replace(
        regex,
        `<span class="hl">${this.value}</span>`
      );
      return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${numberWithCommas(
                  place.population
                )}</span>
            </li>
        `;
    })
    .join("");
  suggestions.innerHTML = html;
}

//adding commas to numbers
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// selecting needed elements
const searchInput = document.querySelector(".search");
const suggestions = document.querySelector(".suggestions");

// adding event listener
searchInput.addEventListener("change", displayMatches);
searchInput.addEventListener("keyup", displayMatches);
