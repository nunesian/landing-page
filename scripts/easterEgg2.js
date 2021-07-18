function toasty(){
    const text = document.getElementById("mortal-kombat-price")
    const easterEgg = document.getElementById("punch-button")
    const track = document.getElementById("track").play()
    const toasty = document.getElementById("toasty")
    easterEgg.innerHTML = `<div id="punch-button">
    <div><span>Punch Price</span></div>
    <img src="./images/punch.png" alt="Easter Egg"/>
</div>`    
    text.innerHTML = `<p class="description" id="mortal-kombat-price" style="color: red">Mortal Kombat: <br>R$ 55,00</br></p>`
    toasty.innerHTML = `<div id="toasty"><img src="./images/toasty.png" width=100 height=100/></div>`
    setTimeout( () => {
        toasty.innerHTML = `<div id="toasty"></div>`
    }, 500)    

}