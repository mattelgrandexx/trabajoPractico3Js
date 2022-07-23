let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Semtiembre", "Octubre", "Noviembre", "Diciembre"];

document.write("<ul>");
for(let indiceMeses=0; indiceMeses < meses.length; indiceMeses++){
    document.write("<li>"+meses[indiceMeses]+"</li>");
}
document.write("<ul>");