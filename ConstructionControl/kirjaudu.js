var i=0;
var images = [];
var time = 3000;

images[0] ="kuvat/kuva1.jpg";
images[1] = "kuvat/kuva2.jpg";
images[2] = "kuvat/kuva3.jpg";
images[3] = "kuvat/kuva4.jpg";
images[4] ="kuvat/kuva5.jpg";

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

function KirjauduSisaanTyo() {

  var tunnusTyo = document.getElementById('tunnusTyo').value;
  var salisTyo = document.getElementById('salasana').value;

  if(tunnusTyo == "esimerkki" && salisTyo == "esimerkki")
  {
    alert("Kirjautuminen onnistui. Sinut ohjataan lomakesivulle.")
    window.location.href="lomake_tyontekijat.html";
  }
  else {
    alert("Väärä tunnus tai salasana.");
  }
}
function KirjauduSisaanHallinta() {

  var tunnusHallinta = document.getElementById('tunnusHallinta').value;
  var salisHallinta = document.getElementById('sisaanHallinta').value;

  if (tunnusHallinta == "esimerkki" && salisHallinta == "esimerkki") {
    alert("Kirjautuminen onnistui. Sinut ohjataan aloitussivulle.")
    window.location.href="aloitus_hallinta.html";
  }
  else {
    alert("Väärä tunnus tai salasana.");
  }
}
