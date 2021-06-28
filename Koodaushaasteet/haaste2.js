function pieninSuurin(arr)
{
  arr.sort();
  var pienin = arr.shift();
  var suurin = arr.pop();
  console.log("Pienin: " + pienin + " Suurin: " + suurin);
}
function rinenRiton(nro)
{
  if (nro%2==0)
  {
    console.log("Luku on parillinen.");
  }
  else {
    console.log("Luku on pariton.")
  }
}
function kuukaudet(kk)
{
  switch (kk)
  {
    case 1:
      console.log("Tammikuu");
      break;
    case 2:
      console.log("Helmikuu");
      break;
    case 3:
      console.log("Maaliskuu");
      break;
    case 4:
      console.log("Huhtikuu");
      break;
    case 5:
      console.log("Toukokuu");
      break;
    case 6:
      console.log("Kesäkuu");
      break;
    case 7:
      console.log("Heinäkuu");
      break;
    case 8:
      console.log("Elokuu");
      break;
    case 9:
      console.log(Syyskuu);
      break;
    case 10:
      console.log(Lokakuu);
      break;
    case 11:
      console.log("Marraskuu");
      break;
    case 12:
      console.log("Joulukuu");
    default:
      console.log("Et antanut lukua välillä 1-12.")


  }
}
