const alunos = [
    { nome: 'Isaias', nota: 9.5, bolsista: false },
    { nome: 'Roberta', nota: 5.6, bolsista: true },
    { nome: 'Carina', nota: 6.1, bolsista: false },
    { nome: 'Alex', nota: 7.5, bolsista: true },
    { nome: 'Marisa', nota: 4.2, bolsista: false },
    { nome: 'Caio', nota: 8.3, bolsista: true }
];

console.log(alunos.map(a => a.nota));

// soma os valores da nota 
const res = alunos.map(a => a.nota).reduce((acumulador, atual) => {
    console.log(acumulador, atual);
    return acumulador + atual
}, 0); 

console.log(res); 