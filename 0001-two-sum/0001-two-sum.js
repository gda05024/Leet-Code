/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const indices = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (complement in indices) {
            const j = indices[complement];
            return [j, i]
        }
        indices[nums[i]] = i;

    }
};