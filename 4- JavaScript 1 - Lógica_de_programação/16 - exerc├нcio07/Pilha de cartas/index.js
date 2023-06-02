const cards = []
let option = null

do{
    option = window.prompt(
        "Cartas no baralho: " + cards.length +
        "\n1- Adcionar uma carta\n2- Puxar uma carta\n3- Sair")
    
    switch(option){
        case "1":
            const addCard = window.prompt("Informe o nome da carta que deseja adicionar")
            cards.push(addCard)
            break
        case "2":
            const removedCard = cards.pop()
            if(!removedCard){
                window.alert("Não há cartas no baralho")
            } else {
                window.alert("Você puxou um(a) " + removedCard)
            }
            break
        case "3":
            window.alert("Saindo...")
            break
        default:
            window.alert("Opção inválida")
    }
}while(option!=3)