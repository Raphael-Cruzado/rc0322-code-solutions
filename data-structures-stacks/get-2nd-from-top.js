/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (typeof stack.pop() === 'undefined') return;
  const next = stack.peek();
  stack.push(stack.pop);
  return next;
}
