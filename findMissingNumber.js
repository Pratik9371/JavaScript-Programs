const array = [1, 2, 4, 5, 7];
//3 is missing

const findMissingNumber = (array) => {
  //number3 - number2 = 1 then not missing
  //number3 - number2 != 1 then number is missing => index before  number 3
  //index = 2
  //number3 - 1 = 3;

  let prevValue = array[0];
  const arr = [...array];
  array.forEach((value, index) => {
    if (value - prevValue === 0) {
      //do nothing
    } else if (value - prevValue !== 1) {
      prevValue = value;
      const missingNumber = value - 1;
      arr.splice(index, 0, missingNumber);
    }
    prevValue = value;
  });

  return arr;
};

// const result = findMissingNumber(array);
// console.log(result);

const nums = [1, 2, 4, 5, 7, 9, 10];
const missingNums = [];
nums.forEach((val, index) => {
  const present = val + 1 === nums[index + 1];
  const isLastItem = index === nums.length - 1;

  if (!isLastItem && !present) {
    missingNums.push(val + 1);
  }
});

console.log(missingNums);
