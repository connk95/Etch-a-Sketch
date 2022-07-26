const container = document.getElementById("container");
let columns = document.getElementsByClassName("gridColumn");
const cells = document.getElementsByClassName("cell");

makeGrid(16, 16);

const sizeSelect = document.getElementById('sizeSelect');
console.log(sizeSelect);
sizeSelect.addEventListener('click', () => {
        console.log("test");
        let x = prompt("Please select your desired width.");
        let y = prompt("Please select your desired height.");
        makeGrid(x, y); 
});

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
            newCell.addEventListener("mouseover", () => {
                console.log("test");
                newCell.className = "drawn";
            });
        }
    };
};


