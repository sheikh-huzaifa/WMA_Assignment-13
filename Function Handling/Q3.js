// Write a js program to find maximum and minimum between two numbers using functions.

function minMaxOfTwoNum(a,b) {
    let min;
    let max;
    if (a<b){
        min=a;
        max=b;
    }
    else{
        min=b;
        max=a
    }
    return `Minimum Value is ${min} & Maximum Value is ${max}`
}

console.log(minMaxOfTwoNum(7,10));