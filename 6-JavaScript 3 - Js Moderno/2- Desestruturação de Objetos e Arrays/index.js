const person = {
  name: "Kaio",
  job: "Developer",
  parents: ["Wagner", "Claudiane"]
}

const name = person.name //Usual de ser ver

const {job,parents} = person // Criando variaveis a partir das propiedades do objeto

console.log(name, job, parents)

const [father, mother] = parents //Criando variaveis a partir dos parâmetros dos Arrays

console.log(father, mother)

function createUser({name, job, parents}){
  const id = Math.floor(Math.random() * 9999)
  return {id, name, job, parents}
}

const anyUser = createUser(person)

console.log(anyUser)
