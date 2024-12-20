document.addEventListener("DOMContentLoaded", () => {
    animateHeader();
});

function animateHeader() {
    const element = document.querySelector("#name");
    const iterationsBeforeFinish = 2;
    let target = "Joshua Beighton";
    let elapsed = 0;
    const interval = setInterval(function () {
        replaceLastChar(element);
        elapsed++;
        if (elapsed >= iterationsBeforeFinish) {
            setLastChar(element, target.charAt(element.innerHTML.length - 1));
            elapsed = 0;
            if (element.innerHTML.length >= target.length) {
                clearInterval(interval);
            } else {
                element.innerHTML += getRandomChar();
            }
        }
    }, 40);
}

function replaceLastChar(element) {
    let text = element.innerHTML;
    text = text.substring(0, text.length - 1);
    text += getRandomChar();
    element.innerHTML = text;
}

function setLastChar(element, char) {
    let text = element.innerHTML;
    text = text.substring(0, text.length - 1);
    text += char;
    element.innerHTML = text;
}

function getRandomChar() {
    let number = Math.floor(Math.random() * 26);
    if (Math.random() > 0.5) {
        number += 65;
    } else {
        number += 97;
    }

    return String.fromCharCode(number);
}
