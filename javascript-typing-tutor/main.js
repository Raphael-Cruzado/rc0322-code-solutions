var $spanCol = document.querySelector('.span-content');
var $spanArray = document.querySelectorAll('span');

document.addEventListener('DOMContentLoaded', function (event) {
  console.log('document loaded');
});

let i = 0;

document.addEventListener('keydown', function (e) {
  console.log(e);
  console.log(e.key);

  if (e.key === $spanArray[i].innerText) {
    $spanArray[i].className = 'correct';
    i++;
    $spanArray[i].className = 'under-line';
  } else if (e.key !== $spanArray[i].innerText) {
    $spanArray[i].className = 'incorrect under-line';
  }

});
