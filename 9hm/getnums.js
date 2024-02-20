// 2
function random15 (min,max)  {
    return number = Math.floor(Math.random()*(max-min)+ min)
}
random15(1,6)
// console.log(random15(1,6))
function random106 (min,max)  {
    return number1 = Math.floor(Math.random()*(max-min)+ min)
}
random106(6,11)
// console.log(random106(6,11))
function getNum(num, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num)
        }, timeout)
    })
}
getNum(number,3000)
getNum(number1,5000)

async function square() {
    console.log(await getNum(number,3000) * await getNum(number,3000));
}
square()

async function addition() {
    console.log(await getNum(number,3000) + await getNum(number1,5000));
}
addition()