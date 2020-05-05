const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Ex 1.1 Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const ex1 = (obj, key, value) => obj[key] = value;
console.log(ex1(lesson2, 'turno', 'manhã'));
console.log(lesson2);

// Ex 1.2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const ex2 = obj => Object.keys(obj);
console.log(ex2(lesson2));

// Ex 1.3 Crie uma função para mostrar o tamanho de um objeto.
const ex3 = obj => Object.keys(obj).length;
console.log(ex3(lesson2));