function testi()
  {
  for(var i = 100; i < 1000; i++){
  x = i.toString().split("");
  if(Math.pow(x[0],3)+Math.pow(x[1],3)+Math.pow(x[2],3)==i)
  {
    console.log("Tämä:" +i);
  }
}
}
