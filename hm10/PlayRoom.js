
class PlayRoom {
    constructor(toysList) {
        this.roomWithToys = toysList;
    }
    addToy(toy) {
        this.roomWithToys.push(toy);
    }
    compareByCost(toyOne, toyTwo) {
        return toyOne.toyCost - toyTwo.toyCost;
    }
    sortByCost() {
      return this.roomWithToys = this.roomWithToys.sort(this.compareByCost)

    }
    compareByAge(ageOne, ageTwo) {
        return ageOne.ageAppropriate - ageTwo.ageAppropriate;
    }
    sortByAge() {
        return this.roomWithToys = this.roomWithToys.sort(this.compareByAge)

    }
    filterToysByAgeRange(upperBound, lowerBound = 0) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.ageAppropriate >= lowerBound && toy.ageAppropriate <= upperBound))
    }
    filterToysByCostRange(upperCost, lowerCost = 0) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.toyCost >= lowerCost && toy.toyCost <= upperCost))
    }
    filterByMaterial(material) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.dollMadeOutOf === material|| toy.carMadeOutOf === material));
    }

    filterByColour(colour) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.dollColour === colour || toy.ballColour === colour));
    }

    filterByToyName(toyName) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.toyName === toyName));
    }
    filterBySize(size) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.toySize === size));
    }
    filterByCarClass(carClass) {
        return new PlayRoom(this.roomWithToys.filter(toy => toy.carClass === carClass));
    }
}
module.exports = new PlayRoom([]);