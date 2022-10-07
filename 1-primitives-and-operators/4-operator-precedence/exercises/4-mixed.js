'use strict';

/* everything mixed together

  these expressions are strange things to practice tracing
  you won't come across things like this too often
  and you shouldn't be writing them either!

*/

const w = 'HELLO';
const x = true;
const y = 4;
const z = -4;

// ---
console.log('--begin--');

const a = typeof typeof x === typeof w;
console.assert(a === true, 'a');

const b = w.length >= y + 1;
console.assert(b === true, 'b');

const c = y + z === w[4];
console.assert(c === false, 'c');

const d = y + z || x;
console.assert(d === true, 'd');

const e = x === (w.slice(1, 5).length === y);  //i need to ask about this one 
console.assert(e === true, 'e');


console.log('--end--');