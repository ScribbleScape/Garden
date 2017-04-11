// garden.js

function iWouldLikeToAbsolutelyPositionThisImagePlease(id) {
    div = document.createElement("div");
    div.id = id;
}

function getCellByCoordinates(x, y) {
    return "cell" + "_" + str(x) + "_" + str(y);
}

function getImageByCoordinates(x, y) {
    return "img" + "_" + str(x) + "_" + str(y);
}

function plantSeedling() {
    var cellId = this.id;
    img = document.getElementById(cellId).firstChild.firstChild;

    img.className = species.getCurrentSpecies();
    img.className += " plant";
}
