// Function Declaration
function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Function Expression
const fahrenheitToCelsius = function(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
};

function convert() {
  let temp = Number(document.getElementById("temp").value);
  let type = document.getElementById("type").value;
  let result;

  if (isNaN(temp)) {
    document.getElementById("result").textContent = "❌ Please enter a valid number!";
    return;
  }

  if (type === "CtoF") {
    result = celsiusToFahrenheit(temp);
    document.getElementById("result").textContent = `${temp}°C = ${result.toFixed(2)}°F`;
  } else if (type === "FtoC") {
    result = fahrenheitToCelsius(temp);
    document.getElementById("result").textContent = `${temp}°F = ${result.toFixed(2)}°C`;
  }
}
