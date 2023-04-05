// Write a js program to print all even or odd numbers in given range using function.

function evenOddNum(x,y) {
    let evenNum=[];
    let oddNum=[];
    for(let i=x; i<=y;i++){
        if(i%2==0){
            evenNum.push(i);
        }
        else if(i%2!==0){
            oddNum.push(i)
        }
    }
    return `Even numbers between ${x} & ${y} are ${evenNum} \nOdd  numbers between ${x} & ${y} are ${oddNum}`
}



console.log(evenOddNum(1,10));