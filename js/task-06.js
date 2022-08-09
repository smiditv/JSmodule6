const input = document.querySelector("#validation-input");

const validLength = input.getAttribute("data-length")

input.addEventListener("blur", onInputChange)

function onInputChange(event) {
    
    input.classList.add("invalid")
    input.classList.remove("valid")

    
    if (event.currentTarget.value.length == validLength) {
        input.classList.remove("invalid")
        input.classList.add("valid")
    }
}