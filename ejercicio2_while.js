// Usamos un arreglo global temporal para almacenar los números ingresados
let numerosWhile = [];

function agregarNumeroWhile() {
  const input = document.getElementById('numero2');
  const salida = document.getElementById('salida2');
  const valor = Number(input.value);

  if (isNaN(valor)) {
    salida.textContent = 'Ingresa un número válido.';
    return;
  }

  if (valor < 0) {
    // Si el usuario ingresa negativo directamente, mostramos mensaje
    salida.textContent = 'Ingresaste un número negativo. Finaliza con el botón "Finalizar".';
    // también podemos considerar esto como señal de fin, pero aquí solo avisamos
    return;
  }

  numerosWhile.push(valor);
  salida.textContent = Número agregado (${valor}). Total de números: ${numerosWhile.length}.;
  input.value = '';
}

function finalizarWhile() {
  const salida = document.getElementById('salida2');

  if (numerosWhile.length === 0) {
    salida.textContent = 'No se ingresaron números (o solo números negativos).';
    return;
  }

  // Procesar con while para calcular suma y promedio (ejemplo de uso de while)
  let i = 0;
  let suma = 0;
  while (i < numerosWhile.length) {
    suma += numerosWhile[i];
    i++;
  }

  const promedio = suma / numerosWhile.length;
  salida.textContent = Se ingresaron ${numerosWhile.length} números. Suma: ${suma.toFixed(2)}. Promedio: ${promedio.toFixed(2)}.;

  // limpiar arreglo para nueva ejecución
  numerosWhile = [];
}