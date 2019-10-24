/*
 const alphabet = ['A', 'B', 'C','D','E','F'];
const numbers = ['1', '2', '3', '4', '5', '6'];

//const a = alphabet[0];

const[a, , c, ...rest] = alphabet;
//This is alternative method to grab certain items in an array, to skip over an element use an aditional comma
// May also use spread operator to grab the rest of the array without typing it out

const newArray = [...alphabet, ...numbers];
//This is a way to combine two arrays easily into one array using the spread operators
//Very powerful when using functions and objects

console.log(newArray);

function sumAndMultiply(a, b){
    return[a+b, a*b, a/b];
}

const [sum, multiply, division = 'No division'] = sumAndMultiply(2,3);
//Division is replaced by the functions return if it has a third return value, otherwise the space is populated by 'No division'

console.log(sum);
console.log(multiply);
console.log(division);
 */

const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    }
}

const personTwo = { 
    age: 32,
    favoriteFood: 'Watermelon',
}

const{ name: firstName = 'John', address: { city } } = personTwo;
//Setting default values in the const

const personThree = {...personOne, ...personTwo};
//Very powerful way to combine two objects, gets all properties of personOne and then replaces matching values with those of personTwo

console.log(firstName);
//console.log(rest);
//Rest will log everything other than the name if a spread operator was used
console.log(city);

function printUser({name,age, favoriteFood = 'Watermelon' }) {
    console.log(`Name is: ${user.name}, Age is ${user.age}`);
}

printUser(personOne);