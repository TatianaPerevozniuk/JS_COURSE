"use strict";

/**
  *
  * @param {Object} object - объект с примитивами
  * @returns {boolean}
*/

const isObjEmpty = (object) => {
    const str = Object.values(object).find( e => typeof e === 'string' && e.length > 0);
    if (str) {
        return false;
    };
    return Object.values(object).every((value) => value === '' || null || isNaN(value) || undefined );
  };
  
  const data = { a: 1, b: undefined };
  const data2 = { a: undefined };
  console.log('false ',isObjEmpty(data)); // false
  console.log('true ',isObjEmpty(data2)); // true
  console.log('true ',isObjEmpty({ a: '' }));
  console.log('true ', isObjEmpty({}));
  console.log('true ',isObjEmpty({ a: NaN }));
  console.log('false ',isObjEmpty({ a: 1 }));

  console.log('false ',isObjEmpty({ a: 'Hello' }));






  