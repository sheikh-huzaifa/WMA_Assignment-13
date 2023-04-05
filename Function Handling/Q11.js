// Write a js program to print all natural numbers between 1 to n using function.

function naturalNum(x) {
    let nuturalNumber=[];
    for(let i=1;i<=x;i++){
        nuturalNumber.push(i)
    }
    return `Nutural Number from 1 to ${x} are ${nuturalNumber}`
}




console.log(naturalNum(10));