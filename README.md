# Node.js Unhandled Division by Zero Bug

This repository demonstrates a common yet easily overlooked error in Node.js: unhandled division by zero. The `bug.js` file contains the buggy code, while `bugSolution.js` provides a corrected version.

The bug occurs when the function attempts to divide by zero, resulting in `Infinity` or an error, depending on the Node.js version.  The solution adds a check to prevent this.

## How to reproduce

1. Clone this repository.
2. Run `node bug.js`. Observe the error.
3. Run `node bugSolution.js`. Observe the correct output.

This example highlights the importance of robust error handling in Node.js applications.