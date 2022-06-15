/* exported postpone */

function postpone(queue) {
  if (typeof queue.peek() === 'undefined') {
    return;
  }
  const firstItem = queue.dequeue();
  queue.enqueue(firstItem);
}
