const button1 = document.getElementById("menuInterativo");
button1.addEventListener('click', interativeMenu);

const button2 = document.getElementById("controleFinanceiro");
button2.addEventListener('click',financyControl);

function interativeMenu() {
  let option = "";

  do {
    option = window.prompt(
      "Escolha uma das opções:" +
        "\n1 - Opção um" +
        "\n2 - Opção dois" +
        "\n3 - Opção três" +
        "\n4 - Opção quatro" +
        "\n5 - Encerrar"
    );

    switch (option) {
      case "1":
        window.alert("Você escolheu a opção 1");
        break;
      case "2":
        window.alert("Você escolheu a opção 2");
        break;
      case "3":
        window.alert("Você escolheu a opção 3");
        break;
      case "4":
        window.alert("Você escolheu a opção 4");
        break;
      case "5":
        window.alert("Encerrando....");
        break;
      default:
        window.alert("Opção inválida");
    }
  } while (option !== "5");
}


function financyControl(){
    window.alert("Entrando no banco...")
    let money = Number(window.prompt("Informe a quantidade inicial de dinehiro"))
    let option = ""
    do{
        
        option = window.prompt(
            "Dinheiro disponível: R$ " + money + 
            "\nEscolha uma das opções:" +"\n"+
            "\n1 - Depositar" +
            "\n2 - Sacar ou transferir" +
            "\n3 - Sair")
        
        switch(option){
            case "1":
                let deposit = Number(window.prompt("Informe o valor do deposito"))
                money += deposit
                break
            case "2":
                let withdraw = Number(window.prompt("Informe o valor que deseja sacar ou transferir"))
                if(money < withdraw){
                    window.alert("Saldo insuficiente")
                } else{
                    money -= withdraw
                }
                break
            case "3":
                window.alert("Fechando conta...")
                break
            default:    
                window.alert("Opção inválida")
        }

    }while(option !== "3")
}