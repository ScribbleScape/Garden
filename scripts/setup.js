// setup.js

window.onload = function() {
    generateMenuTable();
    createTable();
};

var species = new Species(4);

function generateMenuTable() {

    var menuTable = document.getElementById("menuTable");
    var numberOfSeedlings = 4;
    var rowWidth = 2;
    var rowCounter = 0;
    var row = document.createElement("tr");
    var plants = species.getPlants();
    var plantsLength = plants.length;

    menuTable.appendChild(row);

    for (var i=0; i<plantsLength; i++) {
        var button = document.createElement("td");
        row.appendChild(button);
        button.className = "menuCell";
        button.id = "menuCell_" + i;
        if (i == 1) {
            button.className += " selected";
        }
        button.onclick = selectImage;
        var img = document.createElement("img");
        button.appendChild(img);
        img.className = plants[i].getClassName();
        rowCounter++;
        // create button for each seedling
        if (rowCounter >= rowWidth) {
            row = document.createElement("tr");
            menuTable.appendChild(row);
            rowCounter = 0;
        }
    }
}

function selectImage() {
    var cellId = this.id;
    img = document.getElementById(cellId).firstChild;
    species.setCurrentSpecies(img.className);
    plants = species.getPlants();
    var plantLength = plants.length;

    // add border to selected button
    for (var i=0; i<plantLength; i++) {
        var img = document.getElementById("menuCell_" + i);
        img.className = "menuCell";

        if (plants[i].getClassName() == species.getCurrentSpecies()) {
            img.className += " selected";
        }
    }
}

function createTable() {
    var cellWidth = 100;
    var cellHeight = 100;

    var width = window.innerWidth;    // returns height of browser viewport
    var height = window.innerHeight;     // returns width of browser viewport

    var numberOfCellsX = Math.floor(width / cellWidth);
    var numberOfCellsY = Math.floor(height / cellHeight);

    var table = getTable();

    for (var j = 0; j < numberOfCellsY; j++) {
        row = document.createElement("tr");
        row.id = "row" + j;
        table.appendChild(row);

        for (var i = 0; i < numberOfCellsX; i++) {
            cell = document.createElement("td");
            cell.id = "cell_" + String(i) + "_" + String(j);
            cell.className = "cell";
            cell.onclick = plantSeedling;

            // create hacky div
            div = document.createElement("div");
            div.id = "div_" + String(i) + "_" + String(j);
            div.className = "divCell";

            img = document.createElement("img");
            img.id = "img_" + String(i) + "_" + String(j);
            div.appendChild(img);
            cell.appendChild(div);
            row.appendChild(cell);
        }
    }
}

function getTable() {
    return document.getElementById("garden");
}
