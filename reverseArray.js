const reverseArray = (arr) => {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

const result = reverseArray([1, 6, 4]); //2 >= 0;  1 >= 0; 0 >= 0
console.log("Reversed Array", result);
