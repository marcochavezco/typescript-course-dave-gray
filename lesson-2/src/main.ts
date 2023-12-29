// Implicit - TypeScript infers the type
let username = 'Marco';
// Explicit
let password: string = 'password';

let user: string;
let value: number;
let state: boolean;
let album: any;

user = 'Marco';
value = 24;
state = true;
album = 1234;
album = 'Angostura';

// When Typescript does not have information about a variable it infers the type as any
// Also can it can infers the result of a function based on the parameters
const sum = (a: number, b: string) => a + b;

// Union types
let postId: number | string;
let isActive: number | boolean;

let re: RegExp = /\w+/g;
