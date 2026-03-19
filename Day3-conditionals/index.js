let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");

switch (choice) {
    case '1':
        console.log("Starting the game...");
        break;
    case '2':
        console.log("Opening settings...");
        break;
    case '3':
        console.log("Exiting the game...");
        break;
    default:
        console.log("Invalid option, please try again.");
}



let numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 3) {
        console.log("Found 3! Exiting the loop.");
        break;  // Exit the loop when 3 is found
    }
    console.log(numbers[i]);
}





let isLoggedIn = true;
let isAdmin = true;

if (isLoggedIn && isAdmin) {
    console.log("welcome, user")
}


//objects

let person = {
    firstName: "Q",
    lastName: "Armstrong",
    age: 27,
    greet: function () {
        console.log('Hello, my name is ${this.firstname} ${this.lastName},')
    }


}
console.log(person.age)



// let age = 16

// if (age >= 18){
//     console.log('You are eligible to vote')
// }else {
//     console.log('You are not old enough to vote, yet.')
// }

// let temperature = 21

// if (temperature > 30){
//     console.log("Too hot...")
// }else if(temperature < 10){
//     console.log("Too cold...")
// }else {
//     console.log("Just right...")
// }

// let choice = prompt("Choose an option: 1. Start 2. Settings 3. Exit");

// switch (choice) {
//   case '1':
//     console.log("Starting the game...");
//     break;
//   case '2':
//     console.log("Opening settings...");
//     break;
//   case '3':
//     console.log("Exiting the game...");
//     break;
//   default:
//     console.log("Invalid option, please try again.");
// }

// using break
// let numbers = [1, 2, 3, 4, 5];

// for (let i = 1; i <= 5; i++) {
//   if (i % 2 === 0) continue;  // Skip even numbers
//   console.log(i);  // Only odd numbers will be printed
// }

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] === 3) {
//     console.log("Found 3! Exiting the loop.");
//     break;  // Exit the loop when 3 is found
//   }
//   console.log(numbers[i]);
// }

// Conditionals

// && AND

// let isLoggedIn = true
// let isAdmin = false

// if (isLoggedIn && isAdmin) {
//     console.log("Welcome, Admin")
// }else {
//     console.log('Welcome,user')
// }

// OR ||
// let hasMembership = false;
// let hasCoupon = true;

// if (hasMembership || hasCoupon) {
//   console.log("You are eligible for a discount.");
// }

// NOT !

// let value = 5
// let otherThing = 5

// if (value === otherThing && value !== 7){
//     console.log('They match')
// }

// Objects

let person = {
    firstName: "Tishana",
    lastName: "Trainor",
    age: 49,
    greet: function () {
        console.log(`Hello, my name is ${this.firstName} ${this.lastName}.`);
    }, // a method IS a function. It's just a function inside an object
};

person.greet(); // invoking or calling a method.

let animal = {
    type: "cat",
    name: "Ulysses",
    color: "grey",
    age: 0,
    isFriendly: true,
    toys: ["blanket", "ball", "fishy"],
    breed: "Torty",
    previousOwner: { firstName: "Paul", lastName: "Chapman" },
    greet: function () {
        console.log("Meow");
    },
};
console.log(animal.color);
animal.greet()
console.log(animal.toys)
console.log(animal.toys[1])
console.log(animal.previousOwner.firstName + " " + animal.previousOwner.lastName)