var addTwoNumbers = function (l1, l2) {
  //   const rl1 = l1.reverse();
  //   const rl2 = l2.reverse();

  const firstArr = makeArrReverse(l1);
  const secondArr = makeArrReverse(l2);

  const num1 = Number(firstArr.join(""));
  const num2 = Number(secondArr.join(""));
  const result = (num1 + num2).toString().split("").reverse();
  return result;
};

const makeArrReverse = (arr) => {
  const reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }
  return reversedArr;
};

const result = addTwoNumbers([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9, 9]);
console.log(result);
