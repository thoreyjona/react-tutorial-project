// Function scoped - each variable is cant be accessed outside that function
var nameVar = 'Andrew';
nameVar = 'Mike';
var nameVar = 'Hailey';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
// Not possible to redefine it : let nameLet = 'x'
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// Not possible to redefine or reassign
console.log('nameConst', nameConst);


function getPetName() {
    var petName = 'Hal'; 
    return petName;
}
//console.log(petName); Not possible
// let and const are also the same

// Block scoping /Block level scoped
// Var is function scoped, const and let are block scoped

var fullName = 'Thorey Gudjonsdottir';

if (fullName) {
    const firstName = fullName.split(' ')[0];
    console.log(firstName);
}
// can also do it here if it is var:
console.log(firstName);