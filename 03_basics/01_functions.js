function sayMyName(){
    console.log("h")
    console.log("i")
    console.log("t")
    console.log("e")
    console.log("s")
    console.log("h")
}
sayMyName()

//function addTwoNumber(number1,number2){
   // console.log(number1+number2)
//}

function addTwoNumber(number1,number2)
{
    let result=number1+number2
    return result
}

const result=addTwoNumber(4,5)
console.log("result" , result)

function loginUserMessage(username){//if we write here username="sam" then if we will not pass any value then it will take username sam by default
    if(username===undefined) //ans can also use !username because undefined is treated as false
    {
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage())
console.log(loginUserMessage(""))
console.log(loginUserMessage("ko"))

function calculateCartPrice(value1,value2,...num1)
{
    return num1
}
console.log(calculateCartPrice(2,3,4,5,6))

const user={
    username: "hitesh",
    prics: 199,
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}
//handleObject(user)
handleObject({
    username: "sam",
    price: 34,
})


const newArray=[200,300,100,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(newArray))
console.log(returnSecondValue([20,80,90,100]))
