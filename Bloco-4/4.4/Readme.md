# Parte I - O DOM. Ou: como o HTML e o JavaScript se comunicam?

Pois bem, o DOM é uma estrutura da sua página que o navegador monta quando lê. O seu intuito é justamente permitir ao programa acessar os elementos da página usando código e dar a ele o poder de manipulá-las.

O texto abaixo introduz de forma um pouco mais longa o conceito de DOM. Leia os dois primeiros itens: O que é o DOM e DOM e JavaScript.

Artigo da Mozilla de introdução ao DOM .
https://developer.mozilla.org/pt-BR/docs/DOM/Referencia_do_DOM/Introdu%C3%A7%C3%A3o

Por exemplo, o DOM padrão especifica que o método getElementsByTagName no código abaixo deve retornar uma lista de todos os elementos <p> no documento:

var paragraphs = document.getElementsByTagName("p");
// paragraphs[0] is the first <p> element
// paragraphs[1] is the second <p> element, etc.
alert(paragraphs[0].nodeName);

# Parte II - Seletores de elementos
Vamos a um exemplo! Suponha que você quer acessar a informação que está dentro da <div> de um site. Você pode estar baixando informações de sua página para alimentar uma base de dados, por exemplo.

Utilizando JavaScript, você pode, com código, recuperar exatamente o texto que está dentro da <div> que você quiser.

Para entender como você pode fazer isso, vamos entender a função getElementById.

Curtiu? E observe bem: após recuperar o elemento que escolheu via JavaScript, você pode alterá-lo! Para começar a praticar, copie para um arquivo em sua máquina o exemplo abaixo.

Copiar
<!DOCTYPE html>
<html>
  <body>
    <h2 id="page-title">Título</h2>
    <p id="paragraph">Dê uma cor para este parágrafo!</p>
    <h4 id="subtitle">Subtítulo</h4>
    <p id="second-paragraph">Segundo parágrafo!</p>

    <script>
      var paragraph = document.getElementById("paragraph");
      paragraph.style.color = "red";
    </script>
  </body>
</html>



# Document.getElementsByClassName()


Retorna um vetor de objetos com todos os elementos filhos que possuem o nome da classe dada.  Quando invocado no objeto document, o documento é examinado por completo, incluindo o nó raiz. Você também pode invocar getElementsByClassName() em qualquer elemento; isso retornaria somente elementos que são descendentes do nó raiz especificado com o nome da classe.

Sintaxe
var elementos = document.getElementsByClassName(nomes); // ou:
var elementos = rootElement.getElementsByClassName(nomes);
elementos é uma lista viva do HTMLCollection de elementos encontrados.
nomes é um texto que representa uma lista dos nomes das classes que são separados por espaço em branco.
getElementsByClassName pode ser invocado por qualquer elemento, não somente pelo nó raiz document. O elemento no qual ele é chamado será usado como a raiz para a busca.
Exemplos
Retorna todos os elementos que possuem a classe 'teste'

document.getElementsByClassName('teste');
Retorna todos os elementos que possuem as classes 'vermelho' e 'teste'

document.getElementsByClassName('vermelho teste');
Retorna todos os elementos que possuem a classe 'teste' dentro do elemento que possui o ID 'principal'

document.getElementById('principal').getElementsByClassName('teste');
Nós podemos também usar os métodos do Array.prototype em qualquer dos elementos HTMLCollection passando o HTMLCollection como valor deste método. Aqui podemos encontrar todos os elementos do tipo div que possuem a classe 'teste':

var elementosTeste = document.getElementsByClassName('teste');
var divsTeste = Array.prototype.filter.call(elementosTeste, function(elementoTeste) {
    return elementoTeste.nodeName === 'DIV';
});