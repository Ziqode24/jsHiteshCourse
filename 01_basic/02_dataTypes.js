"use strict"; //treat all JS code as newer version 

//alert( 3 + 3 )  //we are using nodejs, not browser

console.log(3 +
    3 //this is bad practice, focus on code redability
);

console.log( 3 + 3 ); //better readability

let name = "ziQode";
let age = 18;
let isLoggedIn = false;
let state;
let location = null;

/**
 * dataTypes
 * 
 * number ==> 2 to the power 53 [range]
 * bigInt
 * string ==> true/false
 * null ==> standalone value
 * undefined ==>
 * symbol ==> uniqueNess
 */

//object
console.log(typeof undefined); //output: undefined 
console.log(typeof null); //output: object


//typeof is used to identify the type of data
console.log(typeof age);//output:number
console.log(typeof isLoggedIn);//output: boolean




