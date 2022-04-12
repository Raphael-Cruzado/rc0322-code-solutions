var $message = document.querySelector('h1');

setInterval(changeMessage, 1000, clearInterval);

function changeMessage() {
  if ($message.innerText === '4') {
    $message.innerText = '3';
  } else if ($message.innerText === '3') {
    $message.innerText = '2';
  } else if ($message.innerText === '2') {
    $message.innerText = '1';
  } else if ($message.innerText === '1') {
    $message.innerText = '~Earth Beloowww Us~';
  }
}
