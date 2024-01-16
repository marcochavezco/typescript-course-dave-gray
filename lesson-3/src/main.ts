// Arrays

let stringArr = ['hey', 'you', 'marco'];

let models = ['aveo', 'g3', 3];

let mixed = ['g3', 2009, true];

stringArr[0] = 'Hello';
stringArr.push('!');

// error
// stringArr = models;
// NO error
// models = stringArr;

models[0] = 2009;
models.unshift('city');

let test = [];
let cars: string[] = [];
cars.push('fit');

// Tuples

let myTuple: [string, number, boolean] = ['g3', 2009, true];
let myArr = ['g3', 2009, true];
// myTuple = myArr => error
myArr = myTuple;

myTuple[0] = 'test';
myTuple[1] = 2011;

// Objects

// In Vanilla JavaScript an Object can take many forms
let myObj = {};
myObj = [];
myObj = models;

// TypeScript can infer the types by defining the object props
let newObj = {
  prop1: 'Marco',
  prop2: true,
};

// newObj.prop2 = 'test'; => No
newObj.prop1 = 'Test';

type User = {
  name?: string;
  vip: boolean;
  vehicles: string[];
};

let user1: User = {
  name: 'John Doe',
  vip: false,
  vehicles: [],
};

let user2: User = {
  name: 'Marco Chavez',
  vip: true,
  vehicles: [],
};

let doSomething = (user: User) => {
  if (user.name) return `Hello ${user.name.toUpperCase()}`;
  return `Hello!`;
};

console.log(doSomething(user1)); // Hello JOHN DOE

// Enums

enum Grade {
  U = 1,
  D,
  C,
  B,
  A,
}

console.log(Grade.U);
