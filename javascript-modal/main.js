var $survey = document.getElementsByClassName('survey');
var $modal = document.querySelector('.modal');
var $noButton = document.querySelector('.nobutton');
var $backDrop = document.getElementsByClassName('container-modal');

$modal.addEventListener('click', toggleSurvey);
$noButton.addEventListener('click', toggleNo);

function toggleSurvey(event) {
  for (let i = 0; i < $survey.length; i++) {
    $survey[i].style.display = 'flex';
    $backDrop[i].classList.toggle('container-modal-2');
  }
}

function toggleNo(event) {
  for (let i = 0; i < $survey.length; i++) {
    $survey[i].style.display = 'none';
    $backDrop[i].classList.toggle('container-modal-2');
  }
}
