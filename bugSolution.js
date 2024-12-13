```javascript
function myFunc(a, b) {
  if (a === 0 || b === 0) {
    return 0; // Handles both a === 0 and b === 0
  }
  return a / b; 
}

console.log(myFunc(10, 0)); // Returns 0
console.log(myFunc(0, 10)); // Returns 0
console.log(myFunc(10,2)); //Correctly returns 5
```