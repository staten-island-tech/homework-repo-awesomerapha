/////////HW3
//FUNCTION DECLARATIONS
function greet() {
    //console.log('Hello');
    return('Hello');
}
console.log(greet());
//Basic showing of the difference between the return of a value and just console logging from the function
const square = function(x) {
    return x*x;

}
console.log(square(5));
//Example of how you can store a function inside a variable
(function(firstName){
    console.log('i dont understand ' + firstName);
})('Brad');
//Example of a function being declared and called instantly 
const todo = {
add: function(){
    console.log('Add todo');
},
edit: function(id){
    console.log(`This is number ${id}`);
}
}
todo.add();
todo.edit(12312412);
//Example of how you can make multiple functions under a single variable and call each individual functions using a '.' after the variable name

