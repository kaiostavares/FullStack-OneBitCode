const playerNumbers = []

function confirmPlayer(){
    //Player informations
    const position = document.getElementById('playerPosition')
    const name = document.getElementById('playerName')
    const number = document.getElementById('playerNumber')

    //Elements to show the informations
    const section = document.getElementById('viewPlayers')
    const h3 = document.createElement('h3')
    const ulPlayer = document.createElement('ul')
    const liP = document.createElement('li')
    const liNa = document.createElement('li')
    const liNum = document.createElement('li')
    
    const validation = validationPlayer(position, name, number)
    if(validation){
        var confirmation = analysePlayer(position, name, number)
        if(confirmation){
            playerNumbers.push(number.value)
            h3.innerText = "Jogador camisa " + number.value
            liP.innerText = "Posição : " + position.value
            ulPlayer.append(liP)
            liNa.innerText = "Nome: " + name.value
            ulPlayer.append(liNa)
            liNum.innerText = "Número: " + number.value
            ulPlayer.append(liNum)
            section.append(h3, ulPlayer)
            
        }
    }
    
    clearInputs(position, name, number)
    console.log(playerNumbers)

}  

function clearInputs(position, name, number){
    position.value = null
    name.value = null
    number.value = null
}


function validationPlayer(position, name, number){
    position = position.value
    name = name.value
    number = number.value

    if( !(position && name && number)){
        alert("Preencha todos os campos corretamente")
        return false
    } else if ((playerNumbers.includes(number))){
        alert("Número do jogador já existe")
        number= null
        return false
    }

    return true
}

function analysePlayer(position, name, number){
    position = position.value
    name = name.value
    number = number.value
    
    const confirmation = confirm("As informções do jogador que deseja escalar estão corretas?\nPosição: " + position + "\nNome: " + name + "\nNúmero: " + number)

    return confirmation
}