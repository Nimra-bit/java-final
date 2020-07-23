// // Task 1
// function myDataFun() {
//     var un = document.f1.uname.value;
//     var up = document.f1.upass.value;
//     var uem = document.f1.uemail.value;
//     var gen = document.f1.gender.value;
//     var uc = document.f1.ucity.value;
//     document.write("User Name:" + "  " + "  " + un + "<br/>" + "Password:" + "  " + "  " + up + "<br/>" + "Email:" + "  " + "  " + uem + "<br/>" + " Gender:" + "  " + "  " + gen + "<br/>" + "City:" + "   " + "  " + uc);
// }



// // Task 2
// var pera = document.getElementById("pera").hidden = true;
// function aboutme() {
//     var pera = document.getElementById("pera").innerHTML;
//     var about = document.getElementById("about")
//     about.innerHTML = pera;
// }
// document.getElementById("text").hidden = true;
// function readmore() {
//     var text = document.getElementById("text").innerHTML;
//     var pera = document.getElementById("pera")
//     pera.innerHTML = text;
// }



// Task 3
var row = 1;
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);
function displayDetails() {
    var stName = document.getElementById("name").value;
    var stCourse = document.getElementById("course").value;

    var display = document.getElementById("tab");
    var newRow = display.insertRow(row);
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    cell1.innerHTML =stName;
    cell2.innerHTML =stCourse;
    row++;
    }

function editRow(btn) {
    var table = document.getElementById("tab");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "NEW Student";
    cell2.innerHTML = "NEW Course";
}


function deleteRow(btn) {
    var table = btn.parentNode.parentNode.rowIndex;
    document.getElementById("mytab").deleteRow(table);
}