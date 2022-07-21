const container = document.getElementById("container");
let columns = document.getElementsByClassName("gridColumn");
const cells = document.getElementsByClassName("cell");
let cell;

function makeGrid(x, y) {
    makeColumns(x);
    makeRows(y);
};

function makeColumns(x) {
    for (i = 0; i < x; i++) {
        let column = document.createElement("div");
        container.appendChild(column).className = "gridColumn";
    };
};

function makeRows(y) {
    for (i = 0; i < columns.length; i++) {
        for (j = 0; j < y; j++) {
            let newCell = document.createElement("div");
            columns[j].appendChild(newCell).className = "cell";
        };
    };
};

makeGrid(16, 16);

for (i = 0 ; i < cells.length; i++) {
    cells[i].addEventListener("mouseover", () => {
        //cells.classList.add("drawn");
        cell.style.backgroundColor = "black";
        cell.style.borderColor = "black";
        container.appendChild(draw);
    }); 
 }

//const draw = document.getElementsByClassName(".cell");
//cells.addEventListener("mouseover", () => {
//    draw.classList.add("draw");
//    draw.style.backgroundColor = "black";
//    draw.style.borderColor = "black";
//    container.appendChild(draw);
//});

//document.getElementsByClassName("cell").onmouseover = function() { 
//    console.log("test");
//  }