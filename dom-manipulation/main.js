var storeVar = 0;

var $hotButton = document.querySelector('.hot-button');
var $counter = document.querySelector('.click-count');

$hotButton.addEventListener('click', clickCounter);

function clickCounter(event) {
  storeVar++;
  var temp;
  if (storeVar < 4) {
    temp = 'cold';
  } else if (storeVar < 7) {
    temp = 'cool';
  } else if (storeVar < 10) {
    temp = 'tepid';
  } else if (storeVar < 13) {
    temp = 'warm';
  } else if (storeVar < 16) {
    temp = 'hot';
  } else {
    temp = 'nuclear';
  }

  $hotButton.className = 'hot-button ' + temp;
  $counter.innerHTML = 'Clicks: ' + storeVar;
}
