import { expect } from 'chai';
import {add, multiply, subtraction, divide, exponentiation} from '../calculator.js';

describe(`Testing calculator`, function () {

    beforeEach(async () => {
        console.log('The result is...')
    })
    it(`should return "11" if attribute not pass in function`, async () => {
        const result = add(6,2,3);
        expect(result).to.equal(11)
    })
    it(`should return "22" if attribute not pass in function`, async () => {
        const result = multiply(2, 11);
        expect(result).to.equal(22)
    })
    it(`should return "4" if attribute not pass in function`, async () => {
        const result = subtraction(6,2);
        expect(result).to.equal(4)
    })
    it(`should return "9" if attribute not pass in function`, async () => {
        const result = divide(18, 2)
        expect(result).to.equal(9)
    })
    it(`should return "36" if attribute not pass in function`, async () => {
        const result = exponentiation(6);
        expect(result).to.equal(36)
    })
    // it(`should return "8" if attribute not pass in function`, async () => {
    //     const resultAdd = add(6,2,3);
    //     const resultMultiply = multiply(resultAdd, 4)
    //     const resultDivide = divide(resultMultiply,2)
    //     const resultFinal = subtraction(resultDivide, 14)
    //     expect(resultFinal).to.equal(8)
    // })
})






