// Write a js program to check whether a number is prime, Armstrong or perfect number using functions.
function primeNum(x) {
    // Logic to check prime number
    
    if (x==1) {
        return `${x} is not a Prime Number`;
    } 
    else if(x==2){
        return `${x} is a Prime Number`;
    } 
        
    
     
     for (let i = 3; i < x; i++) {
        if (x%i===0) {
            return `${x} is not a Prime Number`;
        }   

    }
        
    return `${x} is a Prime Number`;
    
 }

 function armStrongNum(x) {
    let temp = x;
    let sum=0;
    let r;
    while (temp>0) {
        r=temp%10;
        sum+=r*r*r;
        temp=parseInt(temp/10);
    }
    if (sum==x) {
        return `${x} is Arm Strong Number`
    } else {
        return `${x} is not Arm Strong Number`
    }
 }

 function perfectNum(x) {
    temp = 0;
    for (let i = 1; i <= x/2; i++) {
        if (x%i==0) {
            temp += i;
        }
        
    }
    if (temp === x && temp !== 0) {
        return `${x} is a Perfect Number `
    } else{
        return `${x} is not a Perfect Number `
    }
 }




console.log(primeNum(9));
console.log(armStrongNum(153));

 console.log(perfectNum(496));