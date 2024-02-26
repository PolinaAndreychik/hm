const Toy = require('./toy');

class Ball extends Toy {
    constructor(toyName ,toyCost, toySize, ageAppropriate, ballColour) {
        super(toyName, toyCost, toySize, ageAppropriate);
        this.ballColour = ballColour;

    }
}
module.exports = Ball;
