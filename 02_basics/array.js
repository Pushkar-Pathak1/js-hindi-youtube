//array

const myArray=[0,1,2,3,4,5]
const myHeros=["shaktiman","krish","ben"]
const myArray2=new Array(1,2,3,4)
console.log(myArray[0])
console.log(myArray[1])

//array methods
myArray.push(6)
myArray.push(7)
myArray.pop()

//myArray.unshift(9)
//myArray.shift()

console.log(myArray.includes(9))
console.log(myArray.indexOf(19))

const newArr=myArray.join()

console.log(myArray)
console.log(newArr)


//slice splice

console.log("A",myArray);
const myn1=myArray.slice(1,3)
console.log(myn1);
console.log("B",myArray);
const myn2=myArray.splice(1,3)
console.log(myn2);
console.log("C",myArray);
