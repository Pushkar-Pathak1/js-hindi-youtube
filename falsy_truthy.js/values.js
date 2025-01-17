//falsy values
//false,0,-0,BigInt 0n,"",null,undefined,NaN
 //except these all are true value
 //but surprising truthy values are
 "0",'false'," ",[],{},function(){}

 //
 const empobject={
 }

 if(Object.keys(emptyobj).length === 0)
 {
    console.log("is empty")
 }


 //nullish coalescing operator(??): null undefined
 let val1;
 //val1=5??10
 //val1=null??10
 //val1=undefined??15
val1=null??10??20

 console.log(val1)

 //ternary operator
 //condition ? true:false
 const iceteaprice=100;
 iceteaprice<=80 ? console.log("low"):console.log("gret")