//arrays 

//let array = ['string', 1, true];
//console.log(array);

let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[4]);

//foreach
array.forEach(function(item, index){console.log(item, index)});
// vai fazer uma repetição para cada item do array, mostrando o item e o index

//push
array.push('novo item');
console.log(array);

//pop
array.pop();
console.log(array);

//shift
array.shift();
console.log(array);

//unshift
array.unshift('novo item no inicio');
console.log(array);

//indexOf
console.log(array.indexOf(true));

//splice
//recebe dois parametros, o primeiro é a posição que vai começar a remover e o segundo é a quantidade de elementos que vai remover
array.splice(0, 3);
console.log(array);

//slice
//recebe dois parametros, o primeiro é a posição que vai começar a remover e o segundo é a posição que vai terminar de remover
let novoArray = array.slice(0, 3);
console.log(novoArray);

//Objeto

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {objectInterno: 'objeto interno'}};
console.log(object.objectInterno);

//destructuring
var string = object.string;
console.log(string);

