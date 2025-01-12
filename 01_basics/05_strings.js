const name = "test";
const repocount = 50;

//console.log(name+repocount+"value")

// This will output: "hello this is test number 50"
console.log(`hello this is ${name} number ${repocount}`);

const gamename= new String("osjfv-l")

console.log(gamename[0])
console.log(gamename.__proto__)

console.log(gamename.length)
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2))
console.log(gamename.indexOf('f'))

const newString =gamename.substring(0,4);
console.log(newString)

const anotherString=gamename.slice(-6,2);
console.log(anotherString)

const newStringOne="  hitesh  "
console.log(newStringOne)
console.log(newStringOne.trim())

const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('sundar'))
console.log(gamename.split('-'))