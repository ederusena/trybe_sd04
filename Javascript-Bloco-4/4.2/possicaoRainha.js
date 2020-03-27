let posicaoRainhaLinha = 4;
let posicaoRainhaColuna = 4;
​
let posicaoPecaLinha = 3;
let posicaoPecaColuna = 8;
​
let ataqueFeito = false;
​
if (posicaoRainhaLinha === posicaoPecaLinha ||
    posicaoRainhaColuna === posicaoPecaColuna) {
    ataqueFeito = true;
}
​
// Diagonal superior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna + i;
​
    if (linhaRainha > 8 || colunaRainha > 8) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal inferior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna - i;
​
    if (linhaRainha < 1 || colunaRainha < 1) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal superior esquerda
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha + i;
    let colunaRainha = posicaoRainhaColuna - i;
​
    if (linhaRainha > 8 || colunaRainha < 1) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
// Diagonal inferior direita
for(let i = 1; i < 8; i+=1) {
    let linhaRainha = posicaoRainhaLinha - i;
    let colunaRainha = posicaoRainhaColuna + i;
​
    if (linhaRainha < 1 || colunaRainha > 8) {
        break;
    }
​
    if (posicaoPecaLinha === linhaRainha && posicaoPecaColuna === colunaRainha) {
        ataqueFeito = true;
    }
}
​
if (ataqueFeito) {
    console.log("Parabéns para a Rainha");
} else {
    console.log("Não foi dessa vez!");
}