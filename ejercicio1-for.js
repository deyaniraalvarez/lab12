function ejercicioFor() {
  const texto = document.getElementById('lista1').value.trim();
  const salida = document.getElementById('salida1');

  if (!texto) {
    salida.textContent = 'Ingresa algunos números separados por comas.';
    return;
  }

  // Convertir a arreglo de números
  const arr = texto.split(',').map(s => Number(s.trim())).filter(n => !isNaN(n));

  if (arr.length === 0) {
    salida.textContent = 'No se encontraron números válidos.';
    return;
  }

  // Sumar con for
  let suma = 0;
  for (let i = 0; i < arr.length; i++) {
    suma += arr[i];
  }

  const promedio = suma / arr.length;
  salida.textContent = Suma: ${suma.toFixed(2)}. Promedio: ${promedio.toFixed(2)} (Números: ${arr.length});
}