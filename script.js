const heartTarget = document.getElementById("heartTarget");

// Formato do coração (1 = coração, 0 = espaço)
const heartPattern = [
  "001001100",
  "011111110",
  "111111111",
  "111111111",
  "011111110",
  "001111100",
  "000111000",
  "000010000"
];

let delay = 0;

heartPattern.forEach(row => {
  [...row].forEach(cell => {
    const span = document.createElement("span");
    if (cell === "1") {
      span.innerText = "❤️";
      span.style.animationDelay = `${delay}s`;
      delay += 0.05; // animação em sequência
    }
    heartTarget.appendChild(span);
  });
});
