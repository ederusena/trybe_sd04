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

// Ex 2.1 Crie uma função para adicionar o turno da manhã na lesson2.
// Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado,
// a chave que deverá ser adicionada e o valor dela.
const ex1 = (obj, key, value) => obj[key] = value;
console.log(ex1(lesson2, 'turno', 'manhã'));
console.log(lesson2);

// Ex 2.2 - Crie uma função para listar as keys de um objeto.
// Essa função deve receber um objeto como parâmetro.
const ex2 = obj => Object.keys(obj);
console.log(ex2(lesson2));

// Ex 2.3 Crie uma função para mostrar o tamanho de um objeto.
const ex3 = obj => Object.keys(obj).length;
console.log(ex3(lesson2));

// Ex. 2.4 Crie uma função para listar os valores de um objeto.
// Essa função deve receber um objeto como parâmetro.
const ex4 = obj => Object.values(obj);
console.log(ex4(lesson2));

// Ex 2.5 Crie um objeto de nome allLessons,
// que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3.
// Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const ex5 = (obj,obj2,obj3) => Object.assign((obj,obj2,obj3));
console.log(ex5(lesson1, lesson2, lesson3));