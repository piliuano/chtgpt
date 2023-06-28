// JavaScript para el sitio web del restaurante

// Función para mostrar un mensaje de confirmación de reserva
function mostrarConfirmacionReserva(nombre, fecha, personas) {
    console.log("¡Gracias por tu reserva, " + nombre + "!");
    console.log("Fecha: " + fecha);
    console.log("Número de personas: " + personas);
    alert("¡Gracias por tu reserva, " + nombre + "!\nFecha: " + fecha + "\nNúmero de personas: " + personas);
  }
  
  // Función para manejar el envío del formulario de reserva
  function manejarEnvioReserva(event) {
    event.preventDefault(); // Evitar el envío del formulario por defecto
  
    // Obtener los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;
    var personas = document.getElementById("personas").value;
  
    // Validar los campos del formulario
    if (nombre === "" || email === "" || fecha === "" || personas === "") {
      alert("Por favor, completa todos los campos del formulario.");
      return;
    }
  
    // Mostrar mensaje de confirmación
    mostrarConfirmacionReserva(nombre, fecha, personas);
  
    // Restablecer el formulario
    document.getElementById("nombre").value = "";
    document.getElementById("email").value = "";
    document.getElementById("fecha").value = "";
    document.getElementById("personas").value = "";
  }
  
  // Evento de escucha para el envío del formulario de reserva
  var formularioReserva = document.getElementById("reserva-formulario");
  formularioReserva.addEventListener("submit", manejarEnvioReserva);
  