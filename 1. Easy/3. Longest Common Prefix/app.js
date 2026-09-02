const words = ["flower", "flow", "flight"];

try {
  const longestCommonPrefix = getLongestCommonPrefix(words);
  console.log(longestCommonPrefix);
} catch (error) {
  console.error(error.message);
}

function getLongestCommonPrefix(words) {
  if (!Array.isArray(words)) {
    throw new TypeError("Required an array to process!");
  }
  if (!isStringArray(words)) {
    throw new Error("Elements of array should be strings!");
  }
  if (words.length === 0) return "";

  let [prefix, matchedPrefix] = [words[0], ""];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];

    for (let j = 0; j < prefix.length; j++) {
      const char = word[j];

      if (prefix[j] === char) matchedPrefix += char;
      if (prefix[j] !== char) break;
    }

    prefix = matchedPrefix;
    matchedPrefix = "";
  }

  return prefix;
}

function isStringArray(arr) {
  return arr.every((element) => typeof element === "string");
}
