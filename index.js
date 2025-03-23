function hasTargetSum(array, target) {
  // Create a Set to store numbers we've seen
  const seenNumbers = new Set();

  // Loop through each number in the array
  for (const num of array) {
    const complement = target - num; // Find the missing pair

    // If the complement is in the Set, return true
    if (seenNumbers.has(complement)) {
      return true;
    }

    // Otherwise, add the current number to the Set
    seenNumbers.add(num);
  }

  // If no pairs are found, return false
  return false;
}

/* 
  Big O Complexity:
  - Time Complexity: O(n) -> We iterate through the array once.
  - Space Complexity: O(n) -> We store up to n elements in a Set.
*/

/* 
  Pseudocode:
  1. Create an empty Set called `seenNumbers`
  2. Loop through each element `num` in the `array`:
     - Calculate the complement: `target - num`
     - If `complement` is already in `seenNumbers`, return `true`
     - Otherwise, add `num` to `seenNumbers`
  3. If no pairs sum to the target, return `false`
*/

/*
  Explanation:
  - Instead of using a nested loop (O(n²)), we use a Set to check for complements in O(1) time.
  - This ensures that we only loop through the array **once**, making it much more efficient.
*/

// ✅ Custom Test Cases
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true (3+7)

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25)); // true (19+6)

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4)); // false

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([], 5)); // false (empty array)

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([5, 5], 10)); // true (5+5)

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-2, 10, 5, 3], 8)); // true (-2+10)

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 3, 4, 5], 100)); // false (no pair)
}

// Export for testing
module.exports = hasTargetSum;
