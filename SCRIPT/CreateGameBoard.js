const board = document.getElementById("game-board");

for (let i = 0; i < 200; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    document.getElementById("game-board").appendChild(cell);
}