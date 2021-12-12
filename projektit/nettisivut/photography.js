var i=0;
var images = [];
var time = 3000;

images[0] ="kuvat/1.jpg";
images[1] = "kuvat/2.jpg";
images[2] = "kuvat/torro.jpg";
images[3] = "kuvat/15.jpg";
images[4] ="kuvat/lehdet.jpg";
images[5] = "kuvat/sumujarvi.jpg";
images[6] ="kuvat/swamp.jpg";
images[7] ="kuvat/barn.jpg";


function changeImg() {
  document.slides.src = images[i];

  if (i < images.length -1) {
    i++
  }
  else {
    i = 0;
  }

  setTimeout("changeImg()", time)
}

window.onload = changeImg;
