// plant.js

function Plant(index) {
    var baseName = "seedling";
    var className = baseName + index;

    this.getIndex = function() {
        return index;
    };

    this.getClassName = function() {
        return "seedling" + index;
    };
}
