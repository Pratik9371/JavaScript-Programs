//Palindrome

//mom, wow, noon

const str = "mom";
const result = str === str.split("").reverse("").join("");

console.log(result);

// program to check if the string is palindrome or not
function checkPalindrome(string) {
  // find the length of a string
  const len = string.length;

  // loop through half of the string
  for (let i = 0; i < len / 2; i++) {
    // check if first and last string are same
    if (string[i] !== string[len - 1 - i]) {
      return "It is not a palindrome";
    }
  }
  return "It is a palindrome";
}

console.log(checkPalindrome("mom"));
