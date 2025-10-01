# sopa-de.letras
[index.txt](https://github.com/user-attachments/files/22632724/index.txt)
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Juego Interactivo</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Juego Interactivo</h1>
    <div id="grid"></div>
    <p>Toca una celda para mover el jugador (azul) hacia el objetivo (rojo).</p>
  </div>
  <script src="script.js"></script>
</body>
</html>
[style.css](https://github.com/user-attachments/files/22632732/style.css)
body {
  font-family: Arial, sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
  background-color: #f4f4f9;
}

.container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

#grid {
  display: grid;
  grid-template-columns: repeat(25, 28px);
  grid-template-rows: repeat(25, 28px);
  gap: 1px;
  margin-bottom: 20px;
}

.cell {
  width: 28px;
  height: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ddd;
  background-color: white;
  font-size: 14px;
  cursor: pointer;
}

.cell.player {
  background-color: blue;
  color: white;
}

.cell.target {
  background-color: red;
  color: white;
}

@media (max-width: 1024px) {
  #grid {
    grid-template-columns: repeat(25, 24px);
    grid-template-rows: repeat(25, 24px);
  }
  .cell {
    width: 24px;
    height: 24px;
    font-size: 12px;
  }
}

@media (max-width: 700px) {
  #grid {
    grid-template-columns: repeat(25, 32px);
    grid-template-rows: repeat(25, 32px);
  }
  .cell {
    width: 32px;
    height: 32px;
    font-size: 16px;
  }
}
[script.js](https://github.com/user-attachments/files/22632736/script.js)
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
