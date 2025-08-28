let num1 = Number(prompt("Enter number: "));
let num2 = Number(prompt("Enter Another number: "));
let oprator = prompt("+","-", "*", "/");

let result;
if (oprator === "+") {
    result = num1 + num2
} else if (oprator === "-"){
    result = num1 - num2
} else if (oprator === "*") {
    result = num1 * num2
} else if (oprator === "/") {
    result = num1 / num2
} else {
    alert("invalid oprator")
}

if  (result !==undefined) {
    alert("result: " + result)
}