var $tabContainer = document.querySelector('.tab-container');

var $tabNodes = document.querySelectorAll('.tab');

var $viewNodes = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', function (e) {
  if (e.target.matches('.tab')) {
    for (let i = 0; i < $tabNodes.length; i++) {
      if ($tabNodes[i] === e.target) {
        $tabNodes[i].className = 'tab active';
      } else {
        $tabNodes[i].className = 'tab';
      }
    }

    var dataView = e.target.getAttribute('data-view');

    for (let i = 0; i < $viewNodes.length; i++) {
      if ($viewNodes[i].getAttribute('data-view') === dataView) {
        $viewNodes[i].className = 'view';
      } else {
        $viewNodes[i].className = 'view hidden';
      }
    }
  }
});
