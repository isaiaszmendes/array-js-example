// refazendo uma função de array
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Guilherme', 'Amanda', 'Silvio', 'Maria', 'Flávia', 'Isaías', 'Ygor', 'Paulo'];

aprovados.forEach2((nome,indice) => {
    console.log(`${indice +1} - ${nome}`);
})