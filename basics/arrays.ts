/**
 * Arrays são um conjunto homogêneo de typos semelhantes que possui
 * uma localização na memória e podem armazenar diversos valores 
 * na memória.
 * 
 * O array é baseado em índice onde começa com 0 e vai até i+1
 */

// Declaração
let fruits: string[] = ['Apple', 'Orange', 'Banana'];
// Genérico
let values: (string | number)[] = ['Apple', 2, 'Orange', 3, 4, 'Banana'];
let values2: Array<string | number> = ['Apple', 2, 'Orange', 3, 4, 'Banana'];

/*
*Acessando elementos do array
ts-node arrays.ts
    Apple
    Orange
    Banana
    undefined
*/
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

console.log();
// Acessando via LOOP
for (let index in fruits) {
    console.log(fruits[index]); // output: Apple Orange Banana
}

for (let fruit of fruits) {
    console.log(fruit); // output: Apple Orange Banana
}

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]); // output: Apple Orange Banana
}
console.log();
/**
 * Vantagens:
 * - Poder recuperar ou classificar de forma mais eficiente
 * - Poder acessar de forma aleatória os dados da matriz usando ponteiro de acesso
 * 
 * Desvantagens:
 * - O tamanho do array é fixo
 */

// Matriz Unidimencional - única linha
let arr:number[];
arr = [1,2,3,4];
console.log("Array[0]: " + arr[0]);
console.log("Array[1]: " + arr[1]);

console.log();

// Matriz Multidimencional - linhas e colunas
let mArray:number[][] = [[10, 20, 30], [50, 60, 70]];
console.log(mArray[0][0]);
console.log(mArray[0][1]);
console.log(mArray[0][2]);
console.log();
console.log(mArray[1][0]);
console.log(mArray[1][1]);
console.log(mArray[1][2]);

// Array como Objeto
let arrObject: string[] = new Array("GeeksForGeeks", "2200", "Typescript", "Javascript");
for (let i = 0; i < arrObject.length; i++)
    console.log(arrObject[i]);

// Passando array para uma função
function display(arr_values:string[]) {
    for (let i = 0; i < arrObject.length; i++)
        console.log(arrObject[i])
}

display(arrObject);

/**
 * Usando operador 'Spread' 
 * Serve para inicializar ou desestruturar objetos
 */
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
// Criando novo array com uma cópia usando spread
let copyArray = [...arr1];
console.log("CopiedArray: " + copyArray);
// Criando um novo array com elementos existentes
let newArray = [...arr1, 7, 8];
console.log("NewArray: " + newArray);
// Criando um array com dois arrays existentes
let mergedArray = [...arr1, ...arr2];
console.log("MergedArray: " + mergedArray);

