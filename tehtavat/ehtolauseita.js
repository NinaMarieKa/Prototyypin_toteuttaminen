function ehtooLauseita()
{
var luku = document.getElementById('luku').value;
if (luku >= 0)
{
      document.getElementById('vastaus1').innerHTML = "Luku on positiivinen.";
}
else {
      document.getElementById('vastaus1').innerHTML = "Luku on negatiivinen.";
 }
}
