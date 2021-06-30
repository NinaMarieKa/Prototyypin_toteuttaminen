function jarjesta()
{
  var luku1, luku2, luku3;
  luku1 = parseInt(document.getElementById('eka').value);
  luku2 = parseInt(document.getElementById('toka').value);
  luku3 = parseInt(document.getElementById('kolmas').value);

  document.write("Annoit luvut: " + luku1 + ' ' + luku2 + ' ' + luku3 + "<br>");
  if(luku1 < luku2 && luku1 < luku3)
  {
    if(luku2 < luku3)
    {
      document.write("Lukujen järjestys on: " + luku1 + ' ' + luku2 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys on: " + luku1 + ' ' + luku3 + ' ' + luku2);
    }
  }
  else if(luku2 < luku1 && luku2 < luku3)
  {
    if(luku1 < luku3)
    {
      document.write("Lukujen järjestys on: " + luku2 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys on: " + luku2 + ' ' + luku3 + ' ' + luku1);
    }
  }
  else if(luku3 < luku1 && luku3 < luku2)
  {
    if(luku1 < luku2)
    {
      doument.write("Lukujen järjestys on: " + luku3 + ' ' + luku1 + ' ' + luku3);
    }
    else {
      document.write("Lukujen järjestys on: " + luku3 + ' ' + luku2 + ' ' + luku1);
    }
  }
}

function etsiSuurin()
{
  var l1, l2, l3, l4, l5;
  l1 = parseInt(document.getElementById('luku1').value);
  l2 = parseInt(document.getElementById('luku2').value);
  l3 = parseInt(document.getElementById('luku3').value);
  l4 = parseInt(document.getElementById('luku4').value);
  l5 = parseInt(document.getElementById('luku5').value);

  document.write("Annoit luvut: " + l1 + ' ' + l2 + ' ' + l3 + ' ' + l4 + ' ' + l5 + "<br>");

  if(l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
  {
    document.write("Suurin on: " + l2);
  }
  else if(l1 < l3 && l4 < l3 && l5 < l3)
  {
    document.write("Suurin on: " + l3);
  }
  else if(l1 < l4 && l5 < l4)
  {
    document.write("Suurin on: " + l4);
  }
  else if(l1 < l5)
  {
    document.write("Suurin on: " + l5);
  }
  else {
    document.write("Suurin on: " + l1);
  }
}

function rinenRiton()
{
  var arvo;
  arvo = parseInt(document.getElementById('luku').value);
  document.write("Antamasi luku on: " + arvo + "<br>");
  if(arvo %2 == 0)
  {
    document.write("Luku on parillinen.")
  }
  else {
    document.write("Luku on pariton.")
  }
}

function tarkistaIka()
{
  var ika;
  ika = parseInt(document.getElementById('numero').value)
  document.write("Ikäsi on: " + ika + "<br>");
  if(ika < 16)
  {
    document.write("Saat ajaa polkupyörällä.")
  }
  else if(ika >= 16 && ika < 18)
  {
    document.write("Saat ajaa mopolla.")
  }
  else{
    document.write("Saat ajaa autolla.")
  }
}

function kaanna()
{
  var lang;
  lang = document.getElementById('kieli').value;
  if(lang == 'eng')
  {
    document.write("Hello World!")
  }
  else if(lang == 'swe')
  {
    document.write("Hej världen!")
  }
  else {
    document.write("Hola mundo!")
  }
}
