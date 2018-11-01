const quaseArray = {
    0: 'Silvia',
    1: 'Paulo',
    2: 'José',
    3: 'Fernanda'
}


console.log(quaseArray);

console.log(quaseArray[2]);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this)},
    enumerable: false
})

console.log(quaseArray);

const myArray = ['Júlia','Letícia', 'Beatriz', 'Vitória'];
console.log(myArray.toString(), myArray);


