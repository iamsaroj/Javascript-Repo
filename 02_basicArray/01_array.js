// Array Methods Without Arguments
let arr = [1, 2, 3, 4, 5];
console.log(`Original_Array: ${arr}\n`); // Output: [1, 2, 3, 4, 5]

// pop() - removes the last element from an array and returns that element
let poppedElement = arr.pop();
console.log(`popElement: ${poppedElement}`); // Output: 5
console.log(`OriginalArray: ${arr}`); // Output: [1, 2, 3, 4]
console.log(`typeOf arr.pop(): ${typeof poppedElement}\n`); // Output: number


// shift() - removes the first element from an array and returns that element
let shiftedElement = arr.shift();
console.log(`shiftedElement: ${shiftedElement}`); // Output: 1
console.log(`OriginalArray: ${arr}`); // Output: [2, 3, 4]
console.log(`typeOf arr.shift():${typeof shiftedElement}\n`); // Output: number


// reverse() - reverses the order of the elements in an array
arr.reverse();
console.log(`reversed array: ${arr}`); // Output: [4, 3, 2]
console.log(`typeOf arr.Reverse():${typeof arr.reverse()}\n`); // Output: object

// sort() - sorts the elements of an array in place and returns the sorted array
arr.sort();
console.log(`sorted array: ${arr}`); // Output: [2, 3, 4]
console.log(`typeof arr.sort(): ${typeof arr.sort()}\n`); // Output: object

// toString() - returns a string representing the array and its elements
let arrayString = arr.toString();
console.log(`array as string: ${arrayString}`); // Output: "2,3,4"
console.log(`typeof arr.toString(): ${typeof arrayString}\n`); // Output: string

// join() - joins all elements of an array into a string and returns this string
let joinedString = arr.join("-");
console.log(`joined array: ${joinedString}`); // Output: "2-3-4"
console.log(`typeof arr.join(): ${typeof joinedString}\n`); // Output: string

// length - returns the number of elements in an array
let arrayLength = arr.length;
console.log(`length of array: ${arrayLength}`); // Output: 3
console.log(`typeof arr.length: ${typeof arrayLength}\n`); // Output: number

// For Searching & Positioning
// indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present
let indexOfElement = arr.indexOf(3);
console.log(`index of element 3: ${indexOfElement}`); // Output: 1
console.log(`typeof arr.indexOf(): ${typeof indexOfElement}\n`); // Output: number

// lastIndexOf(item) - returns the last index at which a given element can be found in the array, or -1 if it is not present
let lastIndexOfElement = arr.lastIndexOf(2);
console.log(`last index of element 2: ${lastIndexOfElement}`); // Output: 0
console.log(`typeof arr.lastIndexOf(): ${typeof lastIndexOfElement}\n`); // Output: number

// includes(item) - determines whether an array includes a certain value among its entries, returning true or false as appropriate
let includesElement = arr.includes(4);
console.log(`array includes element 4: ${includesElement}`); // Output: true
console.log(`typeof arr.includes(): ${typeof includesElement}\n`); // Output: boolean

// .join(separator) - joins all elements of an array into a string and returns this string
let joinedStringWithComma = arr.join(",");
console.log(`joined array with comma: ${joinedStringWithComma}`); // Output: "2,3,4"
console.log(`typeof arr.join(): ${typeof joinedStringWithComma}\n`); // Output: string


// Array Methods With Arguments For Adding & Removing Elements

// push() - adds one or more elements to the end of an array and returns the new length of the array
let newLengthAfterPush = arr.push(5);
console.log(`new length after push: ${newLengthAfterPush}`); // Output: 4
console.log(`array after push: ${arr}`); // Output: [2, 3, 4, 5]
console.log(`typeof arr.push(): ${typeof newLengthAfterPush}\n`); // Output: number

// unshift() - adds one or more elements to the beginning of an array and returns the new length of the array
let newLengthAfterUnshift = arr.unshift(1);
console.log(`new length after unshift: ${newLengthAfterUnshift}`); // Output: 5
console.log(`array after unshift: ${arr}`); // Output: [1, 2, 3, 4, 5]
console.log(`typeof arr.unshift(): ${typeof newLengthAfterUnshift}\n`); // Output: number

// splice(start, count, item) - changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
arr.splice(2, 1, 10); // removes 1 element at index 2 and adds 10
console.log(`array after splice: ${arr}`); // Output: [1, 2, 10, 4, 5]
console.log(`typeof arr.splice(): ${typeof arr.splice()}\n`); // Output: object

// slice(start, end) - returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let slicedArray = arr.slice(1, 4);
console.log(`sliced array: ${slicedArray}`); // Output: [2, 10, 4]
console.log(`typeof arr.slice(): ${typeof slicedArray}\n`); // Output: object

// concat() - is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array
let newArray = arr.concat([6, 7, 8]);
console.log(`new array after concat: ${newArray}`); // Output: [1, 2, 10, 4, 5, 6, 7, 8]
console.log(`typeof arr.concat(): ${typeof newArray}\n`); // Output: object

// ...spread() - is used to expand an array into individual elements
let spreadArray = [...arr];
console.log(`spread array: ${spreadArray}\n`);


// fill(value, start, end) - fills all the elements of an array from a start index to an end index with a static value
arr.fill(0, 1, 4); // fills the array with 0 from index 1 to index 3 (end not included)
console.log(`array after fill: ${arr}`); // Output: [1, 0, 0, 0, 5]
console.log(`typeof arr.fill(): ${typeof arr.fill()}\n`); // Output: object

// flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flattenedArray = nestedArray.flat(2); // flattens the array up to a depth of 2
console.log(`flattened array: ${flattenedArray}`); // Output: [1, 2, 3, 4, 5, 6]
console.log(`typeof nestedArray.flat(): ${typeof flattenedArray}\n`); // Output: object 

console.log(Array.isArray("Saroj"));
console.log(Array.from("Saroj"));
console.log(Array.from({name: "Saroj"}));

