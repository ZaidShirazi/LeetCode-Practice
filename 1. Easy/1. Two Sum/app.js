const nums = [2, 7, 11, 15];
const givenTarget = 9;

try {
  const calculatedTwoSum = calculateTwoSum(nums, givenTarget);
  console.log(`Given array = ${JSON.stringify(nums)}`);
  console.log(`Given Target = ${givenTarget}`);
  console.log(calculatedTwoSum);
} catch (error) {
  console.error(error.message);
}

function calculateTwoSum(nums, givenTarget) {
  if (!Array.isArray(nums)) {
    throw new Error("Need a numbers array to proceed!");
  }

  if (nums.length < 2) {
    throw new Error(`Required atleast two numbers to find Two Sum`);
  }

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === givenTarget) {
        return [i, j];
      }
    }
  }
  return [];
}
