const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 }
] 


// Imperativo
let total = 0;
for (let i = 0; i < alunos.length; i++) {
    total += alunos[i].nota
}
console.log(total / alunos.length);


// Declarativo 
const getNota = aluno => aluno.nota
const soma = (total, value) => total + value
console.log(alunos.map(getNota).reduce(soma) / alunos.length);

