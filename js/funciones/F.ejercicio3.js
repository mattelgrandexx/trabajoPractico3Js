let lado1 = lado2 = 0;
        let perimetro = 0;
        lado1 = preguntarDato();
        lado2 = preguntarDato();
        escribePerimetro(lado1,lado2);
        function preguntarDato(){
            return parseFloat(window.prompt("escribe la longitud de un número"));
        }    
        function escribePerimetro(a,b){
            let perimetro = 2*(a+b);
            document.write("el perimetro de un rectángulo de lados " + a + " y " + b +" es "+perimetro);
        }