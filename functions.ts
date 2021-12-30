const Name = "cheshta";
// userName = "madaan"; reinitialising constant is not allowed
let ages = 30;

ages = 29; // declared with let can be reinitialised
// let scope global and block i.e. within {}

//arrow functions
const addition = (a: number, b: number) => a + b;

const printOutput: (a: number | string) => void = output => console.log(output);

printOutput(addition(5, 2));
