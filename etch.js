const container = document.getElementById("container");
let columns = document.getElementsByClassName("gridColumn");
let cells = document.getElementsByClassName("cell");
let drawn = document.getElementsByClassName("drawn");

makeGrid(16, 16);

function makeGrid(x, y) {
    makeColumns(x);
    makeRows(y);
};

function removeGrid() {
    container.replaceChildren();
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
            newCell.addEventListener("mouseover", () => {
                console.log("test");
                newCell.className = "drawn";
            });
        };
    };
};

const sizeSelect = document.getElementById("sizeSelect");
sizeSelect.addEventListener("click", () => {
        let x = prompt("Please select your desired grid size.");
        let y = x;
        if (x > 100||y > 100) {
            alert("Please input a number less than or equal to 100.");
        } else {
            removeGrid();
            makeGrid(x, y);
        }; 
});

