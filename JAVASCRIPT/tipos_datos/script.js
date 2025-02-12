
var numeroEntero = 5;
var numeroDecimal = 3.14;
var numeroNegativo = -10;

console.log("Número Entero:", numeroEntero);
console.log("Número Decimal:", numeroDecimal);
console.log("Número Negativo:", numeroNegativo);

// String: Representa datos de texto
var saludo = 'Hola';
var despedida = "Mundo";

console.log("Saludo:", saludo);
console.log("Despedida:", despedida);

// Boolean: Representa un valor lógico (true o false)
var esVerdadero = true;
var esFalso = false;

console.log("Es Verdadero:", esVerdadero);
console.log("Es Falso:", esFalso);

// Null: Representa la ausencia intencional de cualquier valor
var valorNulo = null;

console.log("Valor Nulo:", valorNulo);

// Undefined: Representa un valor no definido
var valorNoDefinido;

console.log("Valor No Definido:", valorNoDefinido);

// Object: Representa un objeto con propiedades
var persona1 = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Vera'
  };
  var persona2 = {
    nombre: 'Pepe',
    edad: 31,
    ciudad: 'Antas'
  };
  var persona3 = {
    nombre: 'Maria',
    edad: 32,
    ciudad: 'Albox'
  };

  personas=[persona1,persona2,persona3];
  
  console.log("Objeto Personas:", personas);
  
  // Array: Representa una colección ordenada de valores
  var frutas = ['manzana', 'naranja', 'plátano'];
  
  console.log("Array de Frutas:", frutas);
  
  // Function: Representa una función reutilizable
  function saludar(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  saludar("Andrea");
  
  // Date: Representa una fecha y hora específicas
  var fechaActual = new Date();
  
  console.log("Fecha Actual:", fechaActual);
  
  /* RegExp: Representa una expresión regular para buscar patrones
  /: Delimitadores de la expresión regular.
  java: Coincide literalmente con la cadena "java".
  (script)?: Grupo de captura opcional. Puede coincidir con "script" cero o una vez.
  i: Modificador de la expresión regular que hace que la coincidencia sea insensible a mayúsculas y minúsculas.
  Por lo tanto, esta expresión regular buscará "java" seguido opcionalmente por "script" en una cadena de texto, y la búsqueda no será sensible a mayúsculas y minúsculas. Esto significa que coincidirá con "java", "JavaScript" o "javaSCRIPT", entre otras posibles variaciones.*/
  var patron = /java(script)?/i;
  
  console.log("Expresión Regular:", patron);

  // Ejemplo de alcance de let y var
var variableGlobalconVar="Variable Global con var";
let variableGlobalconLet="Variable Global con let";
  function ejemploAlcance() {
    if (true) {
        let variableLet = "Variable con alcance de bloque";
        var variableFuncionVar = "Variable con alcance de función";
        console.log(variableLet);
    }
    console.log(variableFuncionVar); // Salida: "Variable con alcance de función"
    // console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
}
ejemploAlcance();