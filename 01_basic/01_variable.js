const accountId = 12345
let accountEmail = "ziqode@gmail.com"
var accountPassword = "101010"
accountCity = "kota" //variable can be decleared this way but its not a best practice
let accountState; //output: undefined

/* 
prefer not to use var
because of issue in block scope and functional scope
*/

//accountId = 2
//you can't change const [not allowed]

accountEmail = "hm@gmail.com"
accountPassword = "151515"
accountCity = "guwahati"

console.log(accountId);
//we have multiple ids whose data we want execute so there is a shortcut 

//! shortcut
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
