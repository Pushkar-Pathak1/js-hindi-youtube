//for in

//["","",""]
//[{},{},{}]


//for of
const arr=[1,2,3,4,5]
for (const num of arr) {
    console.log(num)
}
const greet="hello"
for(const i of greet)
{
    console.log(i)
}

//maps

const map=new Map();
map.set('IN',"india")
map.set('fr',"france")
map.set('IN',"india")
console.log(map)
for(const [key,value] of map)//object is not iteratable like this
{
    console.log(key, ':-',value)
}


////---------------------------forin--------------------------////
const myObject={
    js: "javascript",
    cpp: "c++",
    rb: "ruby",
    swift: " swift by apple",

}
for (const key in myObject) {
   console.log(`${myObject[key]} is value of ${key}`)
}

const prog=["js","c++","swift","python"]
for (const key in prog) {
        console.log(`${key} ${prog[key]}`)
}
//map p forin iteratable nhi h

