function calculate() {
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let op = document.getElementById("operator").value.trim();
  let res;

  // Validate input
  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("result").textContent = "❌ Please enter valid numbers!";
    return;
  }

  // Calculator logic using switch
  switch(op) {
    case "+":
      res = n1 + n2;
      break;
    case "-":
      res = n1 - n2;
      break;
    case "*":
      res = n1 * n2;
      break;
    case "/":
      if (n2 === 0) {
        res = "❌ Cannot divide by zero!";
      } else {
        res = n1 / n2;
      }
      break;
    case "%":
      if (n2 === 0) {
        res = "❌ Cannot modulo by zero!";
      } else {
        res = n1 % n2;
      }
      break;
    default:
      res = "❌ Invalid operator! Use +, -, *, /, or %";
  }

  // Show result
  document.getElementById("result").textContent = `Result: ${res}`;
}
