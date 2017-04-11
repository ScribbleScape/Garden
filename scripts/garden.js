// garden.js

function plantSeedling() {
    var cellId = this.id;
    img = document.getElementById(cellId).firstChild.firstChild;

    img.className = species.getCurrentSpecies();
    img.className += " plant";
}
