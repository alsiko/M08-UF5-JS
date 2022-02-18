function comprovar() {
    if (document.getElementById('passw').value ==  document.getElementById('passwr').value)  {
        if (document.getElementById('passw').value == sessionStorage.getItem('contraseña')) {
            alert('Funciona correctament')
        }else {
            alert('Algo no a funcionat')
        }
    } 
}
function guardar(){
    sessionStorage.setItem('usuario', document.getElementById("usr").value);
    sessionStorage.setItem('contraseña', document.getElementById("passw").value);
    sessionStorage.setItem('nombre', document.getElementById("nom").value);
    sessionStorage.setItem('apellido', document.getElementById("cnom").value); 
    }
function recuperar(){
    document.getElementById('usr').value = sessionStorage.getItem('usuario');
    document.getElementById('passw').value = sessionStorage.getItem('contraseña');
    document.getElementById("nom").value = sessionStorage.getItem('nombre');
    document.getElementById("cnom").value = sessionStorage.getItem('apellido');
}
function borrar() {
    sessionStorage.clear();
}