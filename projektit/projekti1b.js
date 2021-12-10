function kysely() {

  var kylla = document.getElementById('kylla').checked;
  var ei = document.getElementById('ei').checked;
  var entiia = document.getElementById('enTieda').checked;

  if(kylla == false && ei == false && entiia == false) {
    alert('Valitse vaihtoehto kohdasta "Suosittelisitko opintojasi muille"');
    return false;
  }
  else{
    return true;
  }

  var valinnat = document.forms["Kyselylomake"]["valinnat"];

  if (form.valinnat[0].selected == true) {
    window.alert("Ole hyvä ja valitse toimenkuva");
    return false;
  }

  if (viesti.value == "") {
   window.alert("Viestikenttä on tyhjä.");
   return false;
  }

  var yx = document.getElementById('boxyx').checked;
  var kax = document.getElementById('boxkax').checked;
  var kol = document.getElementById('boxkol').checked;

  if(yx == false && kax == false && kol == false) {
    alert('Valitse vaihtoehto kohdasta "Parasta koulussa on"');
    return false;
  }
  else{
    return true;
  }

  window.addEventListener("DOMContentLoaded", function(){
    var nimi = document.getElementById("nimi");
    nimi.addEventListener("input", function(){
      if (nimi.validity.tooShort || nimi.validity.valueMissing) {
        nimi.setCustomValidity("Nimessä on oltava vähintään viisi kirjainta");
        nimi.reportValidity();
      }
      else {
        nimi.setCustomValidity("");
      }
    });
  });


   window.addEventListener("DOMContentLoaded", function(){
   var ika = document.getElementById("ika");
   ika.addEventListener("input", function(){
     if (ika.validity.invalid || ika.validity.valueMissing) {
       ika.setCustomValidity("Syötä ikä numeroina");
       ika.reportValidity();
     }
     else if (ika.validity.tooLong) {
       ika.setCustomValidity("Iän on oltava luku väliltä 1-99");
       ika.reportValidity();
     }
     else {
       ika.setCustomValidity("");
     }
   });
  });

}


function emailIsValid (email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

   if(emailIsValid(email)) {
    }
    else{ alert("Anna oikea sähköpostiosoitteesi"); Kyselylomake.email.focus(); return (false); }
 }
