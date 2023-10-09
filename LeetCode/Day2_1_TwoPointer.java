//class Solution {
//    public int[] sortedSquares(int[] nums) {
//        int[] result = new int[nums.length];
//        int front = 0;
//        int rear = nums.length - 1;
//        int idx = nums.length - 1;
//        while (true) {
//            if (front > rear || idx < 0) break;
//            if (Math.abs(nums[front]) > Math.abs(nums[rear])) {
//                result[idx--] = nums[front]*nums[front];
//                front++;
//            } else {
//                result[idx--] = nums[rear]*nums[rear];
//                rear--;
//            }
//        }
//
//        return result;
//    }
//}
