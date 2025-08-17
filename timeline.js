document.addEventListener("DOMContentLoaded", () => {
    animateHeader("#main", "My Timeline");
    animateTimeline();
});

function animateTimeline() {
    const elementUnhideOrder = document.querySelectorAll(".hidden");
    let index = 0;
    const interval = setInterval(function () {
        if (index < elementUnhideOrder.length) {
            unhideElement(elementUnhideOrder.item(index));
            index++;
        } 
        else {
            clearInterval(interval);
        }
    }, 300);
}
