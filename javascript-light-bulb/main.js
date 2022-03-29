var $bulbOn = document.querySelector('.circle');
var $dimRoom = document.querySelector('.room');

$bulbOn.addEventListener('click', switchOne);
$bulbOn.addEventListener('click', dimRoom);

function switchOne(event) {
  $bulbOn.classList.toggle('circle-2');
}

function dimRoom(event) {
  $dimRoom.classList.toggle('dim-room');
}
