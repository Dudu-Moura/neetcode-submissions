class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const numsMap = new Map();
        for(const i in nums){
            const difference = target - nums[i];
            if(numsMap.has(difference)){
                return [Number(numsMap.get(difference)), Number(i)];
            }
            numsMap.set(nums[i], i);
        };
    }
}
