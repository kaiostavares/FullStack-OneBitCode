let option = 0
let area
let base
let height
let minorBase        
let radius
do{
    option = Number(window.prompt(
        "Bem vindo a calculadora Geométrica!\nEscolha uma das opções:\n" +
        "\n1)Área do triângulo" +
        "\n2)Área do retângulo" +
        "\n3)Área do quadrado" +
        "\n4)Área do trapézio" +
        "\n5)Área do círculo" +
        "\n6)Sair"))

        
    switch(option){
        case 1:
            base = window.prompt("Informe o valor da base do triângulo")
            height = window.prompt("Informe o valor da altura do triângulo")
            area = triangle(base, height)
            window.alert("Á area do triângulo é " + area + "m²")
            break
        case 2:
            base = window.prompt("Informe o valor da base do retângulo")
            height = window.prompt("Informe o valor da altura do retângulo")
            area = rectangle(base, height)
            window.alert("Á area do retângulo é " + area + "m²")
            break
        case 3:
            base = window.prompt("Informe o valor do lado do quadrado")
            area = square(base)
            window.alert("Á area do quadrado é " + area + "m²")
            break
        case 4:
            base = window.prompt("Informe o valor da base maior do trapézio")
            minorBase = window.prompt("Informe o valor da base menor do trapézio")
            height = window.prompt("Informe o valor da altura do trapézio")
            area = trapeze(base,minorBase,height)
            window.alert("Á area do trapézio é " + area + "m²")
            break
        case 5:
            radius = window.prompt("Informe o valor do raio do círculo")
            area = circle(radius)
            window.prompt("Á area do círculo é " + area + "m²")
            break
        case 6:
            window.alert("Saindo...")
            break
        default:
            window.alert("Invalid choice")


    }
}while(option!==6)

function triangle(base, height){
    return (base * height)/2
}

function rectangle(base, height){
    return (base * height)
}

function square (side){
    return rectangle(side, side)
}

function trapeze (majorBase, minorBase, height){
    return (parseFloat(majorBase) + parseFloat(minorBase)) * height/2
}
function circle (radius){
    return (Math.pow(radius, 2) * 3.14)
}