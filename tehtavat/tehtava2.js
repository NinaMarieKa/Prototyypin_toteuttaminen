function posNeg()
{
  var luku = document.getElementById('eka').value;
  if(luku >= 0)
  {
    document.getElementById('vastaus1').innerHTML = "Luku on positiivinen.";
  }
  else {
    document.getElementById('vastaus1').innerHTML = "Luku on negatiivinen.";
  }
}
function viikonPaiva()
{
  var paiva = document.getElementById('vnumero').value;
  if(paiva == 1)
  {
    document.getElementById('vastaus2').innerHTML = "Maanantai";
  }
  else if(paiva == 2)
  {
    document.getElementById('vastaus2').innerHTML = "Tiistai";
  }
  else if(paiva == 3)
  {
    document.getElementById('vastaus2').innerHTML = "Keskiviikko";
  }
  else if(paiva == 4)
  {
    document.getElementById('vastaus2').innerHTML = "Torstai";
  }
  else if(paiva == 5)
  {
    document.getElementById('vastaus2').innerHTML = "Perjantai";
  }
  else if(paiva == 6)
  {
    document.getElementById('vastaus2').innerHTML = "Lauantai";
  }
  else if(paiva == 7)
  {
    document.getElementById('vastaus2').innerHTML = "Sunnuntai";
  }
  else{
    document.getElementById('vastaus2').innerHTML = "Luku ei vastaa yhtäkään viikonpäivää";
  }
}
function karkausVuosi()
{
  var karkuri = document.getElementById('karkaus').value;
  if(karkuri%4 == 0 && karkuri%100 !=0)
  {
    document.getElementById('vastaus3').innerHTML = "Karkausvuosi";
  }
  else if(karkuri%400 == 0)
  {
    document.getElementById('vastaus3').innerHTML = "Karkausvuosi";
  }
  else{
    document.getElementById('vastaus3').innerHTML = "Luku ei ole karkausvuosi"
   }
}
function keskiArvo()
{
  var luku1, luku2, luku3, luku4, luku5, summa, kesrvo;

  var luku1 = parseInt(document.getElementById('l1').value);
  var luku2 = parseInt(document.getElementById('l2').value);
  var luku3 = parseInt(document.getElementById('l3').value);
  var luku4 = parseInt(document.getElementById('l4').value);
  var luku5 = parseInt(document.getElementById('l5').value);

  var summa = luku1 + luku2 + luku3 + luku4 + luku5;
  var kesrvo = summa /5;

  document.getElementById('vastaus4').innerHTML = "Lukujen summa on "
   + summa + " ja keskiarvo on " + kesrvo;
}
function kertoTaulu()
{
  var numero = parseInt(document.getElementById('num').value);
  var kertis = numero + ' x 0 = '+ numero*0 + '<br/>';
      kertis += numero + ' x 1 = '+ numero*1 + '<br/>';
      kertis += numero + ' x 2 = '+ numero*2 + '<br/>';
      kertis += numero + ' x 3 = '+ numero*3 + '<br/>';
      kertis += numero + ' x 4 = '+ numero*4 + '<br/>';
      kertis += numero + ' x 5 = '+ numero*5 + '<br/>';
      kertis += numero + ' x 6 = '+ numero*6 + '<br/>';
      kertis += numero + ' x 7 = '+ numero*7 + '<br/>';
      kertis += numero + ' x 8 = '+ numero*8 + '<br/>';
      kertis += numero + ' x 9 = '+ numero*9 + '<br/>';
      kertis += numero + ' x 10 = '+ numero*10 + '<br/>';
   document.getElementById('vastaus5').innerHTML = kertis;
}
