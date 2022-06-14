/* exported takeTop */

function takeTop(stack) {
  const top = stack.peek();
  stack.pop();
  return top;
}
