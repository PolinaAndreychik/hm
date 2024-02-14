
function findday (start, end, day, dayofweek) {
    let sum = 0
    if(start.getDate()>day) {
        start.setMonth(start.getMonth()+1)
    }
    start.setDate(day)
    while(start < end) {
        if (start.getDay() === dayofweek) {
            sum++
        }
        start.setMonth(start.getMonth() + 1)
    }
    return sum
}
let t1 =new Date(2015, 0, 1)
let t2 =new Date()
t2.setMinutes(t2.getMinutes()-t2.getTimezoneOffset())
let day = 13
let dayofweek = 5
let sum = findday(t1,t2,day,dayofweek)
console.log(sum)
