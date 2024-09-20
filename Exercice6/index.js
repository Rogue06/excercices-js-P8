let display = document.getElementById("display");

function appendToDisplay(value) {
  display.value += value; // Ajoute la valeur du bouton à l'affichage
}

function clearDisplay() {
  display.value = ""; // Efface l'affichage
}

function calculateResult() {
  try {
    display.value = eval(display.value); // Calcule le résultat de l'expression
  } catch (error) {
    display.value = "Erreur"; // Affiche "Erreur" en cas d'erreur
  }
}
