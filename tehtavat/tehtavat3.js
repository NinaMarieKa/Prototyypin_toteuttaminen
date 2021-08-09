function parillinen()
{
  var par = parseInt(document.getElementById('eka').value);
  var jono = "<p>";
for(var i = 2; i <= par; i= i+2)
{
  jono+=i;
  jono+=" ";
}
jono+="</p>";
  document.getElementById('vastaus1').innerHTML = jono;
}
function muutaSalasanaa()
{
  var kayttajanSana = document.getElementById('salis').value;
  var salasana = "<p>";
  for(var j = 0; j < kayttajanSana.length; j++)
  {
    salasana += kayttajanSana[j] + 'Ö';
  }
  salasana += "</p>"
  document.getElementById('vastaus2').innerHTML = salasana;
}
function onkoKirjain()
{
  var annettuSana = document.getElementById('kirjain').value;
  var vastaus = 'ei ole';
  for(var k = 0; k < annettuSana.length; k++)
  {
    if(annettuSana[k] == 'ö' || annettuSana[k] == 'Ö')
    {
      vastaus = 'on';
    }
  }
  document.getElementById('vastaus3').innerHTML = '<p>' + vastaus + '</p>';
}
function laskeKertoma()
{
  var kerrottava = document.getElementById('l1').value;
  var laskettu = 1;
  for(var z = 1; z <= kerrottava; z++)
  laskettu*=z;
  document.getElementById('vastaus4').innerHTML = '<p>Luvun ' + kerrottava + ' kertoma on '
  + laskettu + '</p>';
}
function hipHeijaa()
{
  var tuloste = '';
  for(var y = 1; y <= 100; y++)
  {
    if(y%3 == 0 && y%5 ==0)
    {
     tuloste += 'Hip Heijaa ';
    }
    else if(y%5 == 0)
    {
      tuloste += 'Heijaa ';
    }
    else if(y%3 == 0)
    {
      tuloste += 'Hip ';
    }
    else{
        tuloste+=y+' ';
    }
    document.getElementById('vastaus5').innerHTML = tuloste;
  }
}
function ekatNumerot()
{
  var kym = "<p>";
  for(var e = 1; e <= 10; e++)
  {
    kym += e + ' ';
  }
  kym += "</p>"
  document.getElementById('vastaus6').innerHTML = kym;
}
function laskeEkat()
{
  yhteen = 0;
  for(var y = 1; y <= 10; y++)
  {
    yhteen += y;
  }
  document.getElementById('vastaus7').innerHTML = yhteen;
}
function laskePotenssiin()
{
  var eka = document.getElementById('ekaLuku').value;
  var toka = document.getElementById('tokaLuku').value;
  yht = eka;
  for(var p = 1; p < toka; p++)
  {
    yht *= eka;
  }
  document.getElementById('vastaus8').innerHTML = '<p>' + yht + '</p>';
}
function suurinPienin()
{
  var taulu = [], temp;
  for(var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt(temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('vastaus9').innerHTML = '<p>Pienin luku: ' + taulu[0] + ' ja suurin luku: ' +
  taulu[taulu.length-1];
}
function muunnaSalasanaksi()
{
  var ss = '';
  var eka, toka;
  ss = document.getElementById('salis').value;
  alert(ss);
  var taulu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j','k', 'l', 'n', 'o', 'p', 'q',
   'r', 's', 't', 'u','v', 'x', 'y', 'z', 'å', 'ä', 'ö', 'w'];
}
