function fabricarPessoa(nome, sobrenome, age, job){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;
    pessoa.age = age;
    pessoa.job = job;

    return pessoa;
}

// Parte 1 - Adicionando novas chaves
let pessoaA = fabricarPessoa('Eder', 'Sena');
let pessoaB = fabricarPessoa('Damaris', 'Monteiro');

pessoaA.age = "32";
pessoaA['sobrenome'] = "Soares";

console.log(pessoaA, pessoaB);

let customer = fabricarPessoa('Roberto', undefined, 22, 'Teacher');
let newKeys = 'lastName';
const lastName = 'Ferreira';
customer[newKeys] = lastName;
newKeys = 'fullname';
const fullname = `${customer.nome} ${lastName}`
customer[newKeys] = fullname;

console.log(customer)

// Parte 2 - Object.keysssss

console.log(Object.keys(customer))

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: () =>{ return foo; } } });
my_obj.foo = 1;
my_obj.carro = {'modelo': 'corsa', 'cor': 'verde'}
console.log(Object.keys(my_obj)); // console: ['foo']

const student1 = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkills: 'Ótimo',
  };
  
  const student2 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom', // chave adicionada
  };

  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for(i in arrayOfSkills){
      console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`);
    }
  };

  console.log('Estudante 1');
  listSkills(student1);

  console.log('Estudante 2');
  listSkills(student2);