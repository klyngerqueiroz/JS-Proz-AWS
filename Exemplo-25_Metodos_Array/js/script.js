//length

var arr = [1,2,3,4,5]

for(var i = 0; i<arr.length; i++){

console.log(arr[i])
}
//push

arr.push(6)

console.log(arr)

//pop

arr.pop(6)

console.log(arr)

//unshift

arr.unshift(0);
arr.unshift('teste');

console.log(arr)

//shift

arr.shift('teste')
console.log(arr)

//acessar o último elemento do array

console.log(arr[arr.length - 1]);

//isArray

console.log(Array.isArray(5));
console.log(Array.isArray(arr));


/************Metodos de Array Parte 2 **********/


//splice

var lista = [1,2,3,4,5];

arr.splice(2, 0, 999);

console.log(arr);

arr.splice(4, 1);

console.log(arr);

console.log(arr.indexOf(4));



