const aprovados = ['Agatha', 'Guilherme', 'Amanda', 'Silvio', 'Maria', 'Flávia', 'Isaías', 'Ygor', 'Paulo'];

// aprovados.forEach(function(nome, indice){
//     console.log(`${indice +1} - ${nome}`);
// })

aprovados.forEach((nome,indice) => {
    console.log(`${indice +1} - ${nome}`);
})

aprovados.forEach((nome,indice, array) => {
    console.log(`${indice +1} - ${nome}`);
    console.log(array);
})


const exibir = elemento => console.log(elemento);

aprovados.forEach(exibir);