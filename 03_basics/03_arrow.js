const user={
    username: "hitesh",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`)
        console.log(this)
    }

}
console.log(user.welcomeMessage())
user.username="sam"
console.log(user.welcomeMessage())

console.log(this)

function chai(){
    let username= "hitesh"
    console.log(this)
   // console.log(this.username) //can only be done inside object here it will give error or give undefined
}
chai()

//const addTwo=(num1,num2) =>{
 //   return num1+num2
//}

//const addTwo=(num1,num2) =>  num1+num2
//const addTwo=(num1,num2) =>  (num1+num2) //implicit return

console.log(addTwo(3,4))
