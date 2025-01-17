const myNums=[1,2,3,4,5,6,7,8,9,10]
//const newNums=myNums.filter((num)=>num>4);
//const newNums=myNums.filter((num)=>{return num>4});
//const newNums=[];
//myNums.forEach((num)=>{
  //  if(num>4)
  //  {
   //     newNums.push(num)
   // }
//})
//const newNums=myNums.map((item)=>item+10)
//const newNums=myNums.map((item)=>{return item+10})

//chaining
//const newNums=myNums
                    .map((num)=>num*10)
                    .map((num)=>num+1) //the num here will be multiplied by 10
                    .filter((num)=> num>=40)

//const myTotal=myNums.reduce(function(acc,currval){
 // console.log(acc,currval)
  //    return acc+currval
//},0)
//const myTotal=myNums.reduce((acc,currvalue)=>acc+currvalue,0)

const shoppingCart=[
  {
    item: "js",
    price: 2999
  },
  {
    item: "py",
    price: 2999
  },
  {
    item: "mobile dev course",
    price: 5999
  },
  {
    item: "data science",
    price: 12999
  },

]
const pricetopay=shoppingCart.reduce((acc,item)=>acc+item.price,0)


console.log(pricetopay)
//console.log(myTotal)