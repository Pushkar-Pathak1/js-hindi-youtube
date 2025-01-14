//used for protecting from global pollution

(function chai(){
    //named iife
    console.log(`db connected`)
})(); //will have to use semi colon here to end 

( ()=>{
    console.log(`db connected two`)
}

)();

( (name)=>{
    console.log(`db connected two ${name}`)
}

)('hitesh')