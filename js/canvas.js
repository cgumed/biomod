var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');





var bone = new Image();
bone.src = 'https://i.ibb.co/P1JkJDP/flow.png';



var linkText;
var inLink = false;

bone.onload = function() {
  canvas.width = 720;
  canvas.height = 504;
  c.drawImage(bone,0,0, 720, 504);

  canvas.addEventListener('mousemove', on_mousemove, false);
  canvas.addEventListener('click', on_click, false);
}



function on_mousemove(e) {
  var x, y;
  x = e.offsetX;
  y = e.offsetY;
  console.log(x);
  if(y >= 10 && y <= 132) {
    if(x >= 96 && x <= 228){
      e.target.style.cursor = 'pointer';
      linkText = '#one';
      inLink = true;
    }else if(x >= 280 && x <= 405) {
      e.target.style.cursor = 'pointer';
      linkText = '#three';
      inLink = true;
    }else if(x >= 488 && x <= 622) {
      e.target.style.cursor = 'pointer';
      linkText = '#five';
      inLink = true;
    }
    else {
      e.target.style.cursor = '';
      inLink = false;
    }
  }else if(y >= 373 && y <= 496) {
    if(x >= 180 && x <= 313){
      e.target.style.cursor = 'pointer';
      linkText = '#two';
      inLink = true;
    }else if(x >= 394 && x <= 522) {
      e.target.style.cursor = 'pointer';
      linkText = '#four';
      inLink = true;
    }else if(x >= 22 && x <= 138) {
      e.target.style.cursor = 'pointer';
      linkText = '#simulation';
      inLink = true;
    }else {
      e.target.style.cursor = '';
      inLink = false;
    }
  }else {
    e.target.style.cursor = '';
    inLink = false;
  }
  if(y >= 285 && y <= 339) {
    if(x >= 524 && x <= 682) {
      e.target.style.cursor = 'pointer';
      linkText = '#conclusion';
      inLink = true;
    }else {
      e.target.style.cursor = '';
      inLink = false;
    }
  }
  /* if(y >= 110 && y<= 180){
    if(x >= 96 && x <= 228){
      e.target.style.cursor = 'pointer';
      linkText = '#one';
      inLink = true;
    }else if(x >= 317 && x <= 394) {
      e.target.style.cursor = 'pointer';
      linkText = '#three';
      inLink = true;
    }else if(x >= 537 && x <= 618) {
      e.target.style.cursor = 'pointer';
      linkText = '#five';
      inLink = true;
    }else {
      e.target.style.cursor = '';
      inLink = false;
    }
  }else if(y >= 394 && y <= 462) {
    if(x >= 205 && x <= 285) {
      e.target.style.cursor = 'pointer';
      linkText = '#two';
      inLink = true;
    }else if(x >= 434 && x<= 508) {
      e.target.style.cursor = 'pointer';
      linkText = '#four';
      inLink = true;
    }else {
      e.target.style.cursor = '';
      inLink = false;
    }
  }else {
    e.target.style.cursor = '';
    inLink = false;
  } */
}


function on_click(event) {
  if(inLink) {
    $('html, body').animate({
      scrollTop: $(linkText).offset().top - 80
    })
  }
}