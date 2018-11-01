const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];

console.log(pilotos)

pilotos.pop() // remove o últomo elemento do array

console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array

console.log(pilotos)

pilotos.unshift('Hamilton') // add elemento no ínicio do array

console.log(pilotos)

// splice add e remove elementos no array
// O Primeiro argumento serve para indicar o indice o elemento a ser trabalhado
// O Segundo serve para remover a partir do primeiro se for 1 ele remove um emento 2, rm 2 ... se for 0 ele não remove

pilotos.splice(3, 0, 'Isaias', 'Paulo', 'Vando')

console.log(pilotos)

let novoArray = pilotos.slice(2) // get no array apartir do indice 2

console.log(novoArray)

let newArray = pilotos.slice(1, 4) 
// pega do primeiro argumento ao segundo argumento... ele não pega o último elemento
// vai do 1 ao 3 nesse caso

console.log(pilotos)
console.log(newArray)

