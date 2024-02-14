
function Sumcompare(s) {
    let ar1= s.split(`,`)
    let arr2= ar1.map(function(elem) {
        return Number.parseInt(elem);
    })
        let half1 = arr2.slice(0, arr2.length / 2)
        let half2 = arr2.slice(arr2.length / 2)
        let sum1 = half1.reduce((prev, curr) => prev + curr, 0)
        let sum2 = half2.reduce((prev, curr) => prev + curr, 0)
        return sum1 === sum2
}

let str = `1,2,3,4,5,6`
let res = Sumcompare(str)
if (res) {
    console.log(`equal`)
} else {
    console.log(`not equal`)
}

//3

let average = (arr) => {
    let sum = arr.reduce((prev, curr) => prev + curr, 0)
    return sum / l
}
let arr = [23,1,4,17,87]
let l = arr.length
console.log(average(arr)) //26.4