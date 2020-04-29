window.onload = () => {
    var clickCard = document.getElementsByClassName("turned-img");

    clickCard[0].addEventListener('click', function () {

        var countCard = document.getElementsByClassName("card");
        var div = document.createElement("div");                   // Create a <div> element
        var imgElement = document.createElement("img");
        var divContainer = document.getElementsByClassName("turned-card"); // Get Element div container for add other
        var img = `./img/${getRandomImage()}`;      // adicionar path da imagem randomicamente
        imgElement.src = img;                                   // insert imabe
        div.classList.add("card");
        div.appendChild(imgElement);
        if (countCard.length <= 6) {
            divContainer[0].appendChild(div);                             // Append <p> to <body>
        } else if (countCard.length <= 13) {
            divContainer[1].appendChild(div);
        }
    });

    // Função que retorna uma classe aleatoria de transformacao
function getRandomImage() {
    var arrImage = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
    // Calculo randomico para retornar um index aleatorio do nosso array de classes.
    // Pegamos um valor randomico decimal de 0 a 1 e multiplicamos pelo tamanho do array e arredondamos para baixo.
    //  ex: 0.8420929154329106 * 7 = 5.894650408030374 -> 5
    const imageIndex = Math.floor(Math.random() * arrImage.length)
    return arrImage[imageIndex]; // Em seguida retornamos o item que está nessa posição aleatoria do array
}
}

