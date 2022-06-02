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


 

