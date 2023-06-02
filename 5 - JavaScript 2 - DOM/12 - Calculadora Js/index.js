const main  = document.querySelector('main') //Tag main para o tema
const root  = document.querySelector(':root') //Declaracao das variaveis globais Css
const input = document.getElementById('input') //Input da calculadora 
const resultInput = document.getElementById('result') //Input dos resultados

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]
//Caracteres válidos para o usuário digitar

//Adicionar os butoes para que ao clicar eles funcionarem no input da calculadora/
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){ //Pegando todos os butoes atarves da classe charKey e adicionando para cada boato atarves do forEach a funcionalidade de capturar o seu dataset.
    charKeyBtn.addEventListener('click', function(){ //Evento click para cada botao
        const value = charKeyBtn.dataset.value //Prgando seu dataset
        input.value += value //Podando o valor do dataset no inputy da calculadora
    })
})

//Capturando o botao para limpar a calculadora
document.getElementById('clear').addEventListener('click', function() {
    input.value = '' //Limpando o input da calculadora
    input.focus() // Ao limpar chamamos o metodo focus() para focar o input da calculadora
})

//Evento keydown para capturar a tecla apertada pelo usuario
input.addEventListener('keydown', function(ev){
   ev.preventDefault() //Vamos impedir o comportamento padrao pois queremos capturar manualmente o valor inserido pelo usuario
   if (allowedKeys.includes(ev.key)){//ev.key e a tecla acossiada ao evento.
        input.value += ev.key //Adicionando a tecla no input da calculadora
        return
    }
    if(ev.key === 'Backspace'){ // Criacao de uma forma da calculadora apagar os valores inseridos atraves da tecla "Backespace"
        input.value = input.value.slice(0, -1) // Excluindo o ultimo valor inserido atraves do slice (0,-1) => -1(primeira posicao de tras pra frente)
    }
    if(ev.key === 'Enter') { //Ao teclar o enter, a calculadora ira chamar a funcao para calcular o resultado
        calculate()
    }
})

//Adicionando a funcao calculate() tambem ao botao de = na calculadora
document.getElementById('equal').addEventListener('click', calculate)

//Funcao para calcular o resultado
function calculate(){
    //Tratando os erros da calculadora(de forma nao convencional)
    //Adicionando sempre a menssagem de erro e adicionando o style de Erro. Caso a conta seja valida o resultado ira apaarecer e a classe style de erro sera removida. Caso contrario a funcao sera interrompida pois o calculo sera invalido e a mensagem de erro e o style vermelho ficara no input
    
    resultInput.value = 'ERROR' 
    resultInput.classList.add('error')

    const result = eval(input.value) //O eval() serve para avaliar o codigo Js e executar este codigo// Uma funcao perigosa, pois se tivermos algo que ira ter clientes (backend), ja que qqr codigo javascript vai ser executado. Verificar se o usuario eh capaz de controlar oq se passa dentro do eval.
    resultInput.value = result
    resultInput.classList.remove('error')
}

//Trocar o tema da aplicacao de acordo com as variaveis definidas no CSS
document.getElementById('themeSwitcher').addEventListener('click', function(){
    //saberamos em qual tema a aplicaco se encontra atraves do data-theme na tag <main></main>
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light' //Depois de setar as variaveis do CSS para uma cor de tema claro vamos mudar o dataset para "ligth"
    } else {  //Invertando o tema de claro para escuro
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})

//Copiar o resultado da calculadora
document.getElementById('copyToClipboard').addEventListener('click', function (ev){
    const button = ev.currentTarget //Referenciando o botao de copiar o resultado
    if (button.innerText === 'Copy'){
        button.innerText = 'Copied!' //Alterando o texto para mnostrar que o valor do input ja foi copiado
        button.classList.add('success') //Adicioando na classe do botao a classe sucess criada no arquivo Css
        window.navigator.clipboard.writeText(resultInput.value) //Escrevendo o texto (resultado), para ser copiado
    } else{ //Voltando botao para copiar e remover a classe de estilo
        button.innerText = 'Copy'
        button.classList.remove('success')
    }
})