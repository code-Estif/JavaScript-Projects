let usernameInput = document.getElementById("username");
let ageInput = document.getElementById("age");
let resultSpan = document.getElementById("result");
let checkBtn = document.getElementById("checkBtn");

checkBtn.addEventListener("click", () => {
  let name = usernameInput.value ?? "Guest"; // use ?? for default name
  let age = Number(ageInput.value);

  if (!usernameInput.value || !age) {
    resultSpan.innerText = "❌ Please fill all fields!";
    return;
  }

  // AND operator
  if (age >= 18 && name !== "Guest") {
    resultSpan.innerText = `✅ Access Granted! Welcome ${name}`;
  } 
  // OR operator
  else if (age < 18 || name === "Guest") {
    resultSpan.innerText = `🚫 Access Denied!`;
  } 
  else {
    resultSpan.innerText = "⚠️ Unknown condition!";
  }
});
