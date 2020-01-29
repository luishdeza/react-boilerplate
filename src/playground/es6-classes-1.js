

class Person {
    constructor(name='Anonymous', age=0) {
        this.name = name
        this.age = age
    }

    getGreeting() {
        return `Hello! I am ${this.name}.`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age)
        this.major = major
    }

    hasMajor() {
        return Boolean(this.major)
    }

    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor())
            description += ` Their major is ${this.major}`

        return description
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    hasHomeLocation() {
        return Boolean(this.homeLocation)
    }

    getGreeting() {
        let greeting = super.getGreeting()

        if(this.hasHomeLocation())
            greeting += ` I'm visiting from ${this.homeLocation}.`

        return greeting
    }
}

// const me = new Student("luis", 22, 'Computer Science')
// console.log(me.getGreeting());
// console.log(me.getDescription());
// console.log(me.hasMajor());

// const other = new Student();
// console.log(other.getGreeting());
// console.log(other.getDescription());
// console.log(other.hasMajor());

const me = new Traveller("luis", 22, 'Cabo San Lucas')
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveller("eduardo", 22)
console.log(other.getGreeting());
console.log(other.getDescription());