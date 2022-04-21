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
    formData["pvm"] = document.getElementById("pvm").value;
    formData["tilaaja"] = document.getElementById("tilaaja").value;
    formData["tyomaa"] = document.getElementById("tyomaa").value;
    formData["tyonro"] = document.getElementById("tyonro").value;
    formData["tehtytyo"] = document.getElementById("tehtytyo").value;
    formData["info"] = document.getElementById("info").value;
    return formData;
}
function insertNewRecord(data) {
    var table = document.getElementById("tyontekLomakeLista").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.pvm;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.tilaaja;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.tyomaa;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tyonro;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.tehtytyo;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = data.info;
    cell6 = newRow.insertCell(6);
    cell6.innerHTML = `<a onClick="onEdit(this)">Muokkaa</a>
                       <a onClick="onDelete(this)">Poista</a>`;
}
function resetForm() {
    document.getElementById("pvm").value = "";
    document.getElementById("tilaaja").value = "";
    document.getElementById("tyomaa").value = "";
    document.getElementById("tyonro").value = "";
    document.getElementById("tehtytyo").value = "";
    document.getElementById("info").value = "";
    selectedRow = null;
}
function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("pvm").value = selectedRow.cells[0].innerHTML;
    document.getElementById("tilaaja").value = selectedRow.cells[1].innerHTML;
    document.getElementById("tyomaa").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tyonro").value = selectedRow.cells[3].innerHTML;
    document.getElementById("tehtytyo").value = selectedRow.cells[4].innerHTML;
    document.getElementById("info").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.pvm;
    selectedRow.cells[1].innerHTML = formData.tilaaja;
    selectedRow.cells[2].innerHTML = formData.tyomaa;
    selectedRow.cells[3].innerHTML = formData.tyonro;
    selectedRow.cells[4].innerHTML = formData.tehtytyo;
    selectedRow.cells[5].innerHTML = formData.info;
}
function onDelete(td) {
    if (confirm('Haluatko varmasti poistaa nämä tiedot ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("tyontekLomakeLista").deleteRow(row.rowIndex);
        resetForm();
}
}
