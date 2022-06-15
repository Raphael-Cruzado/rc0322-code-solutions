/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  while (index > 0) {
    queue.enqueue(queue.dequeue());
    index--;
  }
  return queue.dequeue();
}
