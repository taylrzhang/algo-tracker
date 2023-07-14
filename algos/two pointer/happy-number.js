function isHappyNumber(n) {
  if (n === 1) return true;
  let fast = sumOfSquaredDigits(n),
    slow = n;
  while (fast !== 1 && fast !== slow) {
    slow = sumOfSquaredDigits(slow);
    fast = sumOfSquaredDigits(sumOfSquaredDigits(fast));
  }
  if (fast === 1) return true;
  if (fast === slow) return false;
}

function sumOfSquaredDigits(number) {
  let totalSum = 0;
  while (number > 0) {
    let temp = Math.floor(number / 10),
      digit = number % 10;
    // console.log(temp,digit)
    number = temp;
    totalSum += digit ** 2;
  }
  return totalSum;
}

console.log(isHappyNumber(19));
console.log(isHappyNumber(4));
console.log(isHappyNumber(2147483646));
console.log(isHappyNumber(1));
console.log(isHappyNumber(7));
