const square = function (number) {
    return number ** 2
}

const squareArrow = (number) => number ** 2;
console.log(squareArrow(8))

var fullName = 'Luis Ayala'

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName(fullName));

// Part 2
console.log("PART 2");

// arguments object is no longer bound with arrow functions
const add = function(a, b) {
    console.log(arguments);
    return a + b;
}
console.log(add(3,6,4));

const addArrow = (a, b) => {
    // console.log(arguments); // Not defined error
    return a + b;
}


// 'this' keyword is no longer bound
const user = {
    name: 'Luis',
    cities: ['Cabo San Lucas', 'Guadalajara', 'Hagenberg'],
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);        
        const that = this;
        this.cities.forEach(function(city){
            // console.log(`${this.name} has lived in ${city}`)    // Anonymous functions doesn't have access to 'this'
            console.log(`${that.name} has lived in ${city}`);
        })
    }
}
user.printPlacesLived()

const userArrow = {
    name: 'Luis',
    cities: ['Cabo San Lucas', 'Guadalajara', 'Hagenberg'],
    printPlacesLived() { // Shoudn't use arrow function to keep reference to 'this'
        return this.cities.map((city) => `${this.name} has lived in ${city}`);

        // this.cities.forEach((city) => {
        //     console.log(`${this.name} has lived in ${city}`)    // Anonymous functions doesn't have access to 'this'
        // })
    }
}
console.log(userArrow.printPlacesLived())


// Challange
const mutiplier = {
    numbers: [5,1,2,6,3,8],
    multiplyBy: 2,
    multiply(multi) {
        return this.numbers.map((number) => number * (multi || this.multiplyBy));
    }
}
console.log(mutiplier.multiply(10))