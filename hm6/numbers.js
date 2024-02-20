
let number = 15

console.log(number)
let parts = 4
let ar = []
for (let i = 0; i < parts - 1; i++){
    let Min = 1
    let Max = number - parts + i + 1
    // let Ran = parseFloat((Math.random() * (Max - Min) + Min).toFixed(2))
    let Ran = Math.floor(Math.random() * (Max - Min) + Min)
    number = number - Ran
    ar.push(Ran)
}

// ar.push(parseFloat(number.toFixed(2)))
ar.push(number)
console.log(parts)
console.log(ar)

            // 3

let array = [1,2,3,4,5,6]
console.log(array)
array.reverse()
console.log(array)
            // 4

let array1 = [8,98,101,125,45,75]
let max = array1.reduce((acc, current) => Math.max(acc, current));
console.log(`max is ${max}`);
            // 5
counter1 = 0
counter2 = 0
let n1 = 3487
let n2 = 3794
let ar1= Array.from(n1.toString())
let ar2= Array.from(n2.toString())
console.log(ar1)
console.log(ar2)
for (let i = 0; i < ar1.length; i++){
    if (ar1[i] === ar2[i] && i < ar2.length){
        counter1++
    }
    for (let j = 0; j < ar2.length; j++){
        if (ar1[i] === ar2[j]){
            counter2++

        }
    }
}
console.log(counter1)
console.log(counter2)

