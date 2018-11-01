const produtos = [
    {nome: 'Notebook', preco: 2800, fragil: true},
    {nome: 'iPad', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plastico', preco: 18.99, fragil: false},
    {nome: 'Caderno', preco: 22.56, fragil: false}
];

console.log(produtos.filter( e => {
    return e.preco <= 20.00 // return true ou false ... dai vc coloca suas condições
}));

console.log(produtos.filter( e => {
    return false
}));


console.log(produtos.filter( e => {
    return e.preco <= 20.00
}));

console.log(produtos.filter( e => {
    return e.fragil === false
}));

console.log('________________________________________________ 1');

// retornar os caros e os fragil igual a true
// 3 formas de fazer

console.log(produtos.filter(e => {
    if (e.fragil === true && e.preco > 500) {
        return true
    }
}));


console.log('________________________________________________ 2');

console.log(produtos.filter(e => {
    return e.fragil === true
}).filter(e => {
    return e.preco > 500
}));

console.log('________________________________________________ 3');

const caro      = item => item.preco > 500; 
const fragil    = item => item.fragil;

console.log(produtos.filter(caro).filter(fragil));