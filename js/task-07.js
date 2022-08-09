const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

input.addEventListener("input", onSliderMove);

function onSliderMove(event) {
    text.style.fontSize = `${event.currentTarget.value}px`
    
}