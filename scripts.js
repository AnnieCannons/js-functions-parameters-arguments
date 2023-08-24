
/***********************  Exercise 1  ************************/
function greet(name) {
    console.log("Hello, " + name + "!");
}
  
// Call the function multiple times, so you see the following outputs in the console.
// Output: Hello, Grace!
greet("Grace");
// Output: Hello, Jael!
greet("Jael");
// Output: Hello, Marcus!
greet("Marcus");


/***********************  Exercise 2  ************************/
function greetMessage(name) {
    console.log("Hello, " + name + "!");
}
let userName = "Inigo Montoya";

greetMessage(userName);
  
// Create a variable called userName and assigned it any string value. Pass in that variable as the argument when calling the function.

// What do you see in the console?


/***********************  Exercise 3  ************************/

function goToTheCoffeeShop(drink, pastry) {
    alert(`A ${drink} and ${pastry} are on the way!`);
}

//goToTheCoffeeShop("latte");
// Call this function so that the alert reads "A latte is on the way!"

// Modify the function so that the function takes in two parameters, a drink and a pastry. Call the function with two arguments.

let pastryOrder = "scone";
//goToTheCoffeeShop("Latte", pastryOrder);

//could alternatively type in the word "scone" as a string instead of the variable name




/***********************  Exercise 4  ************************/

// Let’s create a function to calculate the area of a circle.

// Here is the code for calculating the area of a circle:
//let area = Math.PI * radius * radius;
// put the above code into your function (don't leave it outside the function!)

// How many variables will we need, if any, to write our function?

// How many parameters, if any?

// Now write the function.

function circleArea(radius1, radius2) {
  let area = Math.PI * radius1 * radius2;
  console.log(area);
};

let firstRadius = 15;
let secondRadius = 15;


circleArea(firstRadius, secondRadius);

let thirdRadius = 20;
let fourthRadius = 20;

circleArea(thirdRadius, fourthRadius);



// Call the function for a circle with the radius of 15. You should get a value of 706 and a lot of digits after the decimal point.





/***********************  Exercise 5  ************************/

function addNumbers(num1, num2) {
let result = num1 + num2;
console.log(result);
};

num1 = 6;
num2 = 5
addNumbers(num1, num2);

// Remove the comments from the function above. Call the above function.

// What errors do you see in the console?

// Fix the funciton so that you can call it without errors.

// Call the above function for the following outputs:
// Output: 15
num1 = 5;
num2 = 10;
addNumbers(num1, num2);
// Output: 34
num1 = 33;
num2 = 1;
addNumbers(num1, num2);
// Output: 20
num1 = 10;
num2 = 10;
addNumbers(num1, num2);
// Output: 4

num1 = 1;
num2 = 3;
addNumbers(num1, num2);



/***************************  BONUS PRACTICE  *********************************/


/***********************  Exercise 6  ************************/

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

/***********************  Exercise 10  ************************/

function sortArray(string) {
    let alpha = string.sort();
    console.log(alpha);
  }
  
const stringArray = ["shirt", "dress", "pants", "overalls", "hat"];
const alphaArray = sortArray(stringArray);


// Describe what the above code is doing?
  
