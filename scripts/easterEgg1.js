let count=0;

function coin(){

    const superMario = document.getElementById("super-mario")
    const coinSound = document.getElementById("coin-sound")
    superMario.innerHTML = `<p id="super-mario" style="color: rgb(255, 233, 34);">Super Mario World<br>R$ 42,00</br></p>`
    
    coinSound.play()
}