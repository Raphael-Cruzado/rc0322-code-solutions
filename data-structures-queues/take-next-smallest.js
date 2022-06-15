/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  let smallest = queue.dequeue();
  while (smallest > queue.peek()) {
    queue.enqueue(smallest);
    smallest = queue.dequeue();
  }
  return smallest;
}
