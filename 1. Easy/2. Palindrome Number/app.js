try {
  const num = 121;

  const result = isPalindrome(num);
  console.log(result);
} catch (error) {
  console.error(error.message);
}

function isPalindrome(num) {
  if (!Number.isFinite(num)) {
    throw new TypeError("input expected as a valid finite number!");
  }
  if (num === 0) return true;

  const numAsString = num.toString();

  if (numAsString[0] === "-") return false;
  if (numAsString[numAsString.length - 1] === "0") return false;

  return numAsString.split("").reverse().join("") === numAsString;
}
