// Initial Greetings; Outputs standard welcoming messages to the console log stream.
console.log("Hi there!"); 
console.log("I am excited to talk to you.");

// Variable Declaration and Initialization
// Declares 'bot' using 'let' so its value can change, then initializes it.
let bot;
bot = "teacherBot";

// Declares and initializes the botLocation tracking variable.
let botLocation = "the universe";

console.log("Allow me to introduce myself.");

// String Concatenation using the '+' operator
// Merges text fragments with the current 'bot' value ("teacherBot").
const botIntroduction = "My name is " + bot + ".";
console.log(botIntroduction); // "My name is teacherBot."

// Merges text fragments with the 'botLocation' value ("the universe").
const botLocationSentence = "I live in " + botLocation + ".";
console.log(botLocationSentence); // "I live in the universe."

// First Reassignment of 'bot'
// Overwrites "teacherBot" and replaces it with "professorBot".
bot = "professorBot";

// Concatenates using the newly updated 'bot' value.
const nicknameIntroduction = "My nickname is " + bot + ".";
console.log(nicknameIntroduction); // "My nickname is professorBot."

//  Second Reassignment of 'bot'
// Overwrites "professorBot" and replaces it with "awesomeTeacherBot".
bot = "awesomeTeacherBot";

// Concatenates using the final updated value of 'bot'.
const newNicknameGreeting = "I love my nickname but I wish people would call me " + bot + ".";
console.log(newNicknameGreeting); // "I love my nickname but I wish people would call me awesomeTeacherBot."

// Final Static Profile Variables
// Declares 'favoriteSubject' using 'const' because this value won't change.
const favoriteSubject = "Computer Science";

const favoriteSubjectSentence = "My favorite subject is " + favoriteSubject + ".";
console.log(favoriteSubjectSentence); // "My favorite subject is Computer Science."

// Farewell
// Outputs a final static closing message to the user.
console.log("Well, it was nice to talk to you. Have a nice day!");
