function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name);
  console.log(event.target.value);
}

var $name1 = document.forms[0].elements[0];
var $name2 = document.forms[0].elements[1];
var $textArea = document.forms[0].elements[2];

$name1.addEventListener('focus', handleFocus);
$name1.addEventListener('blur', handleBlur);
$name1.addEventListener('input', handleInput);

$name2.addEventListener('focus', handleFocus);
$name2.addEventListener('blur', handleBlur);
$name2.addEventListener('input', handleInput);

$textArea.addEventListener('focus', handleFocus);
$textArea.addEventListener('blur', handleBlur);
$textArea.addEventListener('input', handleInput);
