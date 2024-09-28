// console.log( 2 > 1);
// console.log( 2 >= 1);
// console.log( 2 < 1);
// console.log( 2 == 1); //equalTo | checks only value not datatype
// console.log( 2 =! 1); //notEqualTo

/*
console.log("2" > 1); //js automaticalyconvert "2" string to a number ie. 2
console.log("02" > 1);
*/ 

console.log(null > 0); //output: false           
console.log(null == 0); //output: false
console.log(null >= 0); //output: true 😲how?
/
 * REASON:
 * - == and <, >, <=, >= works differently
 * - comparision coverts null to number(0)  
 */

/*
this will be same with undefined 
🔴 AVOID this type of comparision🔴
*/



// === checks both dataTypes❗ and its value 

console.log("2" === 2);
