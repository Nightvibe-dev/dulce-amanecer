
"use strict";

// Actualizar el año del pie de página
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Configuración del contacto del negocio.
// Déjalo vacío hasta tener autorización del propietario.
const numeroWhatsApp = "";

const whatsappButton = document.getElementById("whatsapp");

if (whatsappButton) {
  if (/^51\d{9}$/.test(numeroWhatsApp)) {
    const mensaje = encodeURIComponent(
      "Hola, quisiera consultar los productos y precios de Dulce Amanecer."
    );

    whatsappButton.href =
      `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;

    whatsappButton.target = "_blank";
    whatsappButton.rel = "noopener noreferrer";
  } else {
    whatsappButton.href = "#contacto";

    whatsappButton.addEventListener("click", function (event) {
      event.preventDefault();

      alert(
        "Este sitio es una demostración. " +
        "El contacto por WhatsApp estará disponible " +
        "cuando el negocio autorice su número."
      );
    });
  }
}
