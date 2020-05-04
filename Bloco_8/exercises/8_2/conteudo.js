function fabricarPessoa(nome, sobrenome){
    let pessoa = {};
    pessoa.nome = nome;
    pessoa.sobrenome = sobrenome;

    return pessoa;
}

let pessoaA = fabricarPessoa('Eder', 'Sena');
let pessoaB = fabricarPessoa('Damaris', 'Monteiro');

// Parte 1 - Adicionando novas chaves
pessoaA.age = "32";
pessoaA['sobrenome'] = "Soares";

console.log(pessoaA, pessoaB);

