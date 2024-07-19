//Maximum of numbers in an array

const max = (nums) => {
  let i;
  //Initialise max element
  let max = nums[i];
  for (i = 0; i < nums.length; i++) {
    const currentValue = nums[i];

    if (currentValue > max) {
      max = currentValue;
    }
  }
  return max;
};

const findMax = (arr) => {
  let max = arr;
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
};

const array = [1, 6, 7, 5, 10];
console.log(findMax(array));
const result = max(array);
//console.log(result);

//alternate
//console.log(Math.max(...array))
