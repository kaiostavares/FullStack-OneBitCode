const houses = []
let option = 0
const houseDetails = {}
do{
    option = Number(window.prompt(
        "Imóveis cadastrados: " + houses.length +
        "\n\nOpções:" +
        "\n1) Cadastrar imóvel" +
        "\n2) Mostrar imóvel" +
        "\n3) Sair"
    ))

    switch(option){
        case 1:
            houseDetails.ownerName = window.prompt("Nome do propietário: ")
            houseDetails.rooms = window.prompt("Informe a quantidade de quartos: ")
            houseDetails.bathroom = window.prompt("Informe a quantidade de banheiros:")
            houseDetails.garage = window.prompt("Informe se a casa têm garagem (Sim/Não): ")
            houses.push(houseDetails)
            break
        case 2:
            let savedHouses = "Casas cadastradas: "
            if(houses.length != 0){
                for(let i =0; i < houses.length; i++){
                    savedHouses += "\n" + (i +1) + "º casa: " +
                    "\nNome do propietário: " + houses[i].ownerName +
                    "\nQuantidade de quartos: " + houses[i].rooms +
                    "\nQuantidade de banheiros: " + houses[i].bathroom +
                    "\nGaragem: " + houses[i].garage + "\n"
                }
                window.alert(savedHouses)
            } else{
                window.alert("Ainda não há casas cadastradas")
            }
            break
        case 3:
            window.alert("Saindo...")
            break
        default:
            window.alert("Opção inválida")
    }
}while(option !== 3) 