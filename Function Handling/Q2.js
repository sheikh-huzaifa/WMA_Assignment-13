// Write a js program to find diameter, circumference and area of circle using functions.

function measurementsOfCircle(r) {
    // Fuction of diameter d=2r
    //         of circumference C=2*pi*r
    //         of Area A=pi*r*r
    let pi=22/7;
    let D=2*r;
    let C=2*pi*r;
    let A=pi*r*r;
    return `
    Diameter = ${D.toFixed(0)}
    Circumference = ${C.toFixed(2)}
    Area = ${A.toFixed(2)}`
}


console.log(measurementsOfCircle(2));