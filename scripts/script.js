const form = document.getElementById("form-id")
let counter = 0;

form.addEventListener("submit", function(evt){

    evt.preventDefault()

    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let storeData;
    
    let data = {
        Nome: name,
        Email: email
    }

    counter = counter+1;

    storeData = JSON.stringify(data)
    localStorage.setItem(counter,storeData)
    alert("E-mail cadastrado com sucesso")
})