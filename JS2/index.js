"use strict";

// CountOccurences
/**
 * 
 * @param {string} str 
 * @param {string} substr 
 * @returns {number}
 */

function CountOccurences(str, substr) {
    if(typeof str !== "string" || typeof substr !== "string"){
        return 'String or substring isn`t string. Please, try again.'
    }
   const strNew = str.toLowerCase();
   const substrNew = substr.toLowerCase();
  return strNew.split(substrNew).length - 1;
}

//Control
 console.log(CountOccurences('fdfdsdszYzy', "zy"));

 
 // Storage
/**
 * 
 * @returns {function}
 */  
function storage() {
    let obj = {};
    return {
        setValue: function(key, value){
            obj[key] = value;
        },
        getValue: function(key){
            return obj[key] ? obj[key] : undefined;
        }
    }
   
}
//Control
  const propsStorage = storage();
  propsStorage.setValue("name", "Peter");
  propsStorage.setValue("age", 30);
  console.log(propsStorage.getValue("name"));
  console.log(propsStorage.getValue("age"));
  propsStorage.setValue("age", 31);
  console.log(propsStorage.getValue("age"));
  console.log(propsStorage.getValue('occupation'));


// toDigitArray
/**
 * 
 * @param {number} N 
 * @returns {number[]}
 */
function toDigitArray(N) {
    return  Number.isInteger(N) &&  N > 0? N.toString().split("").reverse().map((e) => JSON.parse(e)): 'You need to enter an integer greater than 0!';
  }
//Control
console.log(toDigitArray(56799));

