var $survey = document.getElementsByClassName('survey');
var $modal = document.querySelector('.modal');
var $noButton = document.querySelector('.nobutton');

$modal.addEventListener('click', toggleSurvey);
$noButton.addEventListener('click', toggleSurvey);

function toggleSurvey(event) {
  for (let i = 0; i < $survey.length; i++) {
    $survey[i].style.display = 'flex';
  }
}
