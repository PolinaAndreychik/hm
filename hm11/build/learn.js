'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.map = void 0;
// // 1
// interface arrayUser {
//     data: Array<User>;
// }
// interface User {
//     name: string,
//     age: number,
//     occupation?: string,
//     car?: string,
//     children?: number,
// }
//
//
// const users: User[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep',
//         car: 'VW'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut',
//         children: 2
//     }
// ];
// console.log(users)
//
// //2
//
// interface Admin {
//     name: string,
//     age: number,
//     role?: string
// }
// type Person = User | Admin;
//
// const persons: Person[] = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep'
//     },
//     {
//         name: 'Jane Doe',
//         age: 32,
//         role: 'Administrator'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut'
//     },
//     {
//         name: 'Bruce Willis',
//         age: 64,
//         role: 'World saver'
//     }
// ];
// console.log(persons)
//
// // 3
// export class ObjectManipulator {
//
//     constructor(protected obj) {}
//
//     public set(key: string, value: number) {
//         return new ObjectManipulator({...this.obj, [key]: value});
//     }
//
//     public get(key: string) {
//         return this.obj[key];
//     }
//
//     public delete(key: string) {
//         const newObj = {...this.obj};
//         delete newObj[key];
//         return new ObjectManipulator(newObj);
//     }
//
//     public getObject() {
//         return this.obj;
//     }
// }
// const user1 = { name: `Dasha`, age: 14, catsName: `Sus`, catSummary: 5};
// const manipulator = new ObjectManipulator(user1);
// console.log(manipulator.getObject())
// //4.1
// /**
//  * 2 arguments passed: returns a new array
//  * which is a result of input being mapped using
//  * the specified mapper.
//  *
//  * 1 argument passed: returns a function which accepts
//  * an input and returns a new array which is a result
//  * of input being mapped using original mapper.
//  *
//  * 0 arguments passed: returns itself.
//  *
//  * @param {Function} mapper
//  * @param {Array} input
//  * @return {Array | Function}
//  */
function map(mapper, input) {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}
exports.map = map;
function square(item) {
  return item + item;
}
console.log(map(square, [2]));
//4.2
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */
// export function filter(filterer, input) {
//     if (arguments.length === 0) {
//         return filter;
//     }
//     if (arguments.length === 1) {
//         return function subFunction(subInput) {
//             if (arguments.length === 0) {
//                 return subFunction;
//             }
//             return subInput.filter(filterer);
//         };
//     }
//     return input.filter(filterer);
// }
