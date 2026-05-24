// Current Date and Time (Uses your system's local time zone)
const now = new Date()

// From a Specific Date String (ISO 8601 standard format recommended)
let specificDate = new Date()
console.log(specificDate);


// ALL ".get" INSTANCE METHODS (Data Extraction)
console.log(`getTodayDay: ${specificDate.getDay()}`);
console.log(`getTodayDate: ${specificDate.getDate()}`);
console.log(`getMonth: ${specificDate.getMonth()}`);
console.log(`getFullYear: ${specificDate.getFullYear()}`);

console.log(`getTime: ${specificDate.getTime()}`);
console.log(`getHours: ${specificDate.getHours()}`);
console.log(`getMinutes: ${specificDate.getMinutes()}`);
console.log(`getSeconds: ${specificDate.getSeconds()}`);
console.log(`getMilliseconds: ${specificDate.getMilliseconds()}`);
console.log(`getTimezoneOffset: ${specificDate.getTimezoneOffset()}`);

console.log(`getUTCDay: ${specificDate.getUTCDay()}`);
console.log(`getUTCDate: ${specificDate.getUTCDate()}`);
console.log(`getUTCMonth: ${specificDate.getUTCMonth()}`);
console.log(`getUTCFullYear: ${specificDate.getUTCFullYear()}`);

console.log(`getUTCHours: ${specificDate.getUTCHours()}`);
console.log(`getUTCMinutes: ${specificDate.getUTCMinutes()}`);
console.log(`getUTCSeconds: ${specificDate.getUTCSeconds()}`);
console.log(`getUTCMilliseconds: ${specificDate.getUTCMilliseconds()}`);


// .set; ALL ".set" METHODS (Modifying Values)
console.log(`setDate: ${specificDate.setDate(25)}`);
console.log(`setFullYear: ${specificDate.setFullYear(2030)}`);
console.log(`setMonth: ${specificDate.setMonth(11)}`);

console.log(`setTime: ${specificDate.setTime(1716562380000)}`);
console.log(`setHours: ${specificDate.setHours(10)}`);
console.log(`setMinutes: ${specificDate.setMinutes(55)}`);
console.log(`setSeconds: ${specificDate.setSeconds(30)}`);
console.log(`setMilliseconds: ${specificDate.setMilliseconds(250)}`);

console.log(`setUTCDate: ${specificDate.setUTCDate(12)}`);
console.log(`setUTCFullYear: ${specificDate.setUTCFullYear(2029)}`);
console.log(`setUTCHours: ${specificDate.setUTCHours(14)}`);
console.log(`setUTCMilliseconds: ${specificDate.setUTCMilliseconds(800)}`);
console.log(`setUTCMinutes: ${specificDate.setUTCMinutes(15)}`);
console.log(`setUTCMonth: ${specificDate.setUTCMonth(5)}`);
console.log(`setUTCSeconds: ${specificDate.setUTCSeconds(45)}`);


// ".to" METHODS (Formatting Output Strings)

.toJSON()
console.log(`toJSON: ${specificDate.toJSON()}`);

.toISOString()
console.log(`toISOString: ${specificDate.toISOString()}`);

.toLocaleString()
console.log(`toLocaleString: ${specificDate.toLocaleString()}`);

.toDateString()
console.log(`toDateString: ${specificDate.toDateString()}`);

.toLocaleDateString()
console.log(`toLocaleDateString: ${specificDate.toLocaleDateString()}`);

.toTimeString()
console.log(`toTimeString: ${specificDate.toTimeString()}`);

.toLocaleTimeString()
console.log(`toLocaleTimeString: ${specificDate.toLocaleTimeString()}`);

.toString()
console.log(`toString: ${specificDate.toString()}`);

.toUTCString()
console.log(`toUTCString: ${specificDate.toUTCString()}`);

typeof evaluation
console.log(`typeof evaluation: ${typeof specificDate}`); //object

.valueOf()
console.log(`valueOf: ${specificDate.valueOf()}`);



// DATE PROTOTYPE OBJECT 

let myBirthDate = new Date(2002, 2, 19, 4, 5, 55, 500) // Initializing a fixed test date: Tuesday, March 19, 2002 at 4:05:55 AM and 500 milliseconds.
console.log(`myBirthDate: ${myBirthDate.toLocaleString()}`);

let CreatedDate = new Date(2026, 0, 19)
console.log(`CreatedDate: ${CreatedDate.toLocaleString()}`);

let myCreatedDate = new Date("2002-03-19")
console.log(`myCreatedDate: ${myCreatedDate.toLocaleString()}`);


let myTimeStamp = Date.now()
console.log(`Current Timestamp:: ${myTimeStamp}`);
console.log(`Birthdate Epoch: ${myCreatedDate.getTime()}`);
console.log(`Unix Seconds Epoch: ${Math.floor(Date.now()/1000)}`); // milisecond


let newDate = new Date()
console.log(newDate);
console.log(`Month: ${newDate.getMonth() + 1}`); // month count from 0 Indexing)
console.log(`Day: ${newDate.getDay()}`);