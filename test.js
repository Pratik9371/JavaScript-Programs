// first...

const string = "Javascript is awesome!"

// Reverse the string
const reversedString = string.split("").reverse().join("");

//console.log(reversedString);


// second...

const arr = [];

console.log(typeof arr);


// third...

const mul = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 * num2 * num3
        }
    }
}
//console.log(mul(2)(3)(4))


// 4th
// clousures
const createBase = (x) => {
    return (y) => x + y;
}
const addSix = createBase(6);

addSix(10); // return 16

console.log(addSix(10))


