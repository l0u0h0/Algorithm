//class Solution {
//    public void moveZeroes(int[] nums) {
//        int temp = 0;
//        int cur = 0;
//        while (cur < nums.length-1) {
//            if (nums[cur] == 0) {
//                int next = cur+1;
//                while (true) {
//                    if (next == nums.length) break;
//                    if (nums[next] != 0) {
//                        temp = nums[next];
//                        nums[next] = nums[cur];
//                        nums[cur] = temp;
//                        break;
//                    } else next++;
//                }
//            }
//            cur++;
//        }
//    }
//}
