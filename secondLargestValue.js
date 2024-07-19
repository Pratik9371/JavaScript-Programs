const secondLargest = (array) => {
  let largestValue = 0;
  let secondLargestValue = 0;

  array.forEach((value, index) => {
    if (value > largestValue) {
      secondLargestValue = largestValue;
      largestValue = value;
    }
  });

  return secondLargestValue;
};

const secondLargestNew = (nums) => {
  const sortedArray = nums.sort().reverse();
  const secondLargestNumber = sortedArray[1];
  return secondLargestNumber;
};

const test = (nums) => {
  let largestValue = 0;
  let secondLargestValue = 0;

  nums.forEach((value) => {
    // value = 1, 5 , 2
    if (value > largestValue) {
      // 1 > 0, 5 > 1, 2 > 5 = false
      secondLargestValue = largestValue; // secondLargestValue = 0 , 1
      largestValue = value; // largestValue = 1 , 5
    }
  });

  console.log(secondLargestValue);
};

test([1, 5, 2]);

const result = secondLargestNew([1, 3, 4, 6, 2, 7]);
console.log("Second Largest Number : " + result);

//console.log(secondLargest([1, 8, 5, 4, 6, 2, 3, 7, 10]));
