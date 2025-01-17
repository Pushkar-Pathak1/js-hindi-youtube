const coding=["js","ruby","python","java","cpp"]

coding.forEach(function (item){console.log(item)})

coding.forEach( (item)=>{console.log(item)})

function printme(item)
{
    console.log(item)
}
coding.forEach(printme)

coding.forEach( (item,index,arr)=>{
    console.log(item,index,arr)
})

const myCoding=[
    {
        name: "java",
        file: "js"
    },
    {
        name: "cpp",
        file: "c++"
    },
    {
        name: "python",
        file: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.name,item.file)
})