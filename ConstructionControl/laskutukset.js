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
    formData["tyonro"] = document.getElementById("tyonro").value;
    formData["lasku"] = document.getElementById("lasku").value;
    formData["info"] = document.getElementById("info").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("laskutuksetLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.tilaaja;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tyonro;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.lasku;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.info;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = `<a onClick="onEdit(this)">Muokkaa</a>
                       <a onClick="onDelete(this)">Poista</a>`;
}
function resetForm() {
    document.getElementById("tilaaja").value = "";
    document.getElementById("tyonro").value = "";
    document.getElementById("lasku").value = "";
    document.getElementById("info").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("tilaaja").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tyonro").value = selectedRow.cells[1].innerHTML;
    document.getElementById("lasku").value = selectedRow.cells[2].innerHTML;
    document.getElementById("info").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.tilaaja;
    selectedRow.cells[1].innerHTML = formData.tyonro;
    selectedRow.cells[2].innerHTML = formData.lasku;
    selectedRow.cells[3].innerHTML = formData.info;
}
function onDelete(td) {
    if (confirm('Haluatko varmasti poistaa nämä tiedot ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("laskutuksetLista").deleteRow(row.rowIndex);
        resetForm();
}
}
