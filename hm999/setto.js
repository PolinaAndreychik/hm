const prom1 = new Promise((resolve, reject) => {
    let time = Math.floor(Math.random()*(6-1)+ 1)
    setTimeout(() => {
        resolve(1)
    }, time * 1000)
    })
    .then((result) => {
        // console.log(result)
        return result;
    })
    .catch((err) => {
        console.log(err)
        return err;
    })

const prom2 = new Promise((resolve, reject) => {
    let time = Math.floor(Math.random()*(6-1)+ 1)
    setTimeout(() => {
        resolve(2)
    }, time * 1000)
    })
    .then((result) => {
        // console.log(result)
        return result;
    })
    .catch((err) => {
        console.log(err)
        return err;
    })

const prom3 = new Promise((resolve, reject) => {
    let time = Math.floor(Math.random()*(6-1)+ 1)
    setTimeout(() => {
        resolve(3)
    }, time * 1000)
    })
    .then((result) => {
        // console.log(result)
        return result;
    })
    .catch((err) => {
        console.log(err)
        return err;
    })

Promise.race([prom1,prom2,prom3])
    .then((winner) => {
        console.log(winner)
    })
    .catch((err) => {
        console.log(err)
    })