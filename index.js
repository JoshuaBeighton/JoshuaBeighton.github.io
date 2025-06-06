document.addEventListener("DOMContentLoaded", () => {
    animateHeader();
    animateTabs();
});

const elementUnhideOrder = ["#pfp,#vbar","#profilePara1", "#profilePara2"];

function animateTabs() {
    const allTabs = document.querySelectorAll(".tab");
    let index = 0;
    const interval = setInterval(function () {
        if (index < elementUnhideOrder.length) {
            elementUnhideOrder[index].split(",").forEach(unhideElement);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 400);
}

function unhideElement(elem){
    document.querySelector(elem).classList.remove("hidden");
    document.querySelector(elem).classList.add("unhidden");
}

const iterationsBeforeFinish = 3;
const delay = 8;

function animateHeader() {
    const element = document.querySelector("#name").children[0];
    
    let target = "Joshua Beighton";
    let elapsed = 0;
    const interval = setInterval(function () {
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
        else{
            setLastChar(element, getRandomChar());
        }
    }, delay);
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
