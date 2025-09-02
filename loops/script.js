document.getElementById("generateBtn").addEventListener("click", function() {
  let num = Number(document.getElementById("numberInput").value);
  let output = document.getElementById("output");
  output.innerHTML = ""; 

  if (!num) {
    output.innerHTML = "<p>Please enter a valid number.</p>";
    return;
  }


  for (let i = 1; i <= 10; i++) {
    output.innerHTML += `${num} × ${i} = ${num * i}<br>`;
  }
});
