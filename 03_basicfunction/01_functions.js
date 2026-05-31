// Define a simple function
function greet(name) { 
//   console.log("Hello, " + name + "!"); 
}

greet("developerSaroj"); // Call the function to execute the code inside it

function doSomething() {
    // console.log("Doing something...");
}

let result = doSomething(); // Call the function and store the return value in a variable
// console.log(result); // Output: undefined (since doSomething does not return anything) 

// Anonymous function
let anonymousFunction = function() {
    // console.log("This is an anonymous function.");
};

anonymousFunction(); // Call the anonymous function to execute it

// Functions support default parameters,
function greeting(name = "Guest") {
    // console.log("Hello, " + name + "!");
}

greeting(); // Output: Hello, Guest!
greeting("Saroj"); // Output: Hello, Saroj!


// Arrow Functions ()=>
const greetingArrow = (name) => {
    // console.log("Hello, " + name + "!");
};

greetingArrow("Saroj"); // Output: Hello, Saroj!


// Scope in Programming, & How Does Global, Local, and Block Scope Work?

// Global Scope
let globalVar = "I'm a Global Variable";

function printGlobalVar() {
    console.log(globalVar);
}

printGlobalVar(); // 

// Local Scope
function greet() {
    let message = "Hello, Local Scope";
    console.log(message);
}

greet(); // "Hello, local scope!"
// console.log(message); // This will throw an error
