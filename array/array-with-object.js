const quaseArray = {
    0: 'Isaias',
    1: 'Paulo',
    2: 'Lorelei',
    3: 'Gray'
}


console.log(quaseArray);

console.log(quaseArray[2]);

Object.defineProperty(quaseArray, 'toString', {
    value: function(){ return Object.values(this)},
    enumerable: false
})

console.log(quaseArray);

const myArray = ['Júlia Arraes','Letícia Santos', 'Beatriz', 'Vitória'];
console.log(myArray.toString(), myArray);


