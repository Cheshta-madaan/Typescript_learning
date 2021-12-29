// function flexible in taking inputs numbr or strings
type combinable= number|string;
function  combine (
    input1: combinable, 
    input2:combinable)
{
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number')
    {
        result = input1 + input2;
    }
    else
    {
        result= input1.toString()+input2.toString();
    }
    return result;
}

const combineage= combine(20,15);
console.log(combineage);

const combinename= combine('max', 'min');
console.log(combinename);