const playroom = require('./PlayRoom');
const Doll = require('./doll');
const Car = require('./car');
const Ball = require('./ball');

const doll1 = new Doll(`doll`,10, `medium`, `blue`, 1, `cloth`)
const doll2 = new Doll(`doll`, 15, `big`, `green`, 2,`plastic`)
const doll3 = new Doll(`doll`, 8, `small`, `yellow`, 0, `cloth`)

const car1 = new Car(`car`, 20, `big`, `plastic`,3, `tractor`)
const car2 = new Car(`car`, 15, `small`, `metal`, 1,`passenger car`)
const car3 = new Car(`car`, 10, `medium`, `plastic`, 2, `bike`)

const ball1 = new Ball(`ball`, 5, `small`, 0, `purple`)
const ball2 = new Ball(`ball`, 7, `medium`, 1, `red`)
const ball3 = new Ball(`ball`, 9, `big`, 3, `blue`)

playroom.addToy(doll1)
playroom.addToy(doll2)
playroom.addToy(doll3)

playroom.addToy(car1)
playroom.addToy(car2)
playroom.addToy(car3)

playroom.addToy(ball1)
playroom.addToy(ball2)
playroom.addToy(ball3)

// console.log(playroom.filterByAgeAndCostAndSize())
// console.log(playroom.filterByNameAndCost())
// console.log(playroom.filterByAgeAndMaterial())
//
// console.log(playroom.filterByAgeAppropriate())
// console.log(playroom.filterBySize())
// console.log(playroom.filterByCost())
// console.log(playroom.filterByToyName())
// console.log(playroom.filterByColour())

// console.log(playroom.filterByDollColour())
// console.log(playroom.filterByDollMadeOutOf())
//
// console.log(playroom.filterByCarClass())
// console.log(playroom.filterByCarMadeOutOf())
//
// console.log(playroom.filterByBallColour())






