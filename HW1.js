///HW1
let x = 2 + '2';
console.log(x);
// answer 22, because JS converted the numerical value to a string and combined them

let x = 2 + 2 + '2';
console.log(x);
// Does the calculation from left to right, adding 2 and 2 first as numerical values, then making 4 a string, and combining with 2. answer 42

let x = 2 + true;
console.log(x);
// Uses boolean value true as the numerical value of 1 (where as false would be 0) and adds it to 2 for a result of 3

let x = 2 + true + '2';
console.log(x);
//Answer 32, First adds number and boolean from left to right (2 + 1 for 3), then makes 3 a string and combines it with the stringed 2

let x = true + '2';
console.log(x);
//Answer "true2", because the compiler finds it easier making the boolean value true a string and then combining it with the 2 string

let x = Number('Hello');
console.log(x);
//Number('') is the method in which a numerical value within a string can be used as a numerical value. Because Hello is not a number, the result would be NaN(Not a Number)

let x = Boolean(1);
console.log(x);
//With 1 it would result in true, obviously. But even if 5 was placed instead of 1 the result would still be true, since the only value it would give false would be 0

let x = Boolean('hello');
console.log(x);
//Result would be true because the string has characters, again the only way it would give a false output is if the string was empty
//Undefined and null inputs would also yeild in a false output

let x ='';
if ((x !== undefined) || (x !==null) || (x !== 0)) {

}
if(x) {

}
//either function would be false but it is obviously much more convenient to use the second method, showing the ways you can use this to your advantage

if ([]){

}
//Function would be true despite empty array because objects are always true
