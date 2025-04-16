/**

TAG: MEDIUM || COMPANIES: FAANG, NVIDIA, TikTok, IBM, Oracle

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and using only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,3,4,2]
Output: 3
Example 3:

Input: nums = [3,3,3,3,3]
Output: 3
 

 */


/**
 * HashMap
 * Time Complexity = O(N^2)
 * Space Complexity = O(1)
 */
var findDuplicateBruteForce = function (nums) {
  let n = nums.length;
  for(let i = 0; i < n; i++) {
      for(let j = i+1; j < n; j++) {
          if(nums[i] === nums[j]) {
              return nums[i];
          }
      }
  }
  return -1;
}


/**
 * HashMap
 * Time Complexity = O(N)
 * Space Complexity = O(N)
 */
var findDuplicateHashMap = function (nums) {
    let hash = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (hash.has(nums[i])) {
            return nums[i];
        }

        hash.set(nums[i], true);
    }
}


/**
 * 2 Pointers Method
 * Time Complexity = O(N)
 * Space Complexity = O(1)
 */
var findDuplicateTwoPointers = function(nums) {
    let slow = 0, fast = 0;


    while (true) {

        //  console.log(slow, fast);
        slow = nums[slow];
        fast = nums[nums[fast]];

        console.log(slow, fast)

        if (slow === fast) {
            break;
        }
    }

    let slow2 = 0;

    while (true) {

        //  console.log(slow, slow2);
        slow = nums[slow];
        slow2 = nums[slow2];

         console.log(slow, slow2);

        if (slow === slow2) return slow;
    }
};



let nums = [1, 3, 4, 2, 2];


console.log(findDuplicateHashMap(nums));