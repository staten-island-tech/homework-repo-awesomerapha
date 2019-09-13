////HW2
const color = 'red';

switch(color){
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default: 
        console.log('Color is not red or blue');
        break;
}
//Switch is an alternative for if, else, and else if statements. 
//Each 'case' is the equivalent of an else if
//'default' is the equivalent of an else
//Use 'break;' to end any statement made in the switch

let day;

switch(new Date().getDay()){
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
     case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;                  
}
console.log(`Today is ${day}`);
//Good example usage