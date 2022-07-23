


let resultado = "";
let ciudades = [resultado];
do {
    let cadena = prompt("Ingrese ciudades");
    
    if (resultado == "") {
        resultado = resultado + cadena;
    }
    else {
        resultado = resultado + "-" + cadena;
    }
} while (confirm("Desea seguir?"));
document.write("<p>"+ciudades+"</p>");




