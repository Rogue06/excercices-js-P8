// Sélectionner le bouton
const bouton = document.getElementById("myButton");

// Sélectionner ou créer le paragraphe pour le message
const messageParagraphe =
  document.querySelector("p") || document.createElement("p");

// Ajouter le gestionnaire d'événements au bouton
bouton.addEventListener("click", function () {
  messageParagraphe.textContent = "Bonjour, vous avez cliqué sur le bouton !";

  // Si le paragraphe n'existe pas déjà dans le DOM, l'ajouter
  document.body.appendChild(messageParagraphe);
});
