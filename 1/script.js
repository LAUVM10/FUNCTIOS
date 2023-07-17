// Obtén una referencia a los elementos del semáforo
let luzRoja = document.getElementById('luz-roja');
let luzAmarilla = document.getElementById('luz-amarilla');
let luzVerde = document.getElementById('luz-verde');

// Función para cambiar la luz del semáforo
function cambioLuces() {
  // Si la luz roja está encendida, cambia a verde
  if (luzRoja.classList.contains('active')) {
    luzRoja.classList.remove('active');
    luzVerde.classList.add('active');
    alert('Cambio de Rojo a Verde');
  }
  // Si la luz verde está encendida, cambia a amarillo
  else if (luzVerde.classList.contains('active')) {
    luzVerde.classList.remove('active');
    luzAmarilla.classList.add('active');
    alert('Cambio de Verde a Amarillo');
  }
  // Si la luz amarilla está encendida, cambia a rojo
  else if (luzAmarilla.classList.contains('active')) {
    luzAmarilla.classList.remove('active');
    luzRoja.classList.add('active');
    alert('Cambio de Amarillo a Rojo');
  }
}

// Función para iniciar el cambio de luces en intervalos de tiempo
function controlCambioLuces() {
  // Inicia el intervalo para cambiar las luces cada 2 segundos
  setInterval(cambioLuces, 2000);
}

// Inicia el semáforo llamando a la función controlCambioLuces
controlCambioLuces();
