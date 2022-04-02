
var $spanArray = document.querySelectorAll('span');

document.addEventListener('DOMContentLoaded', function (event) {

});

let i = 0;

document.addEventListener('keydown', function (e) {
  if (e.key === $spanArray[i].innerText) {
    $spanArray[i].className = 'correct';
    i++;
    $spanArray[i].className = 'under-line';
  } else if (e.code === 'Space') {
    $spanArray[i].className = '';
    i++;
    $spanArray[i].className = 'under-line';
  } else if (e.key !== $spanArray[i].innerText) {
    $spanArray[i].className = 'incorrect under-line';
  }
});
