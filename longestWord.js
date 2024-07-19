// Longest word in the sentence

const findLongestWord = (string) => {
    const words = string.split(" ");

    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    return longestWord;

}

const result = findLongestWord('The quick brown fox jumps over the lazy dog')
console.log(result)