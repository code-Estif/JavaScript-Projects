let num1 = Number(prompt("Enter number"));
let num2 = Number(prompt("Enter number"));
let oprator = prompt("+","-","*","/","%","**");
let result;

if (oprator === "+") {
  alert(num1 + num2);
} else if (oprator === "-") {
  alert(num1 - num2);
} else if (oprator === "*") {
  alert(num1 * num2);
} else if (oprator === "/") {
  alert(num1 / num2);
} else if (oprator === "%") {
  alert(num1 % num2);
} else if (oprator === "**") {
  alert(num1**num2)
} else if (oprator === '' && oprator === null) {
  alert("wrong oprator");
}
if (result !==undefined) {
  alert(`Result:  + ${result}`);
}