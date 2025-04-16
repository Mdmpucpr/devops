// Lista de frases motivacionais
const quotes = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é 10% do que acontece com você e 90% de como você reage.",
    "Se você pode sonhar, você pode realizar.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário."
];

// Função para exibir uma nova frase
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
}
