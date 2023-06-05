function sum(...numbers){
  return numbers.reduce((accum,num)=> accum + num,0)
}

console.log(sum(1,1))
console.log(sum(2,2,2,2,2,2,2,2))
console.log(sum(1,2,3,4,5,6,7,8,9,10))
console.log(sum(1,1/2,1/3,1/4,1/5,1/6))