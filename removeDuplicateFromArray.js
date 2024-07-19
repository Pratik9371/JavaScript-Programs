// remove duplicates from the array

const removeDuplicates = (arr) => {
  const result = arr.filter((value, index, self) => {
    console.log(
      `self index : ${self.indexOf(value)}, value : ${value},`,
      `index : ${index}`
    );
    return self.indexOf(value) === index;
  });

  return result;
};

const array = [1, 5, 4, 4, 3, 3, 15, 5, 15];

const removeDup = (arr) => {
  return arr.filter((value, index, self) => self.indexOf(value) === index);
};
console.log(removeDup(array));
//console.log(removeDuplicates(array));
