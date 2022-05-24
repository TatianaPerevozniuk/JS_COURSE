'use strict'
console.log('Hello');

let arr1 =  ['a', 'b', 'c'];
const arr2 =  [1, 2, 3];

console.log('Task1');
const newArr = [].concat(arr1, arr2); // create new array V1
const newArr2 = [...arr1, ...arr2]; // create new array V2
console.log(`Created new array V1 = ${newArr} V2 = ${newArr2}`);

console.log('Task2');
arr1.push(...arr2);
console.log(arr1);

console.log('Task3');
const numbers = [3, 4, 1, 2, 7];
numbers.sort((a, b) => a - b);
console.log(numbers);

console.log('Task4');
/**
 * @param {Array} array
 */
const reverse = (array) => {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[(array.length - 1) - i];
    }
    return result;
}
console.log(reverse(arr2));

console.log('Task5');
console.log('typeof null = ', typeof null);
