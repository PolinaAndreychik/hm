const Toy = require('./toy');

class Car extends Toy {
    constructor(toyName ,toyCost, toySize, carMadeOutOf, ageAppropriate, carClass) {
        super(toyName, toyCost, toySize, ageAppropriate);
        this.carMadeOutOf = carMadeOutOf ;
        this.carClass = carClass;
    }
}
module.exports = Car;