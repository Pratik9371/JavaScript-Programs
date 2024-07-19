// Memoization
// 1,1,2,3,5,8...

// without memoization
const fib1 = (n) => {
  if (n <= 1) {
    return 1;
  }

  return fib(n - 1) + fib(n - 2);
};

//console.log(fib1(5));

// with memoization
const fib2 = (n, prevValues = []) => {
  if (prevValues[n] != null) {
    return prevValues[n];
  }

  let result;
  if (n <= 1) {
    result = 1;
  } else {
    result = fib2(n - 1, prevValues) + fib2(n - 2, prevValues);
  }

  prevValues[n] = result;
  return result;
};

console.log(fib2(5));
