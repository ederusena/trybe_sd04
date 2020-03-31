function somaArray(N) {
  let soma = 0;

  for (let index = 1; index <= N; index++) {
    
    soma = soma + index; 
  }
  return soma;
  
}

console.log(somaArray(5))