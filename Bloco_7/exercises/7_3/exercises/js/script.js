window.onload = ((doc) => {
    let $clickCard = doc.getElementsByClassName("turned-img");

    $clickCard[0].addEventListener('click', function() {

        let $countCard = doc.getElementsByClassName("card");
        let $div = doc.createElement("div"); // Create a <div> element
        let $imgElement = doc.createElement("img");
        let $divContainer = doc.getElementsByClassName("turned-card"); // Get Element div container for add other
        let img = `./img/${getRandomImage()}`; // adicionar path da imagem randomicamente

        $imgElement.src = img; // insert imabe
        $imgElement.classList.add(`${getRandomTransform()}`);
        $div.classList.add("card");
        $div.appendChild($imgElement);

        if ($countCard.length <= 6)
            $divContainer[0].appendChild($div); // Append <p> to <body>
        else if ($countCard.length <= 13)
            $divContainer[1].appendChild($div);

    });

    // Função que retorna uma imagem aleatoria
    function getRandomImage() {
        let arrImage = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png"];
        const imageIndex = Math.floor(Math.random() * arrImage.length)
        return arrImage[imageIndex]; // Em seguida retornamos o item que está nessa posição aleatoria do array
    }
    // Função que retorna uma classe aleatoria de transformacao
    function getRandomTransform() {
        let transforms = [
            "rotate", "translate-up", "translate-down",
            "scale-up", "scale-down", "skew-up", "skew-down"
        ]
        const transformIndex = Math.floor(Math.random() * transforms.length)
        return transforms[transformIndex]; // Em seguida retornamos o item que está nessa posição aleatoria do array
    }
})(document);