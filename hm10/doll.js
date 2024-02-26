const Toy = require('./toy');

class Doll extends Toy {
    constructor(toyName, toyCost, toySize, dollColour, ageAppropriate, dollMadeOutOf) {
        super(toyName, toyCost, toySize, ageAppropriate);
        this.dollColour = dollColour;
        this.dollMadeOutOf = dollMadeOutOf;
    }

}

module.exports = Doll;