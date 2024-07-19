const vowels = ["a", "e", "i", "o", "u"];

const findVowels = (string) => {
  const strArr = string.split("");
  const result = strArr.filter((value, index, self) => {
    if (vowels.includes(value)) {
      return self.indexOf(value) === index;
    }
  });

  return result;
};

const result = findVowels("This is awesome!");
console.log(result);

//reverse
// const reverse = result.reverse();
// console.log(reverse);

const test = (string) => {
  const strArr = string.split("");
  const resultArr = [];
  strArr.forEach((value) => {
    if (vowels.includes(value)) {
      resultArr.push(value);
    }
  });

  return resultArr;
};

console.log(test("what is this"));
