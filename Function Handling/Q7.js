// Write a js program to print all strong numbers between given interval using functions.

function isStrong(i) {
    let temp = i;
    let sum=0;
    let r;
    while (temp>0) {
        r=temp%10;
        let r1=1;
        for (let i = 1; i <= r; i++) {
            r1 = r1 * i;
            
        }
        sum+=r1;
        temp=parseInt(temp/10);
    }
    if (sum==i) {
        return true
    } else {
        return false
    }
}


function checkStrong(x , y) {
    let strongNum=[];
    for(let i=x; i<=y;i++){
        if (isStrong(i)) {
            strongNum.push(i);
    } }
    return `Strong Number between ${x} & ${y} are ${strongNum}`
}

console.log(checkStrong(1,200));