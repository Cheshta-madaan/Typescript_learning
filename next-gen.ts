const hobbies = ['Sports', 'Cooking'];
const activeHobbies = ['Hiking'];

activeHobbies.push(...hobbies); // Spread operator
console.log("activehobbies:  " + activeHobbies);

const person = {
  firstName: 'Max',
  age: 30
};

const copiedPerson = { ...person }; //spread operator to copy the object

//rest parameters to use the unlimited parameters
const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

// array destructuring
const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

//Object destructuring  
const { firstName: userName, age } = person;

console.log(userName, age);
console.log(person);
