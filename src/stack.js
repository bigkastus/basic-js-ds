const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  push( element ) {
    // throw new NotImplementedError('Not implemented');
    // let arr = []
    const stack = new Stack();
    return stack.push(element)
  }

  pop() {
    // throw new NotImplementedError('Not implemented');
    const stack = new Stack();
    return stack.at[-1]
  }

  peek() {
    // throw new NotImplementedError('Not implemented');
    const stack = new Stack();
    return stack[0]
  }
}

module.exports = {
  Stack
};
