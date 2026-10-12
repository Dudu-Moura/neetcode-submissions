class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        const numMap = new Map();
        for(let i = 0; i < nums.length; i++){
            numMap.set(nums[i], (numMap.get(nums[i]) || 0) + 1);
        }
        const maxValue = Math.max(...numMap.values());
        const maxKey = Array.from(numMap.keys()).find(key => numMap.get(key) === maxValue);;
        return maxKey;
    }
}
