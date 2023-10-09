# Website Name

Shadow Studio - Event Management

# Live Website Link

https://ms09-event-management.web.app/

# Website Features

• Users Can Register and Login in the Website Using Email Password

• Users Can Register and Login in the Website via Google

• Users Can See Details of Each Events if Logged In

• Users Can View Their Profile Page if Logged In

• Users Can View Special Blog Page if Logged In

# Questions and Answers

1. Write the correct answer from the following options and give an explanation (2-5 lines).

let greeting;
greetign = {};
console.log(greetign);

A: {}
B: ReferenceError: greetign is not defined
C: undefined

## Answer is B

## First a variable is set in the name of greeting without assigning any value, later the value of misspelled "greetign" is assigned as empty object. This will result in referenceError as the value of "greetign" is not assigned

2. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sum(a, b) {
   return a + b;
   }

sum(1, "2");

A: NaN
B: TypeError
C: "12"
D: 3

## The correct answer is C: "12".

## In JavaScript, when using the "+" operator with one or both operands as strings, it performs string concatenation. In this case, value of a 1 is a number, and the value of b is "2", which is a string. JavaScript performs type coercion, converts the number 1 to a string and then concatenates the two strings, resulting in the string "12".

3. Write the correct answer from the following options and give an explanation (2-5 lines).
   const food = ["🍕", "🍫", "🥑", "🍔"];
   const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

## The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

## In this code, initially created an array food with four food emojis. Then, created an object info with a property favoriteFood set to the first element of the food array, which is "🍕". Then, updated the favoriteFood property of the info object to "🍝". However, this change doesn't affect the original food array, The reason the change to the favoriteFood property of the info object doesn't affect the original food array is due to how objects and primitive values work in JavaScript. In JavaScript, strings, like "🍕" and "🍝", are primitive values. When assigned a primitive value to a variable or a property of an object, you are working with a copy of that value. Changes to the copy do not affect the original value. so food remains unchanged, and the output is ['🍕', '🍫', '🥑', '🍔'].

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   function sayHi(name) {
   return `Hi there, ${name}`;
   }

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError

## The correct answer is: B: Hi there, undefined

## In the sayHi function, there is a parameter name, which means it expects an argument to be passed when calling the function. However, when called sayHi() without providing an argument, JavaScript assigns the value undefined to the name parameter. Therefore, the function returns "Hi there, undefined," where undefined is the value of the name parameter.

5. Write the correct answer from the following options and give an explanation (2-5 lines).

let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
if (num) count += 1;
});

console.log(count);

A: 1
B: 2
C: 3
D: 4

## The correct answer is: C: 3

## The forEach method iterates through each element of the nums array and executes the provided callback function for each element. In JavaScript, the number 0 is considered a falsy value in a conditional statement, so when num is 0, the condition if (num) evaluates to false, and count is not incremented. However, for the values 1, 2, and 3, the condition is true, and count is incremented for each of these values. Therefore, count becomes 3 after the forEach loop, and result is logged to the console.
