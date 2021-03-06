var selectedRow = null

function onFormSubmit() {

    var formData = readFormData();
    if (selectedRow == null)
    insertNewRecord(formData);
    else
      updateRecord(formData);
      resetForm();
  }

function readFormData() {
   var formData = {};
    formData["nimi"] = document.getElementById("nimi").value;
    formData["osoite"] = document.getElementById("osoite").value;
    formData["puhnro"] = document.getElementById("puhnro").value;
    formData["veronro"] = document.getElementById("veronro").value;
    formData["email"] = document.getElementById("email").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("tyontekijaLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nimi;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.osoite;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.puhnro;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.veronro;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.email;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Muokkaa</a>
                       <a onClick="onDelete(this)">Poista</a>`;
}
function resetForm() {
    document.getElementById("nimi").value = "";
    document.getElementById("osoite").value = "";
    document.getElementById("puhnro").value = "";
    document.getElementById("veronro").value = "";
    document.getElementById("email").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nimi").value = selectedRow.cells[0].innerHTML;
    document.getElementById("osoite").value = selectedRow.cells[1].innerHTML;
    document.getElementById("puhnro").value = selectedRow.cells[2].innerHTML;
    document.getElementById("veronro").value = selectedRow.cells[3].innerHTML;
    document.getElementById("email").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nimi;
    selectedRow.cells[1].innerHTML = formData.osoite;
    selectedRow.cells[2].innerHTML = formData.puhnro;
    selectedRow.cells[3].innerHTML = formData.veronro;
    selectedRow.cells[4].innerHTML = formData.email;
}
function onDelete(td) {
    if (confirm('Haluatko varmasti poistaa n??m?? tiedot ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tyontekijaLista").deleteRow(row.rowIndex);
        resetForm();
}
}
