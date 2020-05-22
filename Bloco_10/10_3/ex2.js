// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise.
// Primeiramente, instancie uma Promise.
//       Dentro dela, você deve produzir um array com dez números aleatórios
//       1 a 50 e elevá-los todos ao quadrado.
//       Se a soma de todos esses elementos for inferior a 8000,
//       a promise deve ser resolvida.
//       Caso contrário, ela deve ser rejeitada.
//       Acresça um then e um catch à Promise com qualquer coisa dentro só
//       para que o código funcione.


const fetchPromise = () => {
  const myPromise = new Promise((resolve, reject) => {
    const myArray = Array.from({ length: 10 }, () =>
                    Math.floor(Math.random() * 50) + 1);
    console.log(myArray)
    const sum = myArray.map(number => number * number)
                       .reduce((number, acc) => number + acc, 0);

    if (sum < 8000)
        resolve(sum);
    else
        reject(sum);
  });

  myPromise
    .then((sum) => console.log(`${sum} - Deu bom`))
    .catch((sum) => console.log(`${sum} - Deu ruim`));
};

fetchPromise();
