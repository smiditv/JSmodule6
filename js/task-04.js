let counterValue = 0;

const counter = document.querySelectorAll("#counter button")
const decrement = counter[0];
const increment = counter[1];

decrement.addEventListener('click', onDecrementCounter);

function onDecrementCounter(event) {
        counterValue -= 1;
    document.querySelector("#value").textContent = counterValue;
}


increment.addEventListener('click', onIncrementCounter);

function onIncrementCounter(event) {
       counterValue += 1;
    document.querySelector("#value").textContent = counterValue;
}