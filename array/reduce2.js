Array.prototype.reduce2 = function(callback,firtValue) {
    let acumlador = firtValue ? firtValue : this[0]
    for (let i = 1; i < this.length; i++) {
        acumlador = callback(acumlador, this[i], i, this)        
    }
    return acumlador
}

const alunos = [
    { nome: 'Isaias', nota: 9.5, bolsista: true },
    { nome: 'Roberta', nota: 5.6, bolsista: true },
    { nome: 'Carina', nota: 6.1, bolsista: true },
    { nome: 'Alex', nota: 7.5, bolsista: true },
    { nome: 'Marisa', nota: 4.2, bolsista: false },
    { nome: 'Caio', nota: 8.3, bolsista: true }
];

const todosBolsistas = (resultado,bolsista) => resultado && bolsista;

console.log(alunos.map(a => a.bolsista).reduce2(todosBolsistas));

