// Write a js program to find reverse of any number using function.

function reverseNum(x) {
    return x
    .toString()
    .split('')
    .reverse()
    .join('')
}

console.log(reverseNum(15));