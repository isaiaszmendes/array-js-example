const url = 'https://jsonplaceholder.typicode.com/todos';
const axios = require('axios')


// axios.get(url).then(response => {
//     const funcionarios = response.data;
//     console.log(funcionarios.filter(f => {
//         return f.id >= 0 && f.id <= 250  // cliente entre id 101 a 250
//     }).reduce((acumula, f) => {
//         if (acumula.title.length < f.title.length) {  // maior title desses ai
//             acumula = f
//         }
//         return acumula
//     }));
// })


const entre = f => {
    return f.id >= 0 && f.id <= 250 // filtro
}

const maiorTitle = (f, fAtual) => {
    return f.title > fAtual.title ? f : fAtual // reduce 
}


axios.get(url).then(res => {
    const funcionarios = res.data;

    const fun = funcionarios.filter(entre).reduce(maiorTitle);
    console.log(fun);

})

