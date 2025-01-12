//singelton is created in constructor object.create()

//object literalls

const mySym=Symbol("key1")
const juser={
    name: "fnkhknkn",
    "full name": "jkbkjafba",
    [mySym]:"mykey1", //for symbol use bracket otherwise it will act as string not symbol
    age: 18,
    location: "jaipur",
    email: "lishkvz@gmail.com",
    isLoggedIn:false,
    lastLoginDay:["monday","saturday"]
}
console.log(juser.email)
console.log(juser["email"]) //use this more because cant use dot method in case of full name
console.log(juser["full name"])
console.log(juser[mySym])

juser.email="pekfosljl@gmail.com"
//Object.freeze(juser) //after apply this no change will be done to juser
juser.email="iefksjv@gmail.com"
console.log(juser)

juser.greeting=function(){
    console.log("hello js user");
}
juser.greetingTwo=function(){
    console.log(`hello js user , ${this.name}`)
}
console.log(juser.greeting)
console.log(juser.greeting())
console.log(juser.greetingTwo())
