// Bônus

// Utilize somente Higher Order Functions para fazer as operações com o array;
// Todas as soluções acima realizaram esse bonus.

// Refatore a Promise para utilizar somente async e await.

const sumRandomNumbers = () => {
  const myArray = Array.from(
    { length: 10 },
    () =>  Math.floor(Math.random() * 50) + 1
  );
  const sum = myArray.map(number => number * number)
                     .reduce((number, acc) => number + acc, 0);

  if (sum > 8000) throw new Error();

  return sum;
};

const generateArrayFromSum = sum => [2, 3, 5, 10].map(number => sum / number);

const fetchPromise = async () => {
  try {
    const sum = await sumRandomNumbers();
    const array = await generateArrayFromSum(sum);

    console.log(array);
  } catch(e) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

fetchPromise();
