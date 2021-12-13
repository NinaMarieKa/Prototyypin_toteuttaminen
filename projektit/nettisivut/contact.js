function isValid(){

var nimi = document.forms["form"]["name"];
var email = document.forms["form"]["email"];
var viesti = document.forms["form"]["msg"];


    if (nimi.value == "") {
        window.alert("Ole hyvä ja kirjoita nimesi.");
        nimi.focus();
        return false;
    }

    if (email.value == "") {
        window.alert("Ole hyvä ja kirjoita toimiva sähköpostiosoite.");
        email.focus();
        return false;
    }

      var radio = document.forms["form"]["radio"];

      for (i=0; i<radio.length; i++) {
      if (radio[i].checked)
      break;
    }

     if ((form.radio[0].checked == false) && (form.radio[1].checked == false)){
       window.alert("Ole hyvä ja valitse alla olevista vaihtoehdoista");
       return false;
     }

     if (viesti.value == "") {
       window.alert("Viestikenttä on tyhjä.");
       return false;
     }

}
