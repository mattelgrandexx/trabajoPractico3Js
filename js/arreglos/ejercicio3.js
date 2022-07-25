let pruebaDado2 = [];

for(let i=0; i < 10; i++){
    let dado1 = Math.floor(Math.random()* (6 - 1 + 1)+1);
    let dado2 = Math.floor(Math.random()* (6 - 1 + 1)+1);
    let resultado = dado1 + dado2;
    pruebaDado1.push(dado1);
    pruebaDado2.push(dado2);
    sumas.push(resultado)
}

document.write("<br>Resultado de las pruebaDado1: " + pruebaDado1);
document.write("<br>Resultado de las pruebaDado2: " + pruebaDado2);
document.write("<br>Resultado de las sumas: " + sumas);