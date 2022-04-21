//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету


///// HOMEWORK 1 /////

//Task 1// Вставити зображення в блок "mainTable__image":

function imageInsertion () {
  const imgParentContainer = document.body.children[0].children[0].children[1].children[0];
  const imgContainer = document.createElement('img');
  imgParentContainer.innerText = '';

  const imgTagAttrs = imgContainer.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png');
  imgParentContainer.append(imgContainer);

  /*// execution check
  console.log('imageInsertion - DONE')*/
}

/* commenting this function execution as it is run below, in task #4
// setTimeout(imageInsertion, 4000);
 */


//Task 2// За допомогою маніпуляцій DOM змінити title та текст в блоці "mainTable__header":


//Task 3// Заверстати довільний html в блоці "mainTable__content". Самий простенький, заголовок, трохи тексту, список скілів:

function myRightSection () {
// my right content container:
  const contentBox = document.body.children[0].children[0].children[1].children[1];

// removing the default text:
  contentBox.innerText = '';

// assembling a new content table:
  const newContentTable = document.createElement('table');
  contentBox.append(newContentTable);
  document.body.children[0].children[0].children[1].children[1].children[0].setAttribute('id', 'table');

  const newCTtbody = document.createElement('tbody');
  newContentTable.append(newCTtbody);

  const newCTth = document.createElement('th');
  newCTtbody.append(newCTth);
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[0].setAttribute('id', 'th');
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[0].setAttribute('colspan', '2');
  newCTth.innerText = 'My attempt to join HTML & JS';

  const newCTtr1 = document.createElement('tr');
  newCTtbody.append(newCTtr1);
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('id', 'tr1');
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('class', 'mainTable__contentBox__tr1');
  const newCTtd1_1 = document.createElement('td');
  newCTtr1.append(newCTtd1_1);
  newCTtd1_1.innerText = '1_1';
  const newCTtd1_2 = document.createElement('td');
  newCTtr1.append(newCTtd1_2);
  newCTtd1_2.innerText = '1_2';

  const newCTtr2 = document.createElement('tr');
  newCTtbody.append(newCTtr2);
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('id', 'tr2');
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('class', 'mainTable__contentBox__tr2');
  const newCTtd2_1 = document.createElement('td');
  newCTtd2_1.innerText = '2_1';
  newCTtr2.append(newCTtd2_1);
  const newCTtd2_2 = document.createElement('td');
  newCTtd2_2.innerText = '2_2';
  newCTtr2.append(newCTtd2_2);

  const newCTtr3 = document.createElement('tr');
  newCTtbody.append(newCTtr3);
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('id', 'tr3');
  document.body.children[0].children[0].children[1].children[1].children[0].children[0].children[1].setAttribute('class', 'mainTable__contentBox__tr3');
  const newCTtd3_1 = document.createElement('td');
  newCTtd3_1.innerText = '3_1';
  newCTtr3.append(newCTtd3_1);
  const newCTtd3_2 = document.createElement('td');
  newCTtd3_2.innerText = '3_2';
  newCTtr3.append(newCTtd3_2);
}

//Task 4// завдання з зірочкою: за допомогою javascript змінити ширину  mainTable__content на ширину зображення в блоці mainTable__image:
function neighboringCellAdjustment () {
  // collecting the desired image's height & weight to set them as the attributes to the parent container:
  const imgW = document.body.children[0].children[0].children[1].children[0].children[0].width;
  const imgH = document.body.children[0].children[0].children[1].children[0].children[0].height;

  let imgBoxCell = document.body.children[0].children[0].children[1].children[0];
  imgBoxCell.setAttribute('width', imgW);
  imgBoxCell.setAttribute('height', imgH);

  // adjusting the bordering cell and table caption width & height:
  const borderingCell = document.body.children[0].children[0].children[1].children[1];
  borderingCell.setAttribute('width', imgW);
  borderingCell.setAttribute('height', imgH);

  /* solved by commenting .mainTable in style.css:
  let tableCaption = document.body.children[0].children[0].children[0].children[0];
  const tcWidth = imgW*2;
  tableCaption.setAttribute('width', tcWidth);*/

  /*// execution check:
  console.log('neighboringCellAdjustment - DONE')*/
}

function imgBoxAdjustment (imgIns, neighCell, rightSection) {
  // creating and adding the <img>:
  setTimeout(imgIns, 2000);

  // adjusting the neighboring <td>:
  setTimeout(neighCell, 4000);

  // my right content section creation <table>:
  setTimeout(rightSection, 6000);
}

imgBoxAdjustment (imageInsertion, neighboringCellAdjustment, myRightSection);
