// Map (Mapeo)
const numeros = [1, 2, 3, 4, 5];
const cuadrados = numeros.map(numero => numero * numero);
console.log(cuadrados);

// Filter (Filtrar)
const palabras = ["manzana", "plátano", "cereza", "dátil", "endrina"];
const palabrasCortas = palabras.filter(palabra => palabra.length <= 5);
console.log(palabrasCortas);

// Sort (Ordenar)
const numerosDesordenados = [4, 2, 7, 1, 6];
const numerosOrdenados = numerosDesordenados.sort((a, b) => a - b);
console.log(numerosOrdenados);

// ForEach (Por Cada Elemento)
const colores = ["rojo", "verde", "azul"];
colores.forEach(color => {
  console.log("Color: " + color);
});

// Concatenar
const frutas = ["manzana", "plátano"];
const frutasAdicionales = ["cereza", "dátil"];
const todasLasFrutas = frutas.concat(frutasAdicionales);
console.log(todasLasFrutas);

// Every (Todos)
const edades = [25, 30, 22, 28, 35];
const todosAdultos = edades.every(edad => edad >= 18);
console.log(todosAdultos);

// Some (Algunos)
const numerosARevisar = [3, 8, 12, 5, 17];
const tieneNumeroPar = numerosARevisar.some(numero => numero % 2 === 0);
console.log(tieneNumeroPar);

// Includes (Incluir)
const frutasARevisar = ["manzana", "plátano", "cereza"];
console.log(frutasARevisar.includes("plátano")); // true
console.log(frutasARevisar.includes("uva")); // false

// Join (Unir)
const letras = ["H", "o", "l", "a"];
const cadenaUnida = letras.join("");
console.log(cadenaUnida);

// Reduce (Reducir)
const valoresASumar = [10, 20, 30, 40, 50];
const suma = valoresASumar.reduce((total, valorActual) => total + valorActual);
console.log(suma);

// Find (Encontrar)
const objetos = ["silla", "mesa", "escritorio", "lámpara"];
const objetoEncontrado = objetos.find(objeto => objeto === "mesa");
console.log(objetoEncontrado);

// FindIndex (Encontrar Índice)
const nombres = ["Alice", "Bob", "Charlie", "David"];
const indice = nombres.findIndex(nombre => nombre === "Bob");
console.log(indice);

// Fill (Llenar)
const arregloVacio = new Array(5);
const arregloLleno = arregloVacio.fill("predeterminado");
console.log(arregloLleno);

// Slice (Cortar)
const frutasACortar = ["manzana", "plátano", "cereza", "dátil", "endrina"];
const frutasCortadas = frutasACortar.slice(1, 4);
console.log(frutasCortadas);

// Reverse (Invertir)
const letrasAInvertir = ["A", "B", "C", "D", "E"];
letrasAInvertir.reverse();
console.log(letrasAInvertir);

// Push (Agregar al Final)
const autos = ["Toyota", "Honda"];
const nuevoAuto = "Ford";
autos.push(nuevoAuto);
console.log(autos);

// Pop (Eliminar del Final)
const coloresAPop = ["rojo", "azul", "verde"];
coloresAPop.pop();
console.log(coloresAPop);

// Shift (Eliminar del Inicio)
const animalesAShift = ["león", "tigre", "oso"];
animalesAShift.shift();
console.log(animalesAShift);

// Unshift (Agregar al Inicio)
const verdurasAUnshift = ["zanahoria", "brócoli"];
const nuevaVerdura = "espinaca";
verdurasAUnshift.unshift(nuevaVerdura);
console.log(verdurasAUnshift);
