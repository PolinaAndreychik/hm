//1
function fibonacci(n,m) {
    let arr = [0, 1]
    for (let i = 0; i < (n + m) - 1; i++) {
        let a = arr[i] + arr[i + 1];
        arr.push(a)
    }
    let nm = []
    for (let i = 0; i < arr.length; i++) {
        if (i >= n && i < n+m) {
            nm.push(arr[i])
        }
    } return nm
}
let index = 7
let lengh = 3
let res = fibonacci(index,lengh)
console.log(res)


//2
function Adding (ar,str,sl) {
        let nstr = str.split(``)
        ar.splice(sl, 0, nstr)
        let flatarr = ar.flat(1)
        return flatarr
}
let array = [1,2,3,4,5]
let string = (`abc`)
let slice = 3
let res1 = Adding(array,string,slice)
console.log(res1)












