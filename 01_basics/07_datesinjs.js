let myDate = new Date()
console.log(myDate.toDateString())
console.log(myDate.toISOString())
console.log(myDate.toLocaleDateString())
console.log(myDate.toString())
console.log(typeof myDate)


//let myCreatedDate =new Date(2023,0,23,5,3)
//let myCreatedDate =new Date(2023,0,23)
//let myCreatedDate =new Date("2023-01-14")
let myCreatedDate =new Date("01-14-2023")
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toString())

let mytimestamp=Date.now()
console.log(mytimestamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getMonth())

//`${newDate.getDay()} and the time`
newDate.toLocaleString('default',{
    weekday: "long"
})


