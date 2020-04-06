window.onload = function () {

    let settingsButton = document.getElementById("settingsButton");
    let settings = document.getElementById("settings");
    let backGround = document.getElementById("background-input");
    let color = document.getElementById("color");
    let fontSize = document.getElementById("font-size");
    let lineHeight = document.getElementById("line-height");
    let fontFamily = document.getElementById("font-family");

    if (typeof (Storage) != "undefined") {
        document.body.style.backgroundColor = localStorage.backgroundColor;
        backGround.value = localStorage.backgroundColor;

        document.body.style.color = localStorage.color;
        color.value = localStorage.color;

        document.body.style.fontSize = localStorage.fontSize + "px";
        fontSize.value = localStorage.fontSize;

        document.body.style.lineHeight = localStorage.lineHeight + "px";
        lineHeight.value = localStorage.lineHeight;

        document.body.style.fontFamily = localStorage.fontFamily;

        let button = document.getElementById("settings")
        button.style.backgroundColor = localStorage.color;
        button.style.color = localStorage.backgroundColor;
    }

    settingsButton.addEventListener("click", function () {
        if (settings.style.display == "none")
            settings.style.display = "block";
        else
            settings.style.display = "none";
    })

    backGround.addEventListener("change", function () {
        document.body.style.backgroundColor = backGround.value;
        settings.style.color = backGround.value;
    })

    color.addEventListener("change", function() {
        document.body.style.color = color.value;
        settings.style.backgroundColor = color.value;
    })

    fontSize.addEventListener("change", function() {
        document.getElementById("article").style.fontSize = fontSize.value + "px";
    })

    lineHeight.addEventListener("change", function() {
        document.getElementById("article").style.lineHeight = lineHeight.value + "px";
    })

    fontFamily.addEventListener("keyup", function() {
        document.body.style.fontFamily = fontFamily.value;
        fontFamily.value = '';
    })


    document.getElementById("storeButton").addEventListener("click", function () {
        localStorage.backgroundColor = backGround.value;
        localStorage.color = color.value;
        localStorage.fontSize = fontSize.value;
        localStorage.lineHeight = lineHeight.value;
        localStorage.fontFamily = document.body.style.fontFamily;
    })
}