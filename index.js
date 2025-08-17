const elementUnhideOrder = ["#pfp,#vbar","#profilePara1", "#profilePara2"];

document.addEventListener("DOMContentLoaded", () => {
    animateHeader("#name", "Joshua Beighton");
    animateTabs(elementUnhideOrder);
});