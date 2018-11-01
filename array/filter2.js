// reescrevendo filter
Array.prototype.filter = function(callback){
    const newArray = [];

    for(let i = 0; i < this.length; i++){
        if (callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2800, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
    {nome: 'Caderno', preco: 22.56, fragil: false}
];

console.log('________________________________________________ 1');

// retornar os caros e os fragil igual a true
// 3 formas de fazer

console.log(produtos.filter2(e => {
    if (e.fragil === true && e.preco > 500) {
        return true
    }
}));


console.log('________________________________________________ 2');

console.log(produtos.filter2(e => {
    return e.fragil === true
}).filter2(e => {
    return e.preco > 500
}));

console.log('________________________________________________ 3');

const caro      = item => item.preco > 500; 
const fragil    = item => item.fragil;

console.log(produtos.filter2(caro).filter2(fragil));