/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (typeof top === 'undefined') return;
  stack.push(value);
  stack.push(top);
}
