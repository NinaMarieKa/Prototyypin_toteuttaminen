//funktio, jolla tarkistetaan, että kentät on täytetty ja täytetty oikein

function isValid(){

var nimi = document.forms["form"]["name"];
var email = document.forms["form"]["email"];
var viesti = document.forms["form"]["msg"];

// nimi-kentän tarkistus
    if (nimi.value == "") {
        window.alert("Please enter your name");
        nimi.focus();
        return false;
    }
// sähköpostikentän tarkistus
    if (email.value == "") {
        window.alert("Please enter a valid email address");
        email.focus();
        return false;
    }
// radio näppäinten tarkistus
      var radio = document.forms["form"]["radio"];

      for (i=0; i<radio.length; i++) {
      if (radio[i].checked)
      break;
    }

     if ((form.radio[0].checked == false) && (form.radio[1].checked == false)) {
       window.alert("Please select from the options below");
       return false;
     }
// viesti- kentän tarkastus
     if (viesti.value == "") {
       window.alert("The message field is empty.");
       return false;
     }

}
// funktio, jolla tarkistetaan onko sähköposti oikesa
function ValidateEmail(email){

  var reg = /^\S+@\S+\.\S+$/;
  if(email.value.match(reg)) {
    alert("Valid email address");
    document.form.email.focus();
  return true;
}
  else {
  alert("You have entered an invalid email address");
  document.form.email.focus();
  return false;
 }
}
