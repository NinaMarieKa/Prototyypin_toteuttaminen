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
    formData["tilaaja"] = document.getElementById("tilaaja").value;
    formData["osoite"] = document.getElementById("osoite").value;
    formData["valmis"] = document.getElementById("valmis").value;
    formData["ttekija"] = document.getElementById("ttekija").value;
    formData["info"] = document.getElementById("info").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("tyomaaLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tilaaja;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.osoite;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.valmis;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ttekija;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.info;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a onClick="onEdit(this)">Muokkaa</a>
                       <a onClick="onDelete(this)">Poista</a>`;
}
function resetForm() {
    document.getElementById("tilaaja").value = "";
    document.getElementById("osoite").value = "";
    document.getElementById("valmis").value = "";
    document.getElementById("ttekija").value = "";
    document.getElementById("info").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tilaaja").value = selectedRow.cells[0].innerHTML;
    document.getElementById("osoite").value = selectedRow.cells[1].innerHTML;
    document.getElementById("valmis").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ttekija").value = selectedRow.cells[3].innerHTML;
    document.getElementById("info").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tilaaja;
    selectedRow.cells[1].innerHTML = formData.osoite;
    selectedRow.cells[2].innerHTML = formData.valmis;
    selectedRow.cells[3].innerHTML = formData.ttekija;
    selectedRow.cells[4].innerHTML = formData.info;
}
function onDelete(td) {
    if (confirm('Haluatko varmasti poistaa nämä tiedot ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tyomaaLista").deleteRow(row.rowIndex);
        resetForm();
}
}
