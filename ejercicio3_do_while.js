// Contraseña correcta (puedes cambiarla)
const CONTRASENA_CORRECTA = '12345';

function intentarPassword() {
  const input = document.getElementById('pass3');
  const salida = document.getElementById('salida3');
  let intento = input.value;

  if (intento === '') {
    salida.textContent = 'Ingresa una contraseña (campo vacío).';
    return;
  }

  // Ejemplo de uso de do...while: repetimos hasta que coincida
  let intentos = 0;
  let aceptado = false;
  // En este caso hacemos una sola comprobación porque recibimos el intento desde UI.
  // Para simular repetición hacemos un pequeño loop con prompt alternativo si fuese necesario.
  do {
    intentos++;
    if (intento === CONTRASENA_CORRECTA) {
      aceptado = true;
      break;
    } else {
      // Si no coincide, pedimos al usuario que ingrese otra (en UI esto sería limpiar y solicitar de nuevo)
      salida.textContent = Contraseña incorrecta (intento ${intentos}). Ingresa nuevamente.;
      // Rompemos para evitar bucle infinito y esperar nueva interacción del usuario.
      break;
    }
  } while (true);

  if (aceptado) {
    salida.textContent = Contraseña correcta. Acceso concedido en ${intentos} intento(s).;
    input.value = '';
  }
}