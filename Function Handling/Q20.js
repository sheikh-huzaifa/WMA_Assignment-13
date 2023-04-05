//Write a js program to find GCD (HCF) of two numbers using function.
function hcfOfTwoNum(x,y) {
    let hcf;

for (let i = 1; i <= x && i <= y; i++) {

    
    if( x % i == 0 && y % i == 0) {
        hcf = i;
    }

}
    return `HCF of ${x} & ${y} is ${hcf}`
}



console.log(hcfOfTwoNum(3,6));