window.onload = function() {
  createTable();
};

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

function iWouldLikeToAbsolutelyPositionThisImagePlease(id) {
    div = document.createElement("div");
    div.id = id;

}

// x is the column number
// y is the row number
function getCellByCoordinates(x, y) {
    return "cell" + "_" + str(x) + "_" + str(y);
}

function getImageByCoordinates(x, y) {
    return "img" + "_" + str(x) + "_" + str(y);
}

function plantSeedling() {
    var cellId = this.id;
    addImageToCellWithId(cellId);
}

function addImageToCellWithId(cellId) {
    img = document.getElementById(cellId).firstChild.firstChild;
    img.className = "seedling";
    img.className += " " + "plant";
}