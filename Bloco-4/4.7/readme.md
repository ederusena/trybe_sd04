# Document Object Model - DOM
​
Esse conteúdo visa relembrar conceitos do bloco 4 relacionados a manipulação de DOM.
​
## Seletores
​
  Buscar uma tag específica no HTML.
​
  - getElementById()
​
    Busca o elemento com base do id da tag.
​
  - querySelector()
​
    Busca conforme especificação de classe, id, ou a tag.
    
    Sempre captura o primeiro encontrado.
​
    A query de busca pode ser encadeada.
​
  - querySelectorAll()
​
    Busca todos com o mesmo hook.
​
## Manipular elementos
​
  São funções que adicionam e/ou removem elementos dentro de uma determinada tag específica ou dentro do corpo do HTML.
​
  - document.createElement()
​
    Função que cria um elemento, com a tag específicada como parâmetro.
​
  - appendChild()
​
    Acrescenta o elemento criado(tópico anterior) em um determinado, num elemento pai.
​
  - removeChild()
​
    Remove o elemento de um elemento pai.
​
## Eventos
​
  Eles são os gatilhos que promovem as interações com a página.
​
  - addEventListener()
​
    Adiciona uma escuta um evento que acontece na página. E realizam uma ação descrita pela função que você chama como um segundo parâmetro.
​
  - Eventos
​
    - Click
​
      Quando você clica em algum elemnto da página.
​
    - Keyup
​
      Quando você solta uma tecla.
​
    - Input
​
      Quando você altera o valor da input.
​
    - Mousemove(Bonus)
​
      By hamaji: Quando você mexe o mouse!

