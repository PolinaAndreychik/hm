// 2
function getRandom15 (min,max)  {
    return number = Math.floor(Math.random()*(max-min)+ min)
}
getRandom15(1,6)
console.log(getRandom15(1,6))
function getRandom106 (min,max)  {
    return number1 = Math.floor(Math.random()*(max-min)+ min)
}
getRandom106(6,11)
console.log(getRandom106(6,11))
function getNum(num, timeout) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(num)
        }, timeout)
    })
}
let promise1 = getNum(number,3000)
let promise2 = getNum(number1,5000)

async function getSquare() {
    console.log(await promise1 * await promise1);
}
getSquare()

async function getAddition() {
    console.log(await promise1 + await promise2);
}
getAddition()