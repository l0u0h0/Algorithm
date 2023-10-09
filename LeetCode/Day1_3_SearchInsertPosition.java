//class Solution {
//    public int searchInsert(int[] nums, int target) {
//        int front = 0;
//        int rear = nums.length-1;
//        int prev = (rear-front)/2 + front;
//        while (front <= rear) {
//            prev = (rear-front)/2 + front;
//            if (nums[prev] == target) break;
//            if (nums[prev] < target) {
//                if (prev == rear || nums[prev+1] >= target) {
//                    prev++;
//                    break;
//                }
//                front = prev+1;
//            } else if (nums[prev] > target) {
//                rear = prev-1;
//            }
//        }
//        return prev;
//    }
//}
