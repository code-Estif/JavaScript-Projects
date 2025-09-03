document.getElementById("generateBtn").addEventListener("click", () => {
  let char = document.getElementById("charInput").value || "*";
  let size = Number(document.getElementById("sizeInput").value) || 5;

  let squareOutput = "";
  let triangleOutput = "";

  // Square Pattern (for loop)
  for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
      row += char + " ";
    }
    squareOutput += row + "\n";
  }

  // Triangle Pattern (while loop)
  let i = 1;
  while (i <= size) {
    let row = "";
    let j = 1;
    while (j <= i) {
      row += char + " ";
      j++;
    }
    triangleOutput += row + "\n";
    i++;
  }

  document.getElementById("squareOutput").textContent = squareOutput;
  document.getElementById("triangleOutput").textContent = triangleOutput;
});
