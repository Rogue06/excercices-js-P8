function pairNumbers(min, max) {
  let result = "";
  for (let i = min; i <= max; i++) {
    if (i % 2 === 0) {
      result += i + (i < max - 1 ? "," : "");
    }
  }
  return result;
}

const resultat = pairNumbers(1, 10);
console.log(resultat);

module.exports = pairNumbers;
// exporte la fonction pairNumbers pour qu'elle puisse être utilisée dans d'autres fichiers JavaScript si nécessaire.
