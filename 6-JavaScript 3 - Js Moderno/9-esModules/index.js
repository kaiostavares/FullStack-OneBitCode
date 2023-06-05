import {label, input, br} from './functions.js'

console.log(label({for: 'fullname', texContent: 'Nome Completo'}))
console.log(input({id: 'fullname', name: 'fullname', placeholder: 'Digite seu nome completo...'}))
console.log(br())