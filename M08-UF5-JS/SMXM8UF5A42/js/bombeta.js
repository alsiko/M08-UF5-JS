function encender(e) {
  e.src = "img/llumon.gif"
}
function apagar(a) {
  a.src = "img/llumoff.gif"
}
function romper(r) {
  r.src = "img/llumbreak.gif"
}
document.addEventListener('keydown', boton);
function boton(b) {
  if(b.keyCode == 49) {
    document.getElementById("i1").src = "img/llumon.gif"
    document.getElementById("i2").src = "img/llumoff.gif"
    document.getElementById("i3").src = "img/llumoff.gif"
    document.getElementById("b1").innerHTML = "1";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
  }else {
      document.getElementById("i1").src = "img/llumoff.gif"
      document.getElementById("i2").src = "img/llumoff.gif"
      document.getElementById("i3").src = "img/llumoff.gif"
      document.getElementById("b1").innerHTML = "";
      document.getElementById("b2").innerHTML = "";
      document.getElementById("b3").innerHTML = "";
    }
  if(b.keyCode == 50) {
    document.getElementById("i1").src = "img/llumoff.gif"
    document.getElementById("i2").src = "img/llumon.gif"
    document.getElementById("i3").src = "img/llumoff.gif"
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "2";
    document.getElementById("b3").innerHTML = "";
  }
  if(b.keyCode == 51) {
    document.getElementById("i1").src = "img/llumoff.gif"
    document.getElementById("i2").src = "img/llumoff.gif"
    document.getElementById("i3").src = "img/llumon.gif"
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "3";
  }
}
