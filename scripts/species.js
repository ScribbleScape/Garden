
function Species(numberOfSpecies) {
    var currentSpecies = "";
    var plants = [];

    for (var i=1; i<=numberOfSpecies; i++) {
        var p = new Plant(i);
        plants.push(p);
    }

    currentSpecies = plants[0].getClassName();

    this.getPlants = function() {
        return plants;
    };

    this.getNumberOfSpecies = function() {
        return numberOfSpecies;
    };

    this.getCurrentSpecies = function() {
        return currentSpecies;
    };

    this.setCurrentSpecies = function(species) {
        currentSpecies = species;
    };

    this._getIndexFromClassName = function(className) {
        return plants[0].getIndex();
    };
}
