// string can be denoted my 'singleQoute' or "doubleQoute" 

const name = "Ziqode";
const  repoCount = 4;

// console.log(name + repoCpount + "projects");  //this is not recommended

//stringInterpolation__________
/*
    -   string that utelizes interpolation is enclosed in (```)
    -   the ${expression} syntax is used to embed variable or expression within the string
    -   example: 'string text ${expression} string text'
*/

console.log(`Im ${name} my repo count is ${repoCount}`);


//use console for deatil understanding of const gameName
const gameName = new String('live-Or-Die') //no 1
/*
in console[browser]
    - give no 1 
    - then with gameName you can acces the length , prototype etc.
*/

console.log(gameName[5]); //this shows the character at key 0, you can access KEY this way
console.log(gameName.__proto__); // output: {} / object
console.log(gameName.toUpperCase());
console.log(gameName.length); //output: 9 | this thows the length of tyhe string
console.log(gameName.charAt(8)); //output: e | this shows the character at that position 
console.log(gameName.indexOf('D')); //ouitput: 6 | this hows the position of that character 

// charAt & indexOf are viceversa

const newString = gameName.substring(0, 5); //by this we can cut out the part we want from a string
console.log(newString);//output: liveO | we cut out 5 character(0,1,2,3,4) 
//we can give (-)ve value in .substring but it will ignore and starts from 0


const anotherString = gameName.slice(-8, 4);
console.log(anotherString);//output; ve | the 8th character from last is 'v' and 4character from // 
                                      //| first is 'e'


const siteName ="         studySpace            ";
console.log(siteName);//output:          studySpace            ;
console.log(siteName.trim());//output: studySpace; | .trim removes the whiteSpace 



const url = "https://studySpace/author%50Ziqode"

console.log(url.replace('%50','-')); //this will replace %50 with - in the url \ output:...thor-zi..
console.log(url.includes('cardproject'));//output: false | c...ject is not included on the url

console.log(gameName.split('-')); //output: [ 'live', 'Or', 'Die' ]
// .split , splits a string into array based the symbol/character/etc. you provided , in my case its '-'



//TODO: write article on/ go through all type of prototype 











