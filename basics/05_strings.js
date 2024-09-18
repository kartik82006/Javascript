// const name= "kartik"
// const repoCount = 5

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
//String interpolation using backticks

//Creation of String
const gameName = new String('Kartik-Gupta-18')
// console.log(gameName[0]);
// console.log(typeof gameName); //object
console.log(gameName.__proto__);

// console.log(gameName.length)
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4) //4th value not included
console.log(newString);

const anotherString = gameName.slice(0,-2)//alice can also use negative value
console.log(anotherString);

const newString1 = "    Kartik  "
console.log(newString1.trim());
console.log(newString1.replace('ti','thi'))

console.log(gameName.split('-')) //gives out array after splitting