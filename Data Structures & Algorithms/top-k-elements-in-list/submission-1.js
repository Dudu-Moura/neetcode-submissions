class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const numsMap = new Map();
        for(const i in nums) {
            numsMap.set(nums[i], (numsMap.get(nums[i]) || 0) + 1)
        }
        const sortedMap = new Map(Array.from(numsMap).sort((a, b) => a[1] - b[1]));
        for(const [key, count] of sortedMap){
            if(sortedMap.size !== k){
                sortedMap.delete(key);
            }
        }
        let mostFrequent = Array.from(sortedMap.keys());
        return mostFrequent
    }
}
