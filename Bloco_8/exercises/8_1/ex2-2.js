const longestWord = str => console.log(str.split(' ').reduce((a, b) => a.length > b.length ? a : b));

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu");