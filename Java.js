

function openbox(id){
    display = document.getElementById(id).style.display;

    if(display=='none'){
       document.getElementById(id).style.display='block';
    }else{
       document.getElementById(id).style.display='none';
    }
}



//*переключатель изображений*/
var image = null;
var i=0;

var imgs=new Array('http://hronika.info/uploads/posts/2016-01/1452736497_yumor12.jpg','http://orig12.deviantart.net/95e6/f/2015/354/5/0/5025c58061abb2b5f605924f3b90fa69-d9kswcy.jpg', 'http://cs622030.vk.me/v622030198/116a6/epNO4kDDVAY.jpg'); 

function onDocumentReady() {
  image = document.getElementById("image");
  image.style.height = '300px'

}
  
function imgsrc() {
  i++;
  if (i == imgs.length)
    i = 0;
  
  image.src=imgs[i];  
}

document.addEventListener("DOMContentLoaded", onDocumentReady);