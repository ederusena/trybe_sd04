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

// Exercicio 1 parte 1
const ex1 = (obj, key, value) => obj[key] = value;
console.log(ex1(lesson2, 'turno', 'manhã'));
console.log(lesson2);

// Exercicio 1 parte 2 
const ex2 = obj => Object.keys(obj);
console.log(ex2(lesson2));