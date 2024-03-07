// 1
interface arrayUser {
  data: Array<User>;
}
interface User {
  name: string;
  age: number;
  occupation?: string;
  car?: string;
  children?: number;
}

const users: User[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2,
  },
];
console.log(users);

//2

interface Admin {
  name: string;
  age: number;
  role?: string;
}
type Person = User | Admin;

const persons: Person[] = [
  {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
  },
  {
    name: 'Jane Doe',
    age: 32,
    role: 'Administrator',
  },
  {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
  },
  {
    name: 'Bruce Willis',
    age: 64,
    role: 'World saver',
  },
];
console.log(persons);

// 3
export class ObjectManipulator {
  constructor(protected obj) {}

  public set(key: string, value: number) {
    return new ObjectManipulator({ ...this.obj, [key]: value });
  }

  public get(key: string) {
    return this.obj[key];
  }

  public delete(key: string) {
    const newObj = { ...this.obj };
    delete newObj[key];
    return new ObjectManipulator(newObj);
  }

  public getObject() {
    return this.obj;
  }
}
const userDasha = { name: `Dasha`, age: 14, catsName: `Sus`, catAge: 5 };
const manipulator = new ObjectManipulator(userDasha);
console.log(manipulator.getObject());

//4.1
/**
 * 2 arguments passed: returns a new array
 * which is a result of input being mapped using
 * the specified mapper.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being mapped using original mapper.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} mapper
 * @param {Array} input
 * @return {Array | Function}
 */
export function map(mapper?: any, input?: any[]) {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: any[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}
// console.log(map(map,[2,2,3,4,5]));
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
export function filter(filterer?: any, input?: string[]) {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput: any[]) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}
// console.log(filter(filter,[`srt`,`tre`]))

/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
export function add(a?: number, b?:number) {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB:number) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}
console.log(add(2))