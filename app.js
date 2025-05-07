alert("Boas Vindas!");
let nummax = 5000;

let numsecret = parseInt(Math.random() * nummax + 1);
console.log(numsecret);
let chute;
let tents = 1;

// Comparação entre numsecret e chute

while (chute != numsecret) {
  chute = prompt(`Digite um número entre 1 e 30 ${nummax}`);
  if (chute == numsecret) {
    break;
  } else {
    if (numsecret > chute) {
      alert(`O número secreto é maior que ${chute}`);
    } else {
      alert(`O número secreto é menor que ${chute}`);
    }
    tents++;
  }
}
let palavraTentativa = tents > 1 ? "tentativas" : "tentativa";
alert(
  `Isso ai! Você descobriu o número secreto ${numsecret} com ${tents} ${palavraTentativa}.`
);
