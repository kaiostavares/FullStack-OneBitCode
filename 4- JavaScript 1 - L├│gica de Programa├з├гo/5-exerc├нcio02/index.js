function speedTest(){
    const velocity1 = Number(window.prompt("Informe a velocidade do primeiro veículo em km/h:"))
    const velocity2 = Number(window.prompt("Informe a velocidade do segundo veículo em km/h:"))

    if (velocity1 > velocity2) {
        window.alert("Carro 1 é mais rápido")
    } else if (velocity1 < velocity2) {
        window.alert("Carro 2 é mais rápido")
    } else
        window.alert("Os carros têm a mesma velocidade")
}


function damageTest(){
    const name1 = window.prompt("Insira o nome do personagem 1:")
    const atackStatuts = Number(window.prompt("Informe a quantidade de ataque do personagem 1:"))

    const name2 = window.prompt("Insira o nome do personagem 2:")
    let healthPoints = window.prompt("Informe a quantidade de hp do personagem 2:")
    const deffenseStatus = Number(window.prompt("Informe a quantidade de defesesa do personagem 2:"))
    const shield = window.confirm("O personagem 2 possui escudo?")

    let damage = 0

    if (shield && (atackStatuts>deffenseStatus)){
        damage = (atackStatuts - deffenseStatus)/2
    } else if (atackStatuts>deffenseStatus){
        damage = (atackStatuts-deffenseStatus)
    }

    if(damage >= parseFloat(healthPoints)){
        healthPoints = "Morto"
    }else{
        healthPoints -= damage
    }

    window.alert("Batalhando")

    if(shield){
        window.alert("Personagem 1:\n"+
                    "   Nome = " + name1 + "\n"+
                    "   Pontos de ataque = " + atackStatuts +"\n\n" +
                    "Personagem 2:\n"+
                    "   Nome = " + name2 + "\n"+
                    "   Hp = " + healthPoints + "\n"+
                    "   Pontos de defesa = " + deffenseStatus +"\n"+
                    "   Escudo = Sim")
    } else{
        window.alert("Personagem 1:\n"+
        "   Nome = " + name1 + "\n"+
        "   Pontos de ataque = " + atackStatuts +"\n\n" +
        "Personagem 2:\n"+
        "   Nome = " + name2 + "\n"+
        "   Hp = " + healthPoints + "\n"+
        "   Pontos de defesa = " + deffenseStatus +"\n"+
        "   Escudo = Não")
    }
        
}