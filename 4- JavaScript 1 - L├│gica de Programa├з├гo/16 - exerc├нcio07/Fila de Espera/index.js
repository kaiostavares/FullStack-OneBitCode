let patients = [];

let choice = null;

while (choice != 3) {

  let orderOfPatients = "Ordem de pacientes:";
  
  for (let index = 0; index < patients.length; index++) {
    orderOfPatients += "\n" + (index + 1) + "º " + patients[index];
  }

  if (patients.length != 0) {
    choice = window.prompt(orderOfPatients + "\n\nEscolha:" + "\n1-Novo Paciente" + "\n2-Consultar Paciente" + "\n3-Sair"
    );
  } else{
    choice = window.prompt("Não há pacientes" + "\n\nEscolha:" + "\n1-Novo Paciente" + "\n2-Consultar Paciente" + "\n3-Sair");
  }
  

  switch (choice) {
    case "1":
      let newPatient = window.prompt("Informe o nome do novo paciente:");
      patients.push(newPatient);
      break;
    case "2":
      if (patients.length != 0) {
        let consultedPatient = patients.shift();
        window.alert(consultedPatient + " foi consultado!");
        break;
      } else {
        window.alert("Todos os pacientes foram consultados");
        break;
      }

    case "3":
      window.alert("Encerrando os atendimentos");
      break;
    default:
      window.alert("Opção inválida");
  }
}
