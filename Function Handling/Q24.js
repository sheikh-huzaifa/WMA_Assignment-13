// Write a js program to find maximum and minimum elements in array using function
function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }

  function minMaxNumOfArry(arr) {
    return `Min And Max of a given arrary is ${findMin(arr)} and ${findMax(arr)}`
  }



  let numberArry=["1","2","3","4"]

  console.log(minMaxNumOfArry(numberArry));