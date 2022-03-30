var $form1 = document.forms[0];
var $name = $form1.elements[0];
var $email = $form1.elements[1];
var $text = $form1.elements[2];

$form1.addEventListener('submit', submitInfo);

function submitInfo(event) {
  event.preventDefault();
  var name = $name.value;
  var email = $email.value;
  var text = $text.value;
  var infoObj = { name, email, text };
  console.log(infoObj);
}
