////Global Scope

var a = 1;
let b = 2;
const c = 3;

/* function test() {
    var a = 4;
    let b = 5;
    const c = 6;    
    console.log(`Function Scope: ${a} ${b} ${c}`);   
    //Different scope so not the same variables
}
test(); */

/* if(true) {
    //Block Scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`If Scope: ${a} ${b} ${c}`);
    //let and const do not change in block scopes but var does because its an older remnant of JS
} */

/* for(let a = 0; a < 10; a++) {
    console.log(`Loop Scope: ${a}`);
    //If the variable was declared with var, 'a' would be redefined in the global scope (not good)
    // This ^, doesn't happen with let or const
    //TLDR: Never use var
}
console.log(`Global Scope: ${a} ${b} ${c}`); */