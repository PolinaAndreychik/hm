const playroom = require('./PlayRoom');
const Doll = require('./doll');
const Car = require('./car');
const Ball = require('./ball');

const doll1 = new Doll(`doll`,10, `medium`, `blue`, 1, `cloth`)
const doll2 = new Doll(`doll`, 15, `medium`, `green`, 2,`plastic`)
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

console.log(playroom.filterByMaterial(`metal`).filterByToyName(`car`).filterBySize(`small`))

console.log(playroom.filterBySize(`small`))
console.log(playroom.filterByToyName(`ball`))
console.log(playroom.filterByColour(`green`))
console.log(playroom.filterByCarClass(`bike`))
console.log(playroom.filterToysByAgeRange(5,1))
console.log(playroom.filterToysByCostRange(5,15))
console.log(playroom.sortByAge())
console.log(playroom.sortByCost())





