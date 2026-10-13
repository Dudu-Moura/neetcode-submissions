class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freq = nums.reduce((c, v) => (c[v] = (c[v] || 0) + 1, c), {});
        nums.sort((x, y) => freq[y] - freq[x]);
        const set = Array.from(new Set([...nums]))
        while(set.length !== k){
            set.pop();
        }
        return set
    }
}
