```javascript
function myFunc(a, b) {
  if (a === 0) {
    return 0; // Correct handling for a === 0
  }
  return a / b; // Potential error if b is 0
}

console.log(myFunc(10, 0)); // Throws an error: Infinity
console.log(myFunc(0, 10)); // Correctly returns 0
console.log(myFunc(10,2)); //Correctly returns 5
```