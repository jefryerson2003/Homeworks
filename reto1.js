
const oldFunction = function (){
    
    if ( x%2 == 0){
        console.log ("El numero es par");
    }else{
        console.log ("el numero es impar");
    }
    return x
}
console.log (x=5)

const newFunction = (x) => {

    if ( x % 2 === 0){
        console.log ("El numero es par");
    }else{
        console.log ("el numero es impar");
    }
    return x

} 
console.log (oldFunction(5))