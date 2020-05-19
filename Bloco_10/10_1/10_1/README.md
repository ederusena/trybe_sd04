# Install JEST

## Use o link para instalação
https://medium.com/jaguaribetech/testando-seu-javascript-com-jest-de2a4674f4ad

# Escrevendo os Testes e Funções

### Passo 1: Crie um arquivo calcs.js, e nele coloque o seguinte conteúdo:
```js
function sum(a, b){
   return a + b
}

module.exports = sum
```

### Passo 2: Crie um arquivo testes.test.js, e nele coloque o seguinte conteúdo:
```js
const calcs = require('./calcs')

test('soma 1 e 2 para dar 3', () => {
   expect(calcs(1, 2)).toEqual(3)
})
```
No arquivo calcs.js, você apenas criou uma função simples de somar dois números e exportou ela usando o module.exports. Já no arquivo testes.test.js é onde a magia acontece. Na primeira linha, a constante calcs está recebendo as funções que estão sendo exportadas pelo calcs.js (a constante e o arquivo não precisam ter o mesmo nome), e abaixo está escrito apenas um teste, com a sintaxe bem intuitiva a propósito. Primeiro há uma breve descrição e depois o resultado que ele espera receber a partir de um certo teste.

Agora abra o seu terminal, navegue até a pasta e rode o comando npm test (ele pode demorar um pouco para executar da primeira vez).

Pronto! Você acabou de rodar seu primeiro teste com o Jest. Vamos escrever mais funções e mais testes? Abra o calcs.js, adicione a função division e altere o module.exports, como abaixo:

Agora abra o arquivo de testes e adicione as linhas 7, 8 e 9.

Perceba que antes nós usamos o nome da constante como se fosse o nome da função (após o expect), mas como agora o arquivo calcs.js tem mais de uma função, nós precisamos especificar qual delas será usada no teste. E outra diferença é que o .toEqual considera até as casas decimais, então, se o valor retornado puder ser um número com ponto flutuante use o .toBeCloseTo, e coloque sempre pelo menos dois dígitos após o ponto.
Agora vamos criar o array.js e adicionar uma função que retorna apenas os números pares de dentro de um array.


Acima adicionamos mais um require de outro arquivo, e também mais um teste. Perceba agora que nós pulamos os dois primeiros testes com o .skip e usamos variáveis para o .toEqual e o expect não ficarem muito grandes e confusos.
“Tem como pular vários testes de uma só vez?” Sim!

O describe (linha 4) pode ser usado para agrupar vários testes em uma suíte. Você também pode colocar um .skip nele para pular vários testes sem precisar adicionar o pulo em cada um deles.
Adicione a função addItem4 e altere o module.exports no arquivo array.js, como feito abaixo:

Agora, tire o .skip do describe e adicione o seguinte teste dentro da suíte:

O .toContain é usado quando você espera que um certo array contenha um certo elemento. No caso acima, o array declarado não tem o ‘item4’, mas após a chamada da função addItem4, é esperado que tenha.
Adicione o teste abaixo…

Acima estão mais alguns recursos bem legais, com expressões lógicas que não a simples igualdade.