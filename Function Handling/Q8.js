// Write a js program to print all Armstrong numbers between given interval using functions.


function isArmStrong(i) {
    let temp = i;
    let sum=0;
    let r;
    while (temp>0) {
        r=temp%10;
        sum+=r*r*r;
        temp=parseInt(temp/10);
    }
    if (sum==i) {
        return true
    } else {
        return false
    }
}


function checkArmStrong(start , ends) {
    let armStrong=[];
    for (let i = start; i <= ends; i+=2) {
        if (isArmStrong(i)) {
            armStrong.push(i)
        }
        
    }
    return `Arm Strong Number Between ${start} & ${ends} are ${armStrong}`
}


console.log(checkArmStrong( 153, 400));

