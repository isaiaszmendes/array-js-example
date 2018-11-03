const escola =[{
    nome: 'Turma M1',
    alunos: [{
        nome: 'Alan',
        nota: 8.1
    },
    {
        nome: 'Sabrina',
        nota: 5.4
    }]
},{
    nome: 'Turma M2',
    alunos: [{
        nome: 'Michelle',
        nota: 8.5,
    },
    {
        nome: 'Paula',
        nota: 6.5
    }]
}]

const getNotaDoAluno = aluno => aluno.nota;
const getNotaDaTurma = turma => turma.alunos.map(getNotaDoAluno);

const notas = escola.map(getNotaDaTurma);
console.log([].concat(notas));

console.log([].concat([ 8.1, 5.4 ], [ 8.5, 6.5 ] ));


Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

console.log(escola.flatMap(getNotaDaTurma));
