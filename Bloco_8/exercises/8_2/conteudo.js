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

//   Parte III - Object.values
const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };
  
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  const listSkillsWithValues = (student) => Object.values(student);
  
  // Sem Object.values
  console.log(listSkillsWithFor(student));
  
  // Com Object.values
  console.log(listSkillsWithValues(student));

//   Parte IV - Object.entries

// objeto array-like com ordenação aleatória de chave (key)
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Ou, usando array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };
  const pairKeyValue = Object.entries(países);
  console.log(pairKeyValue);

  for(i in pairKeyValue) {
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
  };