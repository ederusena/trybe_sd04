//let idade = 5
//console.log(idade)

/* Tipagem */
// let nome = 'Rafael' //string literal
// let idade = 25 //number literal
// let estaAprovado = true //boolean
// let sobreNome = undefined // Undefined
// let corSelecionado = null // sem valor

// typeof nome

// +, -, *, /, **q
let salario = 10;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(salario ** salario);
console.log(salario % salario);

let idade = 18
console.log(idade++);

// operadores de atribuição e operadores lógicos.
let valorTeclado = 100;
valorTeclado += valorTeclado;
console.log(valorTeclado)

valorTeclado = 100;
valorTeclado -= valorTeclado;
console.log(valorTeclado)

// Operador logico &&
// Retorna true para quando os valores derem verdadeiro para a comparacao

let num1 = 10;
let num2 = 10;
let bool = num1 && num2;
console.log( true && true );

// E, no final do conteúdo de hoje, você vai aprender algo que utilizará com muita frequência ao longo de toda a sua carreira:
// as famosas estruturas condicionais.

if (hour < 18) {
    greeting = "Good day";
  }

  //JavaScript Switch Statement
  switch(fruits) {
    case "Banana":
      alert("Hello")
      break;
    case "Apple":
      alert("Welcome")
      break;
    
  default:
  
      alert("Neither");
  }

