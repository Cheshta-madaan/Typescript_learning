function add(n1: number ,n2: number, showresult:boolean,phrase: string)
{
    const result = n1+n2;
    if (showresult)
    {
        console.log( phrase + result);
        
    }
   
    return n1+n2;
}
var  number1= 5; //5.0
//let number1:number;
//number1=5;
const number2=3.5;
const viewresult= true;
const resultphrase="Result is: "
add(number1,number2, viewresult, resultphrase);
//console.log(result);