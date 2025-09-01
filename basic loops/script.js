document.getElementById("generate").addEventListener("click", () => {
  let start = Number(document.getElementById("start").value);
  let end = Number(document.getElementById("end").value);

  // ----- sum -----
  let sum = 0;
  for (let k = start; k <= end; k++) {
    sum += k;
  }
  document.getElementById("sumOutput").textContent = "Total = " + sum;
});
