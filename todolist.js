window.onload = iniciar;

function iniciar() {
    var btnAgregar = document.getElementById("btnAgregar");
    btnAgregar.addEventListener("click", clickBtnAgregar)
}

function clickBtnAgregar() {
   var txtTarea = document.getElementById("txtTarea");
   var tarea = txtTarea.value;
    alert(tarea)
}