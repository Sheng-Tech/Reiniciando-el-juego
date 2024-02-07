// Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

function CalcularIMC (altura, peso) {
    //altura en metros y peso en kilogramos.
    let indiceMasa = peso / (altura*altura);
    return indiceMasa;
}

// Validar funcionamiento
let imc = CalcularIMC(180/100, 85);
console.log (imc);

// Crea una función que calcule el valor del factorial de un número pasado como parámetro.

function calcularFactorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    } else {
      return numero * calcularFactorial(numero - 1);
    }
  }

  // Validar funcionamiento
  let numero = 5;
  let resultado = calcularFactorial(numero);
  console.log(`El factorial de ${numero} es ${resultado}`);

// Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a R$4,80.

function convertirUsdClp(dolares) {
    let cotizacionDolar = 954.20;
    let pesos = dolares * cotizacionDolar;
    return pesos;
  }

  //validar funcionamiento
  let valorDolar = 50;
  let valorPesos = convertirUsdClp(valorDolar);
  
  console.log (`${valorDolar} dólares son ${valorPesos} en Pesos Chilenos`);


// Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

function calcularAreaPerimetroRectangulo(alto, ancho) {
    let area = alto * ancho;
    let perimetro = 2 * (alto + ancho);
    console.log ("El área rectangular calculada es: " + area + " metros cuadrados.");
    console.log ("El perímetro calculado es: " + perimetro + " metros.");
}

//Validar funcionamiento, medidas en metros
let alto = 7;
let ancho = 8.25;
calcularAreaPerimetroRectangulo(alto , ancho);


// Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.

function calcularAreaPerimetroCirculo(radio) {
    let pi = 3.14;
    let area = pi * radio * radio;
    let perimetro = 2 * pi * radio;
    console.log("El área circular calculada es: " + area);
    console.log("El perímetro calculado es: " + perimetro);
  }

  // Validar funcionamiento

  let radio = 4; // en metros
  calcularAreaPerimetroCirculo(radio);


// Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.

function TablaDeMultiplicar(numeroTabla) {
    for (let i = 1; i <= 10; i++) {
        let solucion = numeroTabla * i;
        console.log (numeroTabla + " x " + i + " = " + solucion);
    }
}

//Validar funcionamiento
let numeroTabla = 6;
TablaDeMultiplicar (numeroTabla);
