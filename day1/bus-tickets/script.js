// selecting needed elements
const input = document.querySelector(".age_input");
const calculate_button = document.querySelector(".calculate_button");
const display = document.querySelector(".price");

function calculate() {
  const regularPrice = 12;
  // logic calculating price based on age
  // if age is below 6 ticket is free
  if (input.value < 6) {
    return (display.innerHTML = "Free");
  // if age is beetwene  6 and 15 you get 35% discount
  } else if (input.value >= 6 && input.value <= 15) {
    return (display.innerHTML = `${Math.floor(
      regularPrice - regularPrice * 0.35
    )}$`);
  // if age is beetwene  16 and 26 you get 65% discount
  } else if (input.value >= 16 && input.value <= 26) {
    return (display.innerHTML = `${Math.floor(
      regularPrice - regularPrice * 0.65
    )}$`);
  // if age is beetwene  27 and 64 you pay full price
  } else if (input.value >= 27 && input.value <= 64) {
    return (display.innerHTML = `${regularPrice}$`);
  }
  // if age is 65 and above you pay half price
  else {
    return (display.innerHTML = `${regularPrice / 2}$`);
  }
}

// add event listener on button
calculate_button.addEventListener("click", () => calculate());
