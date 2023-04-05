// Write a js program to find sum of digits of a given number using function.

function sumOfDigit(x) {
    let temp=x;
    let digitSum=0;
    let digits;
    while (temp>0) {
        digits=temp%10;
        digitSum += digits;
        temp = parseInt(temp/10)
    }

    return `Sum of digits of ${x} in ${digitSum}`
}


console.log(sumOfDigit(113));