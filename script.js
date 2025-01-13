let field=document.getElementsByClassName("field")[0];
let cell = document.createElement("div");
let width = cell.style.width = field.offsetWidth / 10;
let height = width; 
cell.style.width = width + "px"; 
cell.style.height = height; 
cell.style.backgroundColor = "white";
cell.style.border = "1 px solid black";

for (let i=0; i<4; i++){
    field.appendChild(cell)
    let CopyCell = cell.cloneNode(true);
}
