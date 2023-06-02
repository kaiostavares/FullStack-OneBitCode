const vacancies = []

function listVacancies(){
    const textListVacancies = vacancies.reduce(function(text, vagancy, index){
        //1- nome (candidatos)
        text += (index + 1) + "- " + vagancy.name + "( " + vagancy.candidates.length + " candidatos )\n"
        return text  
    }, "")

    alert(textListVacancies)
}

function createVacancy(){
    const name = prompt("Informe o nome da vaga")
    const description = prompt("Informe uma descriçao para a vaga")
    const deadline = prompt("Informe o prazo final para a inscrição (dd/mm/aaaa)")

    // Nome (descrição)
    //Prazo de inscrição: dd/mm/aaaa
    const confirmation = confirm(
        "O usuário confirma as informações de criação da vaga? " +
        "\n" + name + "( " + description + " )" +
        "\nPrazo de inscrição: " + deadline
    )

    if(confirmation){
        const createdVacancy = {name, description, deadline, candidates: new Array}
        vacancies.push(createdVacancy)
        alert("Vaga criada")
    }
}

function showVacancies(){
    const index = parseFloat(prompt("Informe o indice da vaga")) - 1

    if(index >= vacancies.length || index < 0){
        alert("Indíce inválido")
        return
    }

    const textShowcandidates = vacancies[index].candidates.reduce(function(text,candidates){
        text += candidates + "; "
        return text
    }, "")

    alert(
        "Indice: " + (index + 1) +
        "\nNome: "+ vacancies[index].name +
        "\nDescrição: " + vacancies[index].description +
        "\nQuantidade de vagas: " + vacancies[index].candidates.length +
        "\nCandidatos: " + textShowcandidates
    )
}

function createCandidate(){
    const name = prompt("Informe o nome do candidato(a): ")
    const index = parseFloat(prompt("Informe o indice da vaga")) - 1

    const confirmation = confirm(
        "Realizar inscrição nessa vaga?" +
        "\n" + vacancies[index].name + "( " + vacancies[index].description + " )" +
        "\nPrazo de inscrição: " + vacancies[index].deadline + 
        "\nCandidatos inscritos: " + vacancies[index].candidates.length
    )

    if(confirmation){
        vacancies[index].candidates.push(name)
        alert("Inscricao realizada")
    }
}

function deleteVacancy(){
    const index = parseFloat(prompt("Informe o indice da vaga a ser excluida: ")) - 1
    const vagancy = vacancies[index]

    const confirmation = confirm(
        "Tem certeza que deseja excluir a vaga " + (index+1) + "?\n" +
        vagancy.name + "( " + vagancy.description + " )" + 
        "\nPrazo de inscrição: " + vagancy.deadline
    )
    
    if(confirmation){
        vacancies.splice(index,1)
        alert("vaga excluida")
    }
}

function showMenu() {
    const option = parseFloat(prompt(
        "Cadastro de vagas de Emprego\n" +
        "\nEscolha uma das opções abaixo:" +
        "\n1. Listar vagas disponíveis" +
        "\n2. Criar uma nova vaga" +
        "\n3. Exibir vaga" +
        "\n4. Inscrever um candidato" +
        "\n5. Excluir vaga" +
        "\n6. Sair"
    ))

    return option
}

function app(){
    do{
        var option = showMenu()
        switch(option){
            case 1:
                listVacancies()
                break
            case 2:
                createVacancy()
                break
            case 3:
                showVacancies()
                break
            case 4:
                createCandidate()
                break
            case 5:
                deleteVacancy()
                break
            case 6:
                alert("Saindo")
                break
            default:
                alert("Opção inválida")
        }

    }while(option !=6)
}

app()