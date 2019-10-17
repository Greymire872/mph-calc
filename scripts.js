// MPH Calculator will take the distance and time a car travelled to calculate the miles per hour.

/**
 * Write some pseudo code steps here.
 * Use those steps as your `commit` messages (and delete them from here as you complete a step.)
 */

const form = document.querySelector("form");
const distance = document.querySelector("distance");
const time = document.querySelector("#time");
const output = document.querySelector("output");

function mph {return a / b}

form.addEventListener("submit", function(event) {
  event.preventDefault();
  output.textContent = mph(distance.value, time.value) + " miles per hour";
});
