// Write a js program to check whether a number is palindrome or not using function.
function palindromeNum(x) {
    let y = x
    .toString()
    .split('')
    .reverse()
    .join('');
    if (y==x) {
        return `${x} is a palindrome number.`
    } else {
        return `${x} is not a palindrome number.`
    }
}



console.log(palindromeNum(21));