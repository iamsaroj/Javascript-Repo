const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

// Number Methods/Properties (No Arguments)

.toString() on an instance
console.log(`toString:${balance.toString().length}`);


// Number & Math Methods With Arguments()

.toFixed(digits)
console.log(`toFixed:${balance.toFixed(2)}`);

.toPrecision(digits)
const otherNumbber = 554.9898
console.log(`toPrecision:${otherNumbber.toPrecision(4)}`);

.toLocaleString()
const theHundred = 10000000
console.log(`toLocaleString: ${theHundred.toLocaleString('en-IN')}`);

.valueOf()
console.log(`valueOf:${balance.valueOf()}`);

.toExponential()
console.log(`toExponential:${balance.toExponential()}`);



// Math Methods/Properties (No Arguments)
console.log(Math);
console.log(`E_Value:${Math.E}`); // Euler's constant: 2.718281828459045

console.log(`PI_Value:${Math.PI}`); // approx: 3.141592653589793

console.log(`LN2:${Math.LN2}`); // 0.6931471805599453

console.log(`LN10:${Math.LN10}`); // 2.302585092994046


// Math Methods (With Arguments)

.round()
console.log(`round:${Math.round(4.6)}`);

.ceil()
console.log(`ceil:${Math.ceil(4.2)}`);

.floor()
console.log(`floor:${Math.floor(4.9)}`);

.abs(); // Returns the absolute (positive distance) value of any given number.
console.log(`ABS:${Math.abs(-5)}`);

.trunc(); // Cuts off all decimal places entirely, leaving only the raw integer portion.
console.log(`truncValue:${Math.trunc(-4.9)}`);

power(base, exponent) // Calculates the base number raised to the power of the exponent parameter value.
console.log(`powerValue:${Math.pow(2, 3)}`);

squareRoot() 
console.log(`squareRootValue:${Math.sqrt(25)}`);

.min()
console.log(`minValue:${Math.min(4,3,6,8)}`);

.max()
console.log(`maxValue:${Math.max(2,4,6,8)}`);


// Chess Dice Game Rule
console.log(`randomValue:${Math.random()}`);

console.log(`${(Math.random()*10)}`);

console.log((Math.random()*10) + 1);

console.log(Math.floor(Math.random()*6) + 1);


const minValue = 10
const maxValue = 20

console.log(Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue);











