
//why let, const is introduced if var is existed already

// var c = 300 
let a = 399
//scope syntax: {} | {blockScope} | 
if (true) {
  let a = 10
  const b = 20
  console.log("Inner: ", a);
      
}

console.log(a); 
// console.log(b);
// console.log(c);

