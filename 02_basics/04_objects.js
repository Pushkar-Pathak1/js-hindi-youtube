//const tinderUser=new Object() //singelton 
const tinderUser ={}//non singelton

tinderUser.id="onvf"
tinderUser.name="oeiqkl"
tinderUser.isLoggedIn=false

//console.log(tinderUser)

const regularUser={
    email: "pkujecka@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kkjvjyfk",
            lastname: "lk,snefc",
        }
    }
}

//console.log(regularUser.fullname.userfullname)

const obj1={1: "a",2: "b"}
const obj2={3: "c",4: "d"}
const obj4={3: "c",4: "d"}
//const obj3={obj1,obj2} same array wala problem so 
//const obj3=Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2}
console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

const user=[
    {
        id: 1,
        email: "orjn@gmail.com"
    },
    {
        id: 1,
        email: "orjn@gmail.com"
    },
]
user[1].email
console.log(tinderUser.hasOwnProperty('isLoggedIn'))

console.log(tinderUser.hasOwnProperty('isLogged'))
