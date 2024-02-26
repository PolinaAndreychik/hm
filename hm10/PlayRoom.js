
class PlayRoom {
    constructor() {
        this.roomWithToys = [];
    }

    addToy(toy) {
        this.roomWithToys.push(toy);
    }
    filterByNameAndCost(name,cost) {
        return this.roomWithToys.filter(toy => toy.toyName === name && toy.toyCost <= cost);
    }
    filterByAgeAndMaterial(age,material) {
        return this.roomWithToys.filter(toy => toy.ageAppropriate <= age && toy.carMadeOutOf === material || toy.dollMadeOutOf === material);
    }
    filterByAgeAndCostAndSize(age, cost, size) {
        return this.roomWithToys.filter(toy => toy.toySize === size && toy.toyCost <= cost && toy.ageAppropriate <= age );
    }
    filterByColour(colour) {
        return this.roomWithToys.filter(toy => toy.dollColour === colour|| toy.ballColour === colour);
    }
    filterByDollColour(dollColour) {
        return this.roomWithToys.filter(toy => toy.dollColour === dollColour);
    }
    filterByToyName(toyName) {
        return this.roomWithToys.filter(toy => toy.toyName === toyName);
    }
    filterBySize(size) {
        return this.roomWithToys.filter(toy => toy.toySize === size);
    }
    filterByCost(cost) {
        return this.roomWithToys.filter(toy => toy.toyCost <= cost);
    }
    filterByDollMadeOutOf(dollMadeOutOf) {
        return this.roomWithToys.filter(toy => toy.dollMadeOutOf === dollMadeOutOf);
    }

    filterByCarMadeOutOf(carMadeOutOf) {
        return this.roomWithToys.filter(toy => toy.carMadeOutOf === carMadeOutOf);
    }

    filterByCarClass(carClass) {
        return this.roomWithToys.filter(toy => toy.carClass === carClass);
    }

    filterByBallColour(ballColour) {
        return this.roomWithToys.filter(toy => toy.ballColour === ballColour);
    }

    filterByAgeAppropriate(ageAppropriate) {
        return this.roomWithToys.filter(toy => toy.ageAppropriate <= ageAppropriate);
    }
}
module.exports = new PlayRoom();