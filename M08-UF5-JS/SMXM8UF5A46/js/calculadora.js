function numero(num) { 
    let inputDP = document.getElementById("panel"); 
    inputDP.value = inputDP.value + num; 
} 
function calcular() { 
    let inputDP = document.getElementById("panel"); 
    inputDP.value = eval (inputDP.value); 
} 
function clear() { 
    let inputDP = document.getElementById("panel"); 
    inputDP.value = null; 
}