// Exercício de retornar apenas o preço
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
];

// Minha forma

let res = carrinho.map((e) => {
    const obj = JSON.parse(e)
    return `R$ ${obj['preco']}`
})

console.log(carrinho);

console.log(res);

// Forma do professor

const paraObjeto = json => JSON.parse(json);
const apenasPreco = produto => produto.preco;

res = carrinho.map(paraObjeto).map(apenasPreco);

console.log(res);