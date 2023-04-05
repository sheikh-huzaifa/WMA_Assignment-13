function fibonacciSeries(x) {
    let num1=0;
    let num2=1;
    let fibonacci=[0,1];
    let temp;
    x=x-2;
    for(let i=0 ; i<x;i++){
        temp=num1+num2;                           
        fibonacci.push(temp);          
        num1=num2;                      
        num2=temp;                      
    }
    return `${fibonacci}`
}

console.log(fibonacciSeries(5));