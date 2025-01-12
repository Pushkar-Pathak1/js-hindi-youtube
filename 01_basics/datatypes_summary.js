// primitive

// 7 types = String,Number,Boolean,null,undefined,Symbol,Bigint

const id=Symbol('123')
const anotherid=Symbol('123')
console.log(id===anotherid) //will give false because symbol give uniqueness
const bignumber=123456789012345n //bigint

//reference 

//array,objects,function

const heros=["shakti","hfisfj","jfvf"];

let myobj = {
    name: "hitesh",
    age: 22,
}

const myFunction= function(){
    console.log("hello world !");
}

console.log(typeof bignumber);
console.log(typeof myFunction);

console.log(typeof heros);



//(javascript is a dynamically typed language)



