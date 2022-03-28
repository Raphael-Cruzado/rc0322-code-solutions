function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var buttonClick = document.querySelector('.click-button');
buttonClick.addEventListener('click', handleClick);

function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var buttonHover = document.querySelector('.hover-button');
buttonHover.addEventListener('click', handleMouseover);

function handleDoubleClick(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var doubleClick = document.querySelector('.double-click-button');
doubleClick.addEventListener('dblclick', handleDoubleClick);
