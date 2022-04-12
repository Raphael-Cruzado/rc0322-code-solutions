var $message = document.querySelector('h1');

setTimeout(changeMessage, 2000);

function changeMessage() {
  if ($message.innerText === '...') {
    $message.innerText = 'Hello There';
  }
}
