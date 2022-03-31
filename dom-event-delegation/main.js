var $taskList = document.querySelector('.task-list');
$taskList.addEventListener('click', callBack);

function callBack(e) {
  console.log(e.target);
  console.log(e.target.tagName);
  if (e.target && e.target.tagName === 'BUTTON') {
    var closestElement = e.target.closest('.task-list-item');
    console.log(closestElement);
    closestElement.remove();
  }
}
