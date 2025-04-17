const frases = [
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
  
  // Teste 1: Verifica o tamanho da lista de frases
  test('a lista de frases tem exatamente 10 frases', () => {
    expect(frases.length).toBe(10);
  });
  
  // Teste 2: Verifica se a função newQuote altera o texto no HTML
  test('a função newQuote altera o texto da frase exibida', () => {
    // Simulando uma mudança no DOM
    document.body.innerHTML = `<div id="quote"></div>`;
    
    // Função que altera o texto
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * frases.length);
      document.getElementById('quote').innerText = frases[randomIndex];
    }
    
    // Chama a função e verifica se o texto foi alterado
    newQuote();
    const quoteText = document.getElementById('quote').innerText;
    expect(frases).toContain(quoteText);
  });
  
  // Teste 3: Verifica se a frase retornada pela função newQuote está na lista de frases
  test('a frase gerada pela função newQuote está na lista de frases', () => {
    // Função que gera uma nova frase
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * frases.length);
      return frases[randomIndex];
    }
    
    // Verifica se a frase gerada é válida
    const generatedQuote = newQuote();
    expect(frases).toContain(generatedQuote);
  });
  
  // Teste 4: Verifica se duas chamadas consecutivas para newQuote não geram a mesma frase
  test('a função newQuote gera frases aleatórias diferentes', () => {
    // Simulando a geração de duas frases diferentes
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * frases.length);
      return frases[randomIndex];
    }
    
    const firstQuote = newQuote();
    const secondQuote = newQuote();
    
    expect(firstQuote).not.toBe(secondQuote);
  });
  
  // Teste 5: Verifica se o índice aleatório gerado está dentro dos limites corretos
  test('o índice aleatório gerado pela função newQuote está dentro dos limites da lista de frases', () => {
    function newQuote() {
      const randomIndex = Math.floor(Math.random() * frases.length);
      return randomIndex; // Apenas retornando o índice para verificação
    }
    
    const randomIndex = newQuote();
    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThan(frases.length);
  });
  