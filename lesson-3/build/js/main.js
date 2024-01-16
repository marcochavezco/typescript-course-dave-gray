"use strict";
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
let cars = [];
cars.push('fit');
// Tuples
let myTuple = ['g3', 2009, true];
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
let user1 = {
    name: 'John Doe',
    vip: false,
    vehicles: [],
};
let user2 = {
    name: 'Marco Chavez',
    vip: true,
    vehicles: [],
};
let doSomething = (user) => {
    if (user.name)
        return `Hello ${user.name.toUpperCase()}`;
    return `Hello!`;
};
console.log(doSomething(user1)); // Hello JOHN DOE
// Enums
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.U);
