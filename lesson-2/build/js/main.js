"use strict";
// Implicit - TypeScript infers the type
let username = 'Marco';
// Explicit
let password = 'password';
let user;
let value;
let state;
let album;
user = 'Marco';
value = 24;
state = true;
album = 1234;
album = 'Angostura';
// When Typescript does not have information about a variable it infers the type as any
// Also can it can infers the result of a function based on the parameters
const sum = (a, b) => a + b;
// Union types
let postId;
let isActive;
let re = /\w+/g;
