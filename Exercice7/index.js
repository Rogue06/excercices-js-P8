function convertToBinary() {
  const decimalInput = document.getElementById("decimal-input");
  const binaryOutput = document.getElementById("binary-output");

  // Récupérer la valeur décimale et la convertir en nombre
  const decimal = parseInt(decimalInput.value);

  // Vérifier si l'entrée est un nombre valide
  if (isNaN(decimal)) {
    binaryOutput.textContent = "Veuillez entrer un nombre décimal valide.";
    return;
  }

  // Convertir en binaire
  let binary = "";
  let temp = decimal;

  if (temp === 0) {
    binary = "0";
  } else {
    while (temp > 0) {
      binary = (temp % 2) + binary;
      temp = Math.floor(temp / 2);
    }
  }

  // Afficher le résultat
  binaryOutput.textContent = `Le nombre binaire est : ${binary}`;
}
