// =========================
// JavaScript Fundamentals
// =========================

// 1. Variables
// Variables store data that we can use and manipulate
// 1. Scope
// var: var is function-scoped. This means if you declare a variable with var inside a function, it’s only accessible within that function. However, if you declare it outside of any function, it’s globally scoped, making it accessible anywhere in the code.
// let: let is block-scoped. This means it’s limited to the block (e.g., inside {} braces) in which it’s defined, whether that’s within an if statement, loop, or function.
// const: const is also block-scoped, similar to let, and is limited to the block in which it is defined.
// Declare a variable using 'var'
var customerName = "John Doe";

// Declare a variable using 'let'
let orderTotal = 0;

// Declare a constant using 'const' (cannot be changed later)
const isMember = true;

function testScope() {
    if (true) {
      var x = "I'm defined with var";
      let y = "I'm defined with let";
      const z = "I'm defined with const";
    }
    console.log(x); // Accessible because var is function-scoped
    console.log(y); // Error: y is not defined (block-scoped)
    console.log(z); // Error: z is not defined (block-scoped)
  }
 // testScope();
  

// Reassign variable
orderTotal = 15.99;

// Variable Naming (following naming conventions)
let $discount = 5;
let _memberStatus = "Gold";

// 2. Data Types
// JavaScript data types include numbers, strings, booleans, and objects

// Number
let price = 25.5;

// BigInt (for very large numbers)
let bigNumber = 9007199254740991n;

// String (text values)
let productName = "Espresso";

// Boolean (true/false values)
let isAvailable = true;

// Null (explicitly means "no value")
let discount = null;

// Undefined (variable declared but no value assigned yet)
let stockCount;

// Non-Primitive Data Type: Object
// An object can hold multiple related values
let order = {
  productName: "Latte",
  quantity: 2,
  price: 4.5
};

// 3. Operators
// Operators perform actions on data

// Math Operators
let a = 5;
let b = 3;
console.log(a + b); // Addition: 8
console.log(a - b); // Subtraction: 2
console.log(a * b); // Multiplication: 15
console.log(a / b); // Division: 1.666...

// Assignment Operators
let total = 10;
total += 5;  // Equivalent to total = total + 5
total -= 2;  // Equivalent to total = total - 2

// Increment and Decrement
let count = 1;
count++;  // Increases count by 1
count--;  // Decreases count by 1

// Comparison Operators
let orderPrice = 20;
console.log(orderPrice == 20);   // true, value is equal
console.log(orderPrice === "20"); // false, type is not equal
console.log(orderPrice != 15);   // true, value is not equal
console.log(orderPrice > 10);    // true, greater than

// 4. Conditional Branching
// Code that makes decisions based on conditions

// if Statement
if (orderTotal > 15) {
  console.log("You qualify for a discount!");
}

// else if and else
let orderSize = 10;

if (orderSize > 15) {
  console.log("Large order");
} else if (orderSize > 5) {
  console.log("Medium order");
} else {
  console.log("Small order");
}

// switch Statement
let drinkSize = "medium";

switch (drinkSize) {
  case "small":
    console.log("Small size selected");
    break;
  case "medium":
    console.log("Medium size selected");
    break;
  case "large":
    console.log("Large size selected");
    break;
  default:
    console.log("Invalid size");
}

// 5. Logical Operators
// Used to combine multiple conditions

// OR (||) - true if at least one condition is true
let hasCoupon = true;

if (isMember || hasCoupon) {
  console.log("You get a discount!");
}

// AND (&&) - true if both conditions are true
let isPremiumMember = true;

if (orderTotal > 15 && isPremiumMember) {
  console.log("You qualify for a premium discount!");
}

// NOT (!) - reverses the truth value
let isOutOfStock = false;

if (!isOutOfStock) {
  console.log("Item is available for order.");
}
