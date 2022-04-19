//document.querySelector(".selector") - повертає перший елемент який відповідає селектору переданому в аргумент
//document.querySelectorAll(".selector") - повертає масив елементів які відповідає селектору переданому в аргумент
//(будьякий елемент).innerHtml - міняє html елемента
//(будьякий елемент).append - додає до елемента
//document.createElement("div") - повертає новостворений елемент типу який переданий в якості парамету


///// HOMEWORK 1 /////

//1// Вставити зображення в блок "mainTable__image":
//img URl = https://academy.stfalcon.com/images/gallery/all/g_pict7.jpg

function imageInsertion () {
  const imgParentContainer = document.body.children[0].children[0].children[1].children[0];
  const imgContainer = document.createElement('img');
  imgParentContainer.innerHTML = '';

  const imgTagAttrs = imgContainer.setAttribute('src', 'https://academy.stfalcon.com/images/gallery/all/g_pict7.jpg');
  imgParentContainer.append(imgContainer);
}

setTimeout(imageInsertion, 4000);

//2// 
