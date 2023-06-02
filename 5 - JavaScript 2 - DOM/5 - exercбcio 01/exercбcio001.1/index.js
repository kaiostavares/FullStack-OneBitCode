const NUMBERS = []


function registerPlayer(){
    //Variáveis do input
    const playerPosition = document.getElementById('playerPosition').value
    const playerName = document.getElementById('playerName').value
    const playerNumber = document.getElementById('playerNumber').value
    NUMBERS.push(playerNumber)


    const section = document.getElementById('viewPlayers')
    //Elementos a serem adicionados na section id = "viewPlayers"
    const div = document.createElement('div')
    const h2 = document.createElement('h2')
    const ul = document.createElement('ul')
    const liPosition = document.createElement('li')
    const liName = document.createElement('li')
    const liNumber = document.createElement('li')

    div.id = 'player' + playerNumber
    h2.innerText = "Camisa " + playerNumber
    liPosition.innerText = "Posição: " + playerPosition
    liName.innerText = "Nome: " + playerName
    liNumber.innerText = "Número: " + playerNumber
    ul.append(liPosition, liName, liNumber)
    div.append(h2, ul)
    section.appendChild(div)


    document.getElementById('playerPosition').value = ''
    document.getElementById('playerName').value = ''
    document.getElementById('playerNumber').value = ''
}

function deletePlayer(){
    const playerRemove = document.getElementById('deletePlayer').value
    document.getElementById('player' + playerRemove).remove()
    
    document.getElementById('deletePlayer').value = ''
    
}