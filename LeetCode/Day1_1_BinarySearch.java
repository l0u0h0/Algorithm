class Solution {
    static int idx = 0;
    public int search(int[] nums, int target) {
        int result = 0;
        if (nums.length == 1){ 
            if (nums[0] != target) {
                result = -1;
                idx = 0;
                return result;
            } else {
                result = idx;
                idx = 0;
                return result;
            }
        }
        int middle = nums.length/2;
        if (nums[middle] > target) {
            int[] newArr = Arrays.copyOfRange(nums, 0, middle);
            return search(newArr, target);
        } else if (nums[middle] < target) {
            int[] newArr = Arrays.copyOfRange(nums, middle, nums.length);
            idx += middle;
            return search(newArr, target);
        } else {
            result = middle+idx;
            idx = 0;
            return result;
        }
        
    }
}
