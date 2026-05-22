const name = "saroj"
const repoCount = 1

console.log(name + repoCount + "value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}. `);

const gameName = new String(" Saroj  ")
console.log(gameName[1]);
console.log(gameName.__proto__);

// Note on .length: .length is a property, not a method! You do not use parentheses with it.
console.log(gameName.length); // 8

// String Methods Without Arguments

.toLowerCase()
// console.log(gameName.toLowerCase());

.toUpperCase()
// console.log(gameName.toUpperCase());

.trim()
// console.log(gameName.trim());

.trimStart()
// console.log(gameName.trimStart());

.trimEnd()
// console.log(gameName.trimEnd());

.toString()
// console.log(gameName.toString());

.valueOf()
// console.log(gameName.valueOf());


// String Methods With Arguments

.includes()
// console.log(gameName.includes("Saroj")); // true

.indexOf()
// console.log(gameName.indexOf("a"));

.lastIndexOf()
// console.log(gameName.lastIndexOf("o"));

.startsWith()
// console.log(gameName.startsWith(" Sar"));

.endsWith()
// console.log(gameName.endsWith("j  "));


// For Extracting Parts of a String

.slice(); // Extracts a section of a string from the start index up to (but not including) the end index.
console.log(gameName.slice(1,6)); // (startIndex, endIndex)

.substring(); // Similar to .slice(), but doesn't accept negative index values.
console.log(gameName.substring());

.charAt(); // Returns the character at the specified index position.
console.log(gameName.charAt(1));

.charCodeAt(); // Returns the Unicode (ASCII number) of the character at the specified index.
console.log(gameName.charCodeAt(1));


// For Modifying & Splitting Text

.replace(); // Replaces the first match of a value with a new value.
console.log(gameName.replace(" Saroj  ","Developer"));

.replaceAll(); // Replaces all occurrences of a value with a new value.
console.log(gameName.replaceAll(" Saroj  ","Neupane"));

.split(); // Splits a string into an array of substrings based on a separator character.
console.log(gameName.split(" ")); // [ '', 'Saroj', '', '' ]

.concat(); // Joins two or more strings together (similar to using +).
console.log(gameName.concat("Neupane")); // gameName${Saroj}.concat ${Neupane} // Saroj Neupane

.repeat(); // Returns a new string containing the original string repeated a specific number of times.
console.log(gameName.repeat(3));


.padStart(); // Pads the current string from the start with a given string until it hits the target length.
console.log(gameName.padStart());

.padEnd(); // Pads the current string from the end with a given string until it hits the target length.
console.log(gameName.padEnd());


// Note: Crucial Rule to Remember;
In JavaScript, strings are immutable. None of these methods actually change the original variable; they always return a brand-new string!