function comprovar() {
    if (document.getElementById('usr').value == "ibai") {
        if (document.getElementById('passw').value == "1234") {
        }
    }else{
        alert("Hay algun error")
        return false;
    }
    if (document.getElementById('passw').value == document.getElementById('passwr').value) {
    alert("Todo correcto");
    } else{
    alert("Hay algn error");
    }
}