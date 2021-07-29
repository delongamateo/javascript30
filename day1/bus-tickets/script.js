// selecting needed elements
const input = document.querySelector(".age_input");
const calculate_button = document.querySelector(".calculate_button");
const display = document.querySelector(".price");

function calculate() {
  const regularPrice = 12;
  // logic calculating price based on age
  if (input.value < 6) {
    return (display.innerHTML = "Free");
  } else if (input.value >= 6 && input.value <= 15) {
    return (display.innerHTML = `${Math.floor(
      regularPrice - regularPrice * 0.35
    )}$`);
  } else if (input.value >= 16 && input.value <= 26) {
    return (display.innerHTML = `${Math.floor(
      regularPrice - regularPrice * 0.65
    )}$`);
  } else if (input.value >= 27 && input.value <= 64) {
    return (display.innerHTML = `${regularPrice}$`);
  } else {
    return (display.innerHTML = `${regularPrice / 2}$`);
  }
}

// add event listener on button
calculate_button.addEventListener("click", () => calculate());
