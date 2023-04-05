// Write a js program to find all prime numbers between given interval using functions.
function isPrime(x) {
    // Logic to check prime number
    
    if (x==1) {
        return false
    } 
    else if(x==2){
        return true
    } 
        
    
     
     for (let i = 3; i < x; i++) {
        if (x%i===0  ) {
            return false
        }   

    }
        
    return true
    
 }

 function primeList(start , end) {
    let primes=[];
    for(let i = start; i<=end; i++)
    if (isPrime(i)) {
        primes.push(i);
    }
    return `Prime Number Between ${start} & ${end} are ${primes}`
 }


console.log(primeList(1,20));