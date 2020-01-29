var nameVar = 'Luis';
var nameVar = 'Eduardo'; // Can be redeclared and reassign
console.log(`Var: ${nameVar}`);

let nameLet = 'Luis';
nameLet = "eduardo"; // Can be reassign and can't be redeclared
console.log(`Let: ${nameLet}`);

const  nameConst = 'Luis';
//nameConst = "eduardo"; // Can't be reassign and can't be redeclared
console.log(`Let: ${nameConst}`);

var fullname = 'luis hernandez';
let firstName;

if(fullname){
    firstName = fullname.split(' ')[0];
}

console.log(firstName);
