//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету


///// HOMEWORK 1 /////

//Task 1// Вставити зображення в блок "mainTable__image":
//img URL = https://www.ontarioparks.com/images/headers/parks/summer/1200/longpoint.jpg

function imageInsertion () {
  let imgParentContainer = document.body.children[0].children[0].children[1].children[0];
  let imgContainer = document.createElement('img');
  imgParentContainer.innerHTML = '';

  let imgTagAttrs = imgContainer.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/DOM-model.svg/220px-DOM-model.svg.png');
  imgParentContainer.append(imgContainer);

  /*// execution check
  console.log('imageInsertion - DONE')*/
}

/* commenting this function execution as it is run below, in task #4
// setTimeout(imageInsertion, 4000);
 */

//Task 2// За допомогою маніпуляцій DOM змінити title та текст в блоці "mainTable__header":


//Task 3// Заверстати довільний html в блоці "mainTable__content". Самий простенький, заголовок, трохи тексту, список скілів:


//Task 4// завдання з зірочкою: за допомогою javascript змінити ширину  mainTable__content на ширину зображення в блоці mainTable__image:
function neighboringCellAdjustment () {
  // collecting the desired image's height & weight to set them as the attributes to the parent container:
  let imgW = document.body.children[0].children[0].children[1].children[0].children[0].width;
  let imgH = document.body.children[0].children[0].children[1].children[0].children[0].height;

  console.log(`${imgH} / ${imgW}`);

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

function imgBoxAdjustment (imgIns, neighCellAdj) {
  // creating and adding the <img>:
  setTimeout(imgIns, 2000);

  // adjusting the neighboring <td>:
  setTimeout(neighCellAdj, 4000);
}

imgBoxAdjustment (imageInsertion, neighboringCellAdjustment);
