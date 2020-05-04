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

// Parte 2 - Object.keys

let customer = fabricarPessoa('Roberto', undefined, 22, 'Teacher');
let newKeys = 'lastName';
const lastName = 'Ferreira';
customer[newKeys] = lastName;
newKeys = 'fullname';
const fullname = `${customer.nome} ${lastName}`
customer[newKeys] = fullname;

console.log(customer)

