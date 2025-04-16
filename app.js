// Lista de frases motivacionais
const quotes = [
    "Acredite em si mesmo e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A vida é 10% do que acontece com você e 90% de como você reage.",
    "Se você pode sonhar, você pode realizar.",
    "O único lugar onde o sucesso vem antes do trabalho é no dicionário.",
    "Acredite em você e tudo será possível.",
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "A única maneira de fazer um excelente trabalho é amar o que você faz.",
    "Não desista. Grandes coisas levam tempo.",
    "O futuro pertence àqueles que acreditam na beleza dos seus sonhos."
];

// Função para exibir uma nova frase
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
}
