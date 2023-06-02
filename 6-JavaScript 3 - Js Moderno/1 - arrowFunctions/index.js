function normalSum (a,b) {
  return a+b
}

console.log(`Soma normal: ${normalSum(4,22)}`)

const anonymousSum = function (a,b) {
  return a +b
}

console.log(`Soma normal: ${anonymousSum(4,22)}`)

const  arrowSum = (a,b)=>{
  return a+b
}

console.log(`Soma normal: ${anonymousSum(4,22)}`)

const subtract = (a,b) => a-b

console.log(`A subtração de 7 por 2 é ${subtract(7,2)}`)

const towns = ['Prontera', 'Izlude', 'Payon', 'Alberta', 'Genebra', 'Pantheon']

const startingWithP = towns.filter(town => town[0] === 'P')

console.log(startingWithP)