function coin(){
    const superMario = document.getElementById("super-mario")
    const coinSound = document.getElementById("coin-sound")
    coinSound.play()
    setTimeout(() => {},1000)
    superMario.innerHTML = `<p id="super-mario" style="color: rgb(255, 233, 34);">Super Mario World<br>R$ 42,00</br></p>`
}