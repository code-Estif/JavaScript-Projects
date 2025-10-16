const grid = document.getElementById("grid");
const colorPicker = document.getElementById("colorPicker");
const randomBtn = document.getElementById("randomBtn");
const clearBtn = document.getElementById("clearBtn");

const gridSize = 16;
let currentColor = colorPicker.value;

// create grid dynamically
function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.addEventListener("click", () => colorCell(cell));
    grid.appendChild(cell);
  }
}

function colorCell(cell) {
  cell.style.background = currentColor;
}

// random color generator (Math + string)
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

// buttons
randomBtn.addEventListener("click", () => {
  currentColor = randomColor();
  colorPicker.value = rgbToHex(currentColor);
});

clearBtn.addEventListener("click", () => {
  document.querySelectorAll(".cell").forEach(c => c.style.background = "#e0e0e0");
});

colorPicker.addEventListener("input", e => {
  currentColor = e.target.value;
});

// rgb → hex converter
function rgbToHex(rgb) {
  const [r,g,b] = rgb.match(/\d+/g).map(Number);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

createGrid();
