"use strict";

const yearElement = document.getElementById("year");
const whatsappButton = document.getElementById("whatsapp");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (whatsappButton) {
  whatsappButton.addEventListener("click", function (event) {
    event.preventDefault();

    alert(
      "Esta es una demostración. " +
      "El dueño del negocio debe proporcionar " +
      "y autorizar el número de WhatsApp."
    );
  });
}