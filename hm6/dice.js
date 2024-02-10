
let gam1 = 0
let gam2 = 0
let allrolls = 3

for (let i = 0 ; i < allrolls; i++) {
    let roll1 = Math.round(Math.random()* 5+1)
    let roll2 = Math.round(Math.random()* 5+1)
    gam1 = gam1 + roll1
    gam2 = gam2 + roll2

    console.log(`round ${i+1}`)
    console.log(`first gambler rolled ${roll1}`)
    console.log(`second gambler rolled ${roll2}`)
}
console.log(`And the winner is.....`)

if(gam1 > gam2) {
    console.log(`First gambler with the score ${gam1}!!!`)
} else if(gam1 < gam2) {
    console.log(`Second gambler with the score ${gam2}!!!`)
} else {
    console.log('Draw...')
}


