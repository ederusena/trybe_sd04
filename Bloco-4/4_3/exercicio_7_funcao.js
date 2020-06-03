let palavra1 = "trybe"
let palavra2 = "be"

function verificaFimPalavra(a, b) {
  let tamanhoA = a.length;
  let tamanhoB = b.length;
  let inicioA = tamanhoA - tamanhoB;
  if (b == a.slice(inicioA, tamanhoA)) {
    return true;
  }
  else return false;
}
console.log(verificaFimPalavra(palavra1, palavra2)); 