function tabuada(){
    const choisedNumber = window.prompt("Escolha um número para calcularmos a tabuada de 1 a 20"
    )
    let resultado ="Tabuada do " + choisedNumber + " :"
    window.alert("Calculando a tabuada....")
    for(let index = 1; index <= 20; index++){
        let operation = parseFloat(choisedNumber) * index
        resultado +="\n" + choisedNumber + " * " + index + " = " + operation
    }
    window.alert(resultado)
}

function palindromo(){
    const choisedWord = window.prompt("Escolha a palavara que deseja avaliar se é um palíndromo")
    let palindromo = ""
    for(let index = choisedWord.length - 1 ; index>=0; index--){
        palindromo += choisedWord[index]
        
    }
    if(choisedWord !== palindromo){
        window.alert(
            "A palavra não é um palíndromo" +
            "\nPalavra escolhida: " + choisedWord +
            "\nPalavra ao inverso: " + palindromo)
    }else
        window.alert(choisedWord + " é um palíndromo")
}