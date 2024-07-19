const array = [5, 3, 4, 6];

const max = (array) => {
  //return Math.max(...array);

  let max = 0;

  array.forEach((value, index) => {
    if (value > max) {
      max = value;
    }
  });

  return max;
};

const min = (array) => {
  //return Math.min(...array);

  let min = array[0];

  array.forEach((value, index) => {
    if (value < min) {
      min = value;
    }
  });

  return min;
};

console.log(max(array));
console.log(min(array));
