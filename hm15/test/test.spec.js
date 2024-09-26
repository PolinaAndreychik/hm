import { expect } from 'chai';
import {add, multiply, subtraction, divide, exponentiation, Calculator} from '../calculator.js';
let calculator = new Calculator()
describe(`Testing calculator adding`, function () {
    beforeEach(async () => {
        console.log('The result of adding is...')
    })
    it(`should return added positive number "11"`, async () => {
        const result = calculator.add(3, 5, 3);
        expect(result).to.equal(11)
    })
    it(`should return added negative number "-17"`, async () => {
        const result = calculator.add(-10, -7);
        expect(result).to.equal(-17)
    })
    it(`should return added decimal number "17.75"`, async () => {
        const result = calculator.add(10.5, 7.25);
        expect(result).to.equal(17.75)
    })
    it(`should return added different numbers "-8.27"`, async () => {
        const result = calculator.add(-10.22, 2.65, 8.3, -6, -3);
        expect(result).to.equal(-8.27)
    })
    // it(`should return added string "polina"`, async () => {
    //     const result = calculator.add(`po`, `li`, `na`);
    //     expect(result).to.equal(`polina`)
    // })
    it(`should return added boolean "2"`, async () => {
        const result = calculator.add(true, false, true);
        expect(result).to.equal(2)
    })
    it(`should return added null "0"`, async () => {
        const result = calculator.add(null, null);
        expect(result).to.equal(0)
    })
})
describe(`Testing calculator multiplying`, function () {

    beforeEach(async () => {
        console.log('The result of multiplying is...')
    })

    it(`should return multiplied positive number "45"`, async () => {
        const result = calculator.multiply(3 ,5, 3);
        expect(result).to.equal(45)
    })
    it(`should return multiplied  negative number "70"`, async () => {
        const result = calculator.multiply(-10, -7);
        expect(result).to.equal(70)
    })
    it(`should return multiplied  decimal number "76.125"`, async () => {
        const result = calculator.multiply(10.5, 7.25);
        expect(result).to.equal(76.125)
    })
    it(`should return multiplied different numbers "-4038.282"`, async () => {
        const result = calculator.multiply(-10.2, 2.65, 8.3, -6, -3);
        expect(result).to.equal(-4038.282)
    })
    // it(`should return multiplied string "polina"`, async () => {
    //     const result = calculator.multiply(`po`, `li`, `na`);
    //     expect(result).to.equal(NaN)
    // })
    it(`should return multiplied boolean "0"`, async () => {
        const result = calculator.multiply(true, false, true);
        expect(result).to.equal(0)
    })
    it(`should return multiplied null "0"`, async () => {
        const result = calculator.multiply(null, null);
        expect(result).to.equal(0)
    })
})

describe(`Testing calculator subtracting`, function () {

    beforeEach(async () => {
        console.log('The result of subtracting is...')
    })

    it(`should return subtracted positive number "15"`, async () => {
        const result = calculator.subtraction(20, 5 );
        expect(result).to.equal(15)
    })
    it(`should return subtracted  negative number "-3"`, async () => {
        const result = calculator.subtraction(-10, -7);
        expect(result).to.equal(-3)
    })
    it(`should return subtracted  decimal number "3.25"`, async () => {
        const result = calculator.subtraction(10.5, 7.25);
        expect(result).to.equal(3.25)
    })
    it(`should return subtracted different numbers "-12.15"`, async () => {
        const result = calculator.subtraction(-10.2, 2.65);
        expect(result).to.equal(-12.85)
    })
    // it(`should return subtracted string "polina"`, async () => {
    //     const result = calculator.subtraction(`po`, `li`);
    //     expect(result).to.equal(NaN)
    // })
    it(`should return subtracted boolean "1"`, async () => {
        const result = calculator.subtraction(true, false);
        expect(result).to.equal(1)
    })
    it(`should return subtracted null "0"`, async () => {
        const result = calculator.subtraction(null, null);
        expect(result).to.equal(0)
    })
})

describe(`Testing calculator dividing`, function () {

    beforeEach(async () => {
        console.log('The result of dividing is...')
    })

    it(`should return divided positive number "4"`, async () => {
        const result = calculator.divide(20, 5 );
        expect(result).to.equal(4)
    })
    it(`should return divided negative number "12"`, async () => {
        const result = calculator.divide(-120, -10);
        expect(result).to.equal(12)
    })
    it(`should return divided decimal number "8.6666666666666667"`, async () => {
        const result = calculator.divide(45.5, 5.25);
        expect(result).to.equal(8.6666666666666667)
    })
    it(`should return divided different numbers "3.8490566037735849"`, async () => {
        const result = calculator.divide(-10.2, 2.65);
        expect(result).to.equal(-3.8490566037735849)
    })
    // it(`should return divided string "polina"`, async () => {
    //     const result = calculator.divide(`po`, `li`);
    //     expect(result).to.equal(NaN)
    // })
    it(`should return divided boolean "Infinity"`, async () => {
        const result = calculator.divide(true, false);
        expect(result).to.equal(Infinity)
    })
    // it(`should return divided null "NaN"`, async () => {
    //     const result = calculator.divide(null, null);
    //     expect(result).to.equal(NaN)
    // })
})

describe(`Testing calculator exponentiation`, function () {

    beforeEach(async () => {
        console.log('The result of exponentiation is...')
    })

    it(`should return exponentiation positive number "25"`, async () => {
        const result = calculator.exponentiation( 5 );
        expect(result).to.equal(25)
    })
    it(`should return exponentiation negative number "121"`, async () => {
        const result = calculator.exponentiation(-11);
        expect(result).to.equal(121)
    })
    it(`should return exponentiation decimal number "41.2164"`, async () => {
        const result = calculator.exponentiation(6.42);
        expect(result).to.equal(41.2164)
    })
    // it(`should return exponentiation string "popo"`, async () => {
    //     const result = calculator.exponentiation(`po`);
    //     expect(result).to.equal(`popo`)
    // })
    it(`should return exponentiation boolean "1"`, async () => {
        const result = calculator.exponentiation(true);
        expect(result).to.equal(1)
    })
    it(`should return exponentiation null "0"`, async () => {
        const result = calculator.exponentiation(null);
        expect(result).to.equal(0)
    })
})




























