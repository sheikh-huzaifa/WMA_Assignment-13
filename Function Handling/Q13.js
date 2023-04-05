// Write a js program to find sum of all natural numbers between 1 to n using function.

function sumOfNaturalNum(x) {
    sum=0;
    for (let i = 1; i <= x; i++) {
        sum+=i
        
    }
    return `Sum of all natural number till ${x} is ${sum}`
}



console.log(sumOfNaturalNum(10));