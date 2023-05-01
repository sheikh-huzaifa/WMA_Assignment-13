// 9. Write a JavaScript function to get the last day of a month.
//
//
//
// Test Data :
//
// console.log(lastday(2014,0));
//
// console.log(lastday(2014,1));
//
// console.log(lastday(2014,11));
//
// Output :
//
// 31
//
// 28
//
// 31

let lastDay = (e, m) => {
  let date = new Date(e, m + 1, 0);
  return date.getDate();
};

console.log(lastDay(2014, 0));
console.log(lastDay(2014, 1));
console.log(lastDay(2014, 11));
