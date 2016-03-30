// plant.js

function Plant(index) {
    var baseName = "seedling";
    var className = baseName + index;

    this.getBaseName = function() {
        return baseName;
    };

    this.getIndex = function() {
        return index;
    };

    this.getClassName = function() {
        return "seedling" + index;
    };
}