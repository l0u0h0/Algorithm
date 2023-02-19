class Solution {
    public void rotate(int[] nums, int k) {
        int size = nums.length;
        if (size == 1 || size == k) return;
        if (size < k) k = k % size;
        int head = size - k;
        int[] temp = new int[size+k];

        for (int i = k; i < size+k; i++) {
            temp[i] = nums[i-k];
        }
        System.arraycopy(temp, size, nums, 0, k);
        System.arraycopy(temp, k, nums, k, size-k);
        
        
        
    }
}
