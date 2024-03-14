// Array given to me with planets and their gravity value
var planets = [
  ["Pluto", 0.06],
  ["Neptune", 1.148],
  ["Uranus", 0.917],
  ["Saturn", 1.139],
  ["Jupiter", 2.64],
  ["Mars", 0.3895],
  ["Moon", 0.1655],
  ["Earth", 1],
  ["Venus", 0.9032],
  ["Mercury", 0.377],
  ["Sun", 27.9],
];

// Populate the dropdown element with the data found in the planets array.
const selectElement = document.getElementById("planets");

planets.forEach(([planet, weight]) => {
  // Create a new option element for each planet
  const optionElement = document.createElement("option");
  // Set the text content of the option to the planet name
  optionElement.textContent = planet;
  // Set the value attribute of the option to the planet name
  optionElement.value = planet;
  // Append the option to the dropdown menu
  selectElement.appendChild(optionElement);
});

// Return the correct weight
function calculateWeight(weight, gravity) {
  const result = gravity * weight;
  // Gave me the rounded number I needed
  return Math.round(result * 100) / 100; 
}

// Calculate weight event handler
function handleClickEvent() {
  // Get the user's weight input
  const userWeight = parseFloat(document.getElementById("user-weight").value);
  // Get the selected planet from the dropdown menu
  const planetName = selectElement.value;
  // Find the gravity value of the selected planet
  const gravity = planets.find((planet) => planet[0] === planetName)[1];
  // Calculate the weight on the selected planet using the calculateWeight function
  const result = calculateWeight(userWeight, gravity);
  // Display the result in the output element
  const outputElement = document.getElementById("output");
  outputElement.textContent = `If you were on ${planetName}, you would weigh ${result}lbs!`;
}

// Set the #calculate-button element's onclick method to use the handleClickEvent function.
document.getElementById("calculate-button").addEventListener("click", handleClickEvent);
