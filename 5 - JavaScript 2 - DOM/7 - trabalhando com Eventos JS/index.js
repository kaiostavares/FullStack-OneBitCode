function register(ev){
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation){
        alert("Usuário " + username + " registrado!")
    } else {
        alert("As senhas não conferem")
    }
}

function removeEvent(){
    button.removeEventListener("click", register)
    alert("Evento removido")
}


const button = document.getElementById('register-button')
const removeButton = document.getElementById('removeEvent')

button.addEventListener("click", register)
removeButton.addEventListener("click", removeEvent )