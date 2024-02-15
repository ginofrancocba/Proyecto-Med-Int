
// Obtener el elemento del botón por su id
var btnGoogleMaps = document.getElementById('btn-google-maps');

// Agregar un evento de clic al botón
btnGoogleMaps.addEventListener('click', function() {

// Obtener las coordenadas de la ubicación
var latitud = -31.412310; // Latitud de la ubicación
  
var longitud = -64.163600; // Longitud de la ubicación

// Construir la URL de Google Maps con los parámetros de la ubicación  
var url = 'https://www.google.com/maps?q=' + latitud + ',' + longitud;

// Redireccionar a la ubicación precisa en Google Maps   
window.open(url, '_blank');
});   

