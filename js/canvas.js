var canvas = document.getElementById("myCanvas");
var c = canvas.getContext('2d');





var bone = new Image();
bone.src = '../img/flow1.png';

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
  if(y >= 110 && y<= 180){
    if(x >= 91 && x <= 170){
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
  }
}

function on_click(event) {
  if(inLink) {
    $('html, body').animate({
      scrollTop: $(linkText).offset().top - 80
    })
  }
}