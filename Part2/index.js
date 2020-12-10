const idInput = document.getElementById('idInput')
const colorInput = document.getElementById('colorInput')
// console.log(inputId, inputColor)
function setCard() {
    const card = document.getElementById(idInput.value)
    card.style.color = colorInput.value
}