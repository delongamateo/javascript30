//selecting all elements
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const button = document.querySelector(".button");
const text = document.querySelector(".currentColor");
const wrapper = document.querySelector(".wrapper");

//function that will change bg color
const changeBgColor = () => {
  // logic to check if alue of red or green or blue is beetwene 0 nad 255
  if (red.value < 0 || red.value > 255) {
    return (text.innerHTML = "Please select numbers beetwene 0 and 255 ");
  } else if (green.value < 0 || green.value > 255) {
    return (text.innerHTML = "Please select numbers beetwene 0 and 255 ");
  } else if (blue.value < 0 || blue.value > 255) {
    return (text.innerHTML = "Please select numbers beetwene 0 and 255 ");
  } else {
    return (
      // setting text of color and changing bg color of elemnet
      (text.innerHTML = `Background Color is: rgb(${red.value}, ${green.value}, ${blue.value})`),
      (wrapper.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value}`)
    );
  }
};

// on click of a button function changeBgColor will run
button.addEventListener("click", () => {
  changeBgColor();
});
