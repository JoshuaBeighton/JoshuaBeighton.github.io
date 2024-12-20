document.addEventListener("DOMContentLoaded", () => {
    animateHeader();
    animateTabs();
});

function animateTabs() {
    const allTabs = document.querySelectorAll(".tab");
    let index = 0;
    const interval = setInterval(function () {
        if (index < allTabs.length) {
            const tab = allTabs.item(index);
            tab.classList.remove("initial");
            index++;
        } else {
            clearInterval(interval);
        }
    }, 400);
}

function animateHeader() {
    const element = document.querySelector("#name");
    const iterationsBeforeFinish = 4;
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
    }, 10);
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
