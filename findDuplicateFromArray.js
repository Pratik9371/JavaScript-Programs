// colors = ['red', 'blue', 'red', 'black', 'blue', 'green']

const array = ["red", "blue", "red", "black", "blue", "green"];

const findDuplicates = (array) => {
  //self gives the entire array
  return array.filter((value, index, self) => self.indexOf(value) !== index);
};

console.log(findDuplicates(array));
