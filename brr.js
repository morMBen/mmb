// 1. &&= oprtator:
let a = 2;
let b = 3;
a &&= b;
console.log(a) // result = 3 
// If the value of 'a' was 0 (falsy) the value of 'b' would not be set.
// Equivalent to the following example:
if (a) {
    a = b
}

// 2. ||= operator:
let a = 2;
let b = 3;

a ||= b;
console.log(a); // result = 2
// Because a is not a falsy value, b is not applied into a.
// Equivalent to the following example:
if (!a) {
    a = b;
}


// 3. ??= oprtator:
let a;
let b = 3;
a ??= b;
console.log(a) // result = 3; 
// It can be seen that initially a is not initialized, meaning its value is undefined. Therefore the value of b is applied to a.

// Equivalent to the following example:
if (a === undefined || a === null) {
    a = b;
}
