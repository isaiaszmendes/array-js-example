const alunos = [
    { nome: 'Isaias', nota: 9.5, bolsista: false },
    { nome: 'Roberta', nota: 5.6, bolsista: true },
    { nome: 'Carina', nota: 6.1, bolsista: false },
    { nome: 'Alex', nota: 7.5, bolsista: true },
    { nome: 'Marisa', nota: 4.2, bolsista: false },
    { nome: 'Caio', nota: 8.3, bolsista: true }
];

// console.log(alunos.map(a => a.nota));


// // pega e guarda o aluno com o maior nome
// let nomeTamanho = 0;
// let nomeMaior;

// alunos.forEach(aluno => {
//     const nomeAtual = aluno.nome.length
//     if (nomeAtual > nomeTamanho) {
//         nomeTamanho = nomeAtual;
//         nomeMaior = aluno;
//     }
// })

// console.log(`${nomeMaior.nome} com ${nomeMaior.nome.length} letras`);


// // pega e guarda o aluno com a nota mais alta

// let maiorNota = 0;
// let alunoNota;

// alunos.forEach(aluno => {
//     const notaAtual = aluno.nota
//     if (notaAtual > maiorNota) {
//         maiorNota = notaAtual
//         alunoNota = aluno.nome
//     }
// })

// console.log(alunoNota)

// // How reduce works

// const sum = [1,2,3,4,5].reduce((accumulatedValue, currentValue) => 
//     accumulatedValue + currentValue
// )
// console.log(sum);

const maiorN = alunos.reduce((accumulatedValue, currentValue) => {
    console.log(accumulatedValue, currentValue.nota);

    if (accumulatedValue < currentValue.nota) {
        accumulatedValue = currentValue.nota
    }
    return accumulatedValue 
}, 0)  // <= inicia o accumulatedValue com o valor 0

console.log(`maior nota é ${maiorN}`);
