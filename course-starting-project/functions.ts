let combinedvalue: (a:number,b:number)=>number;
combinedvalue=add;
// combinedvalue=5; compiles well but gives error in runtime
console.log(combinedvalue(5,5));

function add(n1:number, n2 :number):number
{
    return n1+n2;
}

function printresult(num:number): void 
{
    console.log("Result is: " + num);
}

printresult(add(10,10));
//console.log(printresult(add(10,10)));   undefined as function dooesnot return anything
