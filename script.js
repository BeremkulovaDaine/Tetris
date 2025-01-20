let cell = document.createElement("div");
cell.classList.add("cell");

let tetris = document.getElementById("tetris");

tetrisWidth = 10;
tetrisHeight = 15;
cellWidth = tetris.offsetWidth / tetrisWidth;
cell.style.width = cellWidth  + "px";
cell.style.height = cellWidth  + "px";
cell.style.position = "absolute";

tetris.style.height = cellWidth * (tetrisHeight) + "px !important"

for(let j = 0; j < tetrisHeight; j++){
  for(let i = 0; i < tetrisWidth; i++){
    cellClone = cell.cloneNode(true);
    cellClone.id = "y"+j + "x"+i;
    cellClone.style.top = tetris.offsetTop + cellWidth * j + "px";
    cellClone.style.left = tetris.offsetLeft + cellWidth * i + "px";
    tetris.appendChild(cellClone);
  }
}

function turnOnCell(y, x){
  let crntCell = document.getElementById("y"+y+"x"+x);
  crntCell.style.backgroundColor = "#11bd6a";
}
function turnOffCell(y, x){
  let crntCell = document.getElementById("y"+y+"x"+x);
  crntCell.style.backgroundColor = "white";
}

initialCoords = []
index = 0;
function setFigure(){
  //let figure = ["square", "t", "s", "L", "palka"];
  initialCoords = [
    [[-2, 4], [-2, 5], [-1, 4], [-1, 5]],
    [[-2, 4], [-2, 5], [-2, 6], [-1, 5]],
    [[-1, 4], [-1, 5], [-2, 5], [-2, 6]],
    [[-2, 4], [-2, 5], [-2, 6], [-1, 4]],
    [[-2, 4], [-2, 5], [-2, 6], [-2, 7]],
  ];
  index = Math.floor(Math.random() * 5);
}

function draw(){
  for (var i = 0; i < tetrisHeight; i++) {
    for (var j = 0; j < tetrisWidth; j++) {
      turnOffCell(i, j);
    }
  }

  for (var i = 0; i < 4; i++) {
    cellY = initialCoords[index][i][0];
    cellX = initialCoords[index][i][1];
    if(cellY >= 0)
      turnOnCell(cellY, cellX);
  }  
}
function move(){
  for (var i = 0; i < 4; i++) {
    initialCoords[index][i][0]++;
  }  
}

async function game(){
  setFigure();
  let counterMove = 0;
  while(counterMove < tetrisHeight){
    move();
    draw();
    counterMove++;
    await new Promise(r => setTimeout(r, 50));
  }

}

game();