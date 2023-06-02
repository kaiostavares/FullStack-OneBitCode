function createLabel(name, htmlFor ){
    const label = document.createElement('label')
    label.innerText = name
    label.htmlFor = htmlFor
    return label
}

function createInput(type, id, value, name){
    const input = document.createElement('input')
    input.type = type
    input.id = id
    input.value = value
    input.name = name
    return input
}

let liCounter = 1
const developers = []

const techBtn = document.getElementById('techBtn')
techBtn.addEventListener('click', function(){
    const ulStack = document.getElementById('stacks')
    const newRow = document.createElement('li')
    newRow.id = "Row" + liCounter
    newRow.className = "rowStacks"

    const labelTechName = createLabel("Tecnologia:", "techName")
    const inputTechName = createInput("text", "techName", null)

    const labelExp = createLabel("Experiência:")
    const inputExp1 = createInput("radio", "expRadio" + liCounter + ".1", "0-2 anos", "expRadio" + liCounter)
    const labelExp1 = createLabel("0-2 anos", "expRadio1")
    const inputExp2 = createInput("radio", "expRadio" + liCounter + ".2", "3-4 anos", "expRadio" + liCounter)
    const labelExp2 = createLabel("3-4 anos", "expRadio2")
    const inputExp3 = createInput("radio", "expRadio" + liCounter + ".3", "5+ anos", "expRadio" + liCounter)
    const labelExp3 = createLabel("5+ anos", "expRadio3")

    const deleteRowBtn = document.createElement('button')
    deleteRowBtn.innerText = "Excluir"
    deleteRowBtn.type = 'button'
    deleteRowBtn.addEventListener('click', function(){
        ulStack.removeChild(newRow)
    })
    
    newRow.append(labelTechName, inputTechName, labelExp, inputExp1, labelExp1, inputExp2, labelExp2, inputExp3, labelExp3, deleteRowBtn)
    ulStack.appendChild(newRow)
    liCounter++
})

const devForm = document.getElementById('devForm')
devForm.addEventListener('submit', function(ev){
    ev.preventDefault()

    const devNameInput = document.getElementById("devName")
    const stackRow = document.querySelectorAll(".rowStacks")

    let technologies = []
    stackRow.forEach(function(row){
        const techName = document.querySelector(`#${row.id} input[id="techName"]`).value
        const exp = document.querySelector(`#${row.id} input[type="radio"]:checked`).value 
        technologies.push({name:techName, exp:exp})
    })
    
    const newDev = {name: devNameInput.value, technologies: technologies}
    developers.push(newDev)
    alert('Dev cadastrado!')

    devNameInput.value = ''
    stackRow.forEach(function(row){
        row.remove()
    })

    console.log(developers)
})