var $survey = document.querySelector('.survey');

var $modal = document.querySelector('.modal');
var $noButton = document.querySelector('.nobutton');
var $backDrop = document.querySelector('.container-modal');

$modal.addEventListener('click', function (e) {
  if ($survey.className === 'survey') {
    $survey.className = 'survey-2';
    $backDrop.className = 'container-modal-2';
  }
});

$noButton.addEventListener('click', function (e) {
  if ($survey.className === 'survey-2') {
    $survey.className = 'survey';
    $backDrop.className = 'container-modal';
  }
});
