// Write a js program to find LCM of two numbers using function.

function hcfOfTwoNum(x,y) {
    let hcf;

for (let i = 1; i <= x && i <= y; i++) {

    
    if( x % i == 0 && y % i == 0) {
        hcf = i;
    }

}
    return `${hcf}`
}

function lcmOfTwoNum(x,y) {
    let lcm = (x*y) / parseInt(hcfOfTwoNum(x,y)) ;
    return `LCM of ${x} & ${y} is ${lcm}`
}



console.log(lcmOfTwoNum(15,20));