function coin(){
    var coinSound = document.getElementById("coin-sound").play()
    const superMario = document.getElementById("super-mario")
    superMario.innerHTML = `<p id="super-mario" style="color: rgb(255, 233, 34);">Super Mario World<br>R$ 42,00</br></p>`
}