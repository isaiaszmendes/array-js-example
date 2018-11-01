const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

// map é um for com proposito

// map não modifica o array, apenas cria outro outro = array.map()

let res = nums.map((e) => {
    if (e % 2 == 0) {
        return e
    }
    return e * 2;
});

console.log(nums);

console.log(res);

// console.log(`${nums.length} e ${res.length}`);



// let resp = nums.map((e) => {
//     return soma10(parseInt(e))
// })

// console.log(resp);
const soma10 = item => parseInt(item) + 10;
const tripo = item => item * 3;
const paraDinheiro = item => `R$ ${ parseFloat(item).toFixed(2).replace('.',',') }`;

 resposta = nums.map(soma10).map(tripo).map(paraDinheiro);

console.log(nums);
console.log(resposta);


