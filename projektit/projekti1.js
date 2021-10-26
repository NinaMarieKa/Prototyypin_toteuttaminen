function otaYhteytta() {
  var nimi = document.forms["form"]["nimi"];
  var email = document.forms["form"]["email"];


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

        var valinta = document.forms["form"]["valinta"];

        for (i=0; i<valinta.length; i++) {
        if (valinta[i].checked)
        break;
        }

        if ((form.valinta[0].checked == false) && (form.valinta[1].checked == false) && (form.valinta[2].checked == false)) {
          window.alert("Ole hyvä ja valitse jokin vaihtoehdoista.");
          return false;
      }

        var radio = document.forms["form"]["radio"];

        for (i=0; i<radio.length; i++) {
        if (radio[i].checked)
        break;
       }

       if ((form.radio[0].checked == false) && (form.radio[1].checked == false) && (form.radio[2].checked == false)){
         window.alert("Ole hyvä ja valitse alla olevista vaihtoehdoista");
         return false;
       }

       var valinnat = document.forms["form"]["valinnat"];


       if (form.valinnat[0].selected == true) {
         window.alert("Ole hyvä ja valitse toimenkuva")
         valinnat.focus;
       }

       var viesti = document.forms["form"]["palaute"];

       if (viesti.value == "") {
         window.alert("Viestikenttä on tyhjä.")
         viesti.focus;
       }

}
