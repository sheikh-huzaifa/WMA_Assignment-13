// Write a js program to print all perfect numbers between given interval using functions.

function isPerfectNum(x) {
    let temp = x;
    let sum = 0;
    for (let i = 0; i < x; i++) {
        if (temp%i==0) {
            sum+=i
        }
        
    }
    if (sum==x) {
        return true
    }
    else{
        return false
    }
}

function checkPerfect(start,end) {
 let perfectNum=[];
 for(let i=start; i<=end ; i++){
    if (isPerfectNum(i)) {
        perfectNum.push(i)
    }
 }
  return `Perfect number between ${start} & ${end} are ${perfectNum}`

}



console.log(checkPerfect(1,30));