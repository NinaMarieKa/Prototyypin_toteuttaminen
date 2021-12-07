function kysely() {

}


function emailIsValid (email) {
   return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

   if(emailIsValid(sahkoposti)) {
    }
    else{ alert("Anna oikea sÃ¤hkÃ¶postiosoitteesi"); lomake.email.focus(); return (false); }
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
