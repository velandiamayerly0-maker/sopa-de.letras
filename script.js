const SIZE = 25;
const grid = document.getElementById("grid");

// Crear el tablero
for (let i = 0; i < SIZE * SIZE; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.dataset.index = i;
  grid.appendChild(cell);
}

let playerPos = 0;
let targetPos = SIZE * SIZE - 1;

function render() {
  document.querySelectorAll(".cell").forEach((c, i) => {
    c.classList.remove("player", "target");
    if (i === playerPos) c.classList.add("player");
    if (i === targetPos) c.classList.add("target");
  });
}

// Click para mover
document.querySelectorAll(".cell").forEach((cell, i) => {
  cell.addEventListener("click", () => {
    playerPos = i;
    render();
  });
});

// Movimiento con teclado (PC)
document.addEventListener("keydown", (e) => {
  switch (e.key) {
    case "ArrowUp":
      if (playerPos >= SIZE) playerPos -= SIZE;
      break;
    case "ArrowDown":
      if (playerPos < SIZE * SIZE - SIZE) playerPos += SIZE;
      break;
    case "ArrowLeft":
      if (playerPos % SIZE !== 0) playerPos -= 1;
      break;
    case "ArrowRight":
      if (playerPos % SIZE !== SIZE - 1) playerPos += 1;
      break;
  }
  render();
});

render();
