// Write a js program to find factorial of any number using function

function factorialOfNum(x) {
    let factorialNum=1;
    for (let i = 1; i <= x; i++) {
        factorialNum *= i;
        
    }
    return `Factorial of ${x} is ${factorialNum}`
}


console.log(factorialOfNum(5));