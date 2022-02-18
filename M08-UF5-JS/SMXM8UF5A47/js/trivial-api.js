const urlnombre = new URLSearchParams(window.location.search).get("nomusu");
var contingut = document.querySelector('#contingut') 
function guardaresp() {
    localStorage.setItem("respuesta1", "1-4")
    localStorage.setItem("respuesta2", "2-3")
    localStorage.setItem("respuesta3", "3-1")
    localStorage.setItem("respuesta4", "4-2")
    localStorage.setItem("respuesta5", "5-3")
    localStorage.setItem("respuesta6", "6-2")
}
function agafar() { 
    guardaresp();
    fetch('https://randomuser.me/api/') 
    .then(res => res.json()) 
    .then(data => { 
    console.log(data.results['0']) 
    contingut.innerHTML = ` 
    <img src="${data.results['0'].picture.large}" 
    width="100px" class="img-fluid rounded-circle"> 
    <p>Nombre:</p> 
    `+ urlnombre
    })
} 
function com(){
    nom = document.getElementById("nombre").value;
    anys = document.getElementById("edad").value;
    if (localStorage.getItem('nombre')) {
        if (anys >= 18 && localStorage.getItem('nombre') == nom && nom != "" || localStorage.getItem('nombre') == nom && nom != "" ){
            localStorage.setItem('edad' , anys);
            localStorage.setItem('nombre' , nom);
            window.open("web/trivial-api.htm?nomusu=" + nom);
        } 
        else if (anys <= 17){
            alert("Edad minima de 18 anys");
        }
    } else if (anys >= 18 && nom != "") {
        localStorage.setItem('edad' , anys);
        localStorage.setItem('nombre' , nom);
        window.open("web/trivial-api.htm?nomusu=" + nom);
    } else if (anys <= 17 && nom != "") {
        alert("Edad minima de 18 anys");
    }
}
function respuesta(a){
    if(a == localStorage.getItem("respuesta1")){
        alert("Correcte")
    }
    else if(a == localStorage.getItem("respuesta2")){
        alert("Correcte")
    }
    else if(a == localStorage.getItem("respuesta3")){
        alert("Correcte")
    }
    else if(a == localStorage.getItem("respuesta4")){
        alert("Correcte")
    }
    else if(a == localStorage.getItem("respuesta5")){
        alert("Correcte")
    }
    else if(a == localStorage.getItem("respuesta6")){
        alert("Correcte")
    }
    else{
        alert("Incorrecte")
    }
}
