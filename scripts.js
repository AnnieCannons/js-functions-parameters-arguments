
/***********************  Exercise 1  ************************/
function greet(name) {
    console.log("Hello, " + name + "!");
}
  
// Call the function multiple times, so you see the following outputs in the console.
// Output: Hello, Grace!
// Output: Hello, Jael!
// Output: Hello, Marcus!

greet ("Grace");
greet ("Jael");
greet ("Marcus");






























/***********************  Exercise 2  ************************/
function greetMessage(name) {
    console.log("Hello, " + name + "!");
  console.log("Hello, " + name + "!");
}
  
// Create a variable called userName and assigned it any string value. Pass in that variable as the argument when calling the function.
let userName = "LadyBug";

// What do you see in the console?
greetMessage(userName); // ⭐️Hello, LadyBug!






























/***********************  Exercise 3  ************************/

function goToTheCoffeeShop(drink) {
    alert(`A ${drink} is on the way!`);
    console.log(`A ${drink} is on the way!`);
}

// Call this function so that the alert reads "A latte is on the way!"
 goToTheCoffeeShop ("latte");



// Modify the function so that the function takes in two parameters, a drink and a pastry. Call the function with two arguments.
function goToTheCoffeeShop2(drink, pastries) {
  alert(`A ${drink} and a ${pastries} is on the way!`);
  console.log(`A ${drink} and a ${pastries} is on the way!`);
}
goToTheCoffeeShop2( "latte", "pastries");


























/***********************  Exercise 4  ************************/

// Let’s create a function to calculate the area of a circle.
function area(radius){


// // Here is the code for calculating the area of a circle:
  let area = Math.PI * radius * radius;
};

// put the above code into your function (don't leave it outside the function!)

// How many variables will we need, if any, to write our function?
// ⭐️One.

// How many parameters, if any?
// ⭐️One.


// Now write the function.
function area(radius) {
  let area = Math.PI * radius * radius;
  console.log(`The area equals ${area}!`);
}

// Call the function for a circle with the radius of 15. You should get a value of 706 and a lot of digits after the decimal point.
area(15);

















/***********************  Exercise 5  ************************/

function addNumbers(num1, num2) {
    let result = num1 + num2;
    console.log(`${num1} + ${num2}`);
  }


// Remove the comments from the function above. Call the above function.
addNumbers(0,2)


// What errors do you see in the console?
// ⭐️Unexpected token '[' (at scripts.js:86:20)


// Fix the function so that you can call it without errors.
addNumbers(776,1);


// Call the above function for the following outputs:

addNumbers(7, 8);
// ⭐️Output: 15

addNumbers(33, 1);
// ⭐️Output: 34

addNumbers(18, 2);
// ⭐️Output: 20

addNumbers(2,2);
// ⭐️Output: 4
















/***************************  BONUS PRACTICE  *********************************/


/***********************  Exercise 6  ************************/
//return or console.log ?
  function showMessage(from, text) { 
    // Add the code to the code block that will create the following outputs.
  }
  
  showMessage('Ann', 'Hello!'); // Ann: Hello!
  showMessage('Ann', "What's up?"); // Ann: What's up?









/***********************  Exercise 7  ************************/

// Declare a function called multiplyFive which accepts a number and returns that number multiplied by 5.






// Call the function 3 times with different inputs.










/***********************  Exercise 8  ************************/
// Declare a function that will take in an array as an argument and log the third item in the array to the console. 















/***********************  Exercise 9  ************************/
// Declare a function that will take in the following object and alert the following, "Welcome, [FULLNAME]. Your email address is [EMAILADDRESS]"

let userObject = {
    name: {
        first: "Rose",
        last: "Smith"
    },
    age: 36,
    programmer: true,
    favoriteTVShows: ["Fargo", "Breaking Bad", "Battlestar Galactica"],
    pets: ["Pal"],
    emailAddress: 'rose@smithcoders.com'
}
console.log(userObject);



function alertUser() {
  let text = alert(`Welcome, ${userObject.name.first} ${userObject.name.last}. \nYour email address is ${userObject.emailAddress}`);
  console.log(`Welcome, ${userObject.name.first} ${userObject.name.last}. \nYour email address is ${userObject.emailAddress}`);
}
  
  alertUser();
  
  














/***********************  Exercise 10  ************************/

function sortArray(string) {
    let alpha = string.sort();
    console.log(alpha);
  }
  
const stringArray = ["shirt", "dress", "pants", "overalls", "hat"];
const alphaArray = sortArray(stringArray);


// Describe what the above code is doing?
// ⭐️calling a function that was defined to declare an array to sort clothing items 
