function one(){
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username)
    }
   // console.log(website)//will give error because it is declared inside two
    two()
}
one()

//++++++++++++++++++++ interesting ++++++++++++++++++++++++++


console.log(addOne(5)) //will not give error
function addOne(num)
{
    return num+1
}


//console.log( addTwo(5)) //will give error if we use it before
const addTwo=function(num){ //known as expression
    return num+2
}
console.log( addTwo(5))
