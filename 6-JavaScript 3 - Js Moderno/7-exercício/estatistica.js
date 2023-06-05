const media = (...numbers) =>{
  const sum = numbers.reduce((total,currentValue)=> total + currentValue,0)
  return sum/numbers.length
}

const mediaPonderada = (...numbers) =>{
  const sum = numbers.reduce((accum,{number, weight})=> accum + (number * weight),0);
  const sumWeight = numbers.reduce((accm,grades)=>accm + grades.weight,0)
  return sum/sumWeight
}

const mediana = (...numbers)=>{
  const organizedNumbers = [...numbers].sort((a,b)=> a-b)
  const middle = Math.floor(organizedNumbers.length/2)
  if(numbers.length%2 == 0){
    const firstMiddle = organizedNumbers[middle-1]
    const secondMiddle = organizedNumbers[middle]
    return media(firstMiddle,secondMiddle)
  }
  return organizedNumbers[middle]
}

const moda = (...numbers) =>{
  // [ [n,qtd], [n,qtd], [n,qtd]]
  const quantities = numbers.map(num=>[
    num, numbers.filter(n => num ===n).length
  ])
  quantities.sort((a,b)=>b[1] - a[1])
  return quantities
}