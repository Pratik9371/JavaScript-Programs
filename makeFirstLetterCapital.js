const string = "make the first letter capital";
const strArr = string.split(" ");

const makeFirstLetterCapital = strArr.map((value, index) => {
  const capitalFirstLetter = value[0].toUpperCase();
  return value.split("").join("").replace(value[0], capitalFirstLetter);
});
const result = makeFirstLetterCapital.join(" ");

console.log(result);
