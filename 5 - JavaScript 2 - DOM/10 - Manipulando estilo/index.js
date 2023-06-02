//Ao manipular direto pela propiedade style, nao eh possivel utilizar a manipulaccao de classe, por conta da prioridade


//Manipulando estilo diretamente pela propiedade style
function usingLigtTheme(){
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function usingDarkTheme(){
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

//Manipulando estilo atraves das classes CSS
function switchTeme(){
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}

document.getElementById('lightBtn').addEventListener('click', usingLigtTheme)
document.getElementById('darkBtn').addEventListener('click', usingDarkTheme )
document.getElementById('switchBtn').addEventListener('click', switchTeme)