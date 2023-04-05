// Write a js program to find sum of all even or odd numbers in given range using function.


function sumOfAllEvenOdd(x,y) {
    let evenSum=0;
    let oddSum=0;
    for (let i = x; i <= y; i++) {
        if(i%2==0){
            evenSum+=i;
        }else if(i%2!==0){
            oddSum+=i
        }
        
    }
    return `Sum of all even number between ${x} & ${y} is ${evenSum}\nSum of all odd number between ${x} & ${y} is ${oddSum}`
}



console.log(sumOfAllEvenOdd(1,10));