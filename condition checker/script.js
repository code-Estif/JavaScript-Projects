let ageInput = document.getElementById("age");
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");
let btn = document.getElementById("checkBtn");
let resultSpan = document.getElementById("result");

btn.addEventListener("click", () => {
  let age = Number(ageInput.value);
  let height = Number(heightInput.value);
  let weight = Number(weightInput.value);

  let result;

  if (!age || !height || !weight) {
    result = "❌ Missing information. Disallowed!";
  } else if (age >= 18 && height >= 150 && weight >= 50) {
    result = "✅ Allowed for full training!";
  } else if (age >= 18) {
    result = "⚠️ Allowed only for small training.";
  } else {
    result = "❌ Disallowed. Too young!";
  }

  resultSpan.innerText = result;
});
