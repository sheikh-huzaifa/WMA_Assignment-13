// Write a js program to find sum of elements of array using function.

function sumOfArry(x) {
    let sum=0;
    for (let i = 0; i < x.length; i++) {
        sum+=parseInt(x[i]);
        
    }
    return `Sum of elements of given Arrary "${x}" is ${sum}`
}


let numberArry=["1","2","3","4"]
console.log(sumOfArry(numberArry));