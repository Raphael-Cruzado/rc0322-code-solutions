var $userList = document.querySelector('#user-list');

function getName(name) {
  var oReq = new XMLHttpRequest();
  oReq.open('GET', 'https://jsonplaceholder.typicode.com/users');
  oReq.responseType = 'json';

  oReq.addEventListener('load', function () {
    console.log(oReq.status);
    console.log(oReq.response);
    for (let i = 0; i < oReq.response.length; i++) {
      var newLi = document.createElement('li');
      newLi.textContent = oReq.response[i].name;
      $userList.appendChild(newLi);
    }
  });

  oReq.send();
}

getName('Leanne Graham');
