//Funções de alta-ordem, ou high-order functions, são funções que recebem outras funções como parâmetro e as executam em algum momento
function calcular(a, b, operacao){
    console.log("Realizando uma operação")
    const resultado = operacao(a,b)
    return resultado
}

//Reapre que não usamos os () ao lado do nome função, porque ao fazer isso estariámos execuatando a função 
function somar(x, y){
    console.log("Realizando soma.")
    return x + y 
}
console.log(calcular(3, 5, somar))
console.log(somar) // Retorna a própia função 
console.log(somar(1,1)) //Chama a função (retorna o resultado da função )

//Também podemos escrever funções anônimas dentro da própia chamada da high-order function
calcular(9,2,function(x,y){
    console.log("Realizando subtração")
    return x-y
})


// Essas funções que são passadas como parâmetros geralmente são chamadas de callbacks
// Um exemplo comum de high-order function no javascript é a função .forEach() dos arrays
function exibirElementos(elemento, indice, array){
    console.log({
        elemento, 
        indice, 
        array
    })
}

const lista = ["Maça", "Banana", "laranja", "Limão", "Uva"]
//forma tradicional
for (let i =0; i < lista.length; i++){
    exibirElementos(lista[i], i, lista)
}
// Forma funcional
lista.forEach(exibirElementos)  
// Também pode ser feito:
lista.forEach(function(elemento, indice, array){
    console.log({
        elemento,
        indice,
        array
    })
})