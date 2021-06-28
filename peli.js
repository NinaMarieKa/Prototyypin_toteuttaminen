// ruudut
var numSquares = 6;
// ruutujen värit
var colors = ["rgb(255, 0, 0)", "rgb(255, 0, 255)", "rgb(255, 225, 0)", "rgb(0, 0, 255)", "rgb(0, 255, 255)", "rgb(0, 255, 0)"];
// Pelin valitsema oletusväri
pickedColor = colors[3];
for (i=0; i <= squares.length; i++) {squares[i].style.backgroundColor = colors[i]}
squares[i].addEventListener('click', function() {
  var clickedColor = this.style.backgroundColor;
}
// Jos käyttäjä valitsi värin oikein..
 if (pickedColor === clickedColor) {
  changeColors(pickedColor);
}
// jos käyttäjä valitsi väärin..
else {
   this.style.backgroundColor = "#232323"; messageDisplay.text = "Väärä valinta!";
}
var squares = document.querySelectorAll(".square");
  for (i=0; i<squares.length; i++) {squares[i].style.backgroundColor = colors[i]}
  for (i=0; i<= squares.length; i++) {squares[i].addEventListener('click', function() {alert('Ruutua klikattu');});}
  for (i=0; i<= squares.length; i++) {squares[i].addEventListener('click', function()});}
var resetButton = document.querySelector("#reset");
// tason valinta napit
var modeButtons = document.querySelectorAll(".taso");

function changeColors(colors) {
  // jos valinta on oikein
  for (i=0; i<= squares.length; i++) {squares[i].style.backgroundColor = colors; messageDisplay.text = "Olet hyvä arvaamaan!";}
}
// jos valinta on väärin
else {
  this.style.backgroundColor = "#232323";  messageDisplay.text = "Wrong Choice!";
}

function pickColor () {
 var random = Math.floor(Math.random()*colors.length);
 return colors[random]
}
