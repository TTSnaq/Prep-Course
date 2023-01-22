// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí

  var matriz = [];

  for (const propiedad in objeto){
    matriz.push([propiedad, objeto[propiedad]]);
  }
  return matriz;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí

  var contador = 0;

  var Objeto = {}

  for (i=0 ; i < string.length ; i++){
    Objeto[string[i]] = 0;
    
    if(Objeto[string[i]] === 0){
      for(y=0 ; y < string.length ; y++){
        if (string[i] === string[y]) {
          contador = contador + 1;
          string.replace(string[y], '');
        }
      }
      Objeto[string[i]] = contador;
    }
    contador = 0;
}
return Objeto;

}

function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  
  var mayus1 = [];

  for (i=0 ; i < s.length ; i++){
    if (s[i] === s[i].toUpperCase()) {
      mayus1.push(s[i]);
    } 
  }

  for (i=0 ; i < s.length ; i++){
    if (s[i] !== s[i].toUpperCase()) {
      mayus1.push(s[i]);
    } 
  }
  return mayus1.join('');
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var espejo = [];
  
  var separador = str.split(' ');
  
  for (i=0 ; i < separador.length ; i++) {
  	espejo.push(separador[i].split('').reverse().join(''));
  }
  return espejo.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  if(numero.toString() === numero.toString().split('').reverse().join('')){
    return 'Es capicua';
  } return 'No es capicua';
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  
  var Borradera = cadena.replace('c', '').replace('b', '').replace('a', '');

  return Borradera;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrOrdenado = arr.sort(function(a, b) {return a.length - b.length});
  
  return arrOrdenado;
}



function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  var nuevoarray = [];

  var comparador = 0;

  for (i=0 ; i < arreglo1.length ; i++){
    comparador = arreglo1[i];
    for(y=0 ; y < arreglo2.length ; y++){
      if(comparador === arreglo2[y]){
        nuevoarray.push(arreglo2[y])
      }
    }
  }
  return nuevoarray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

