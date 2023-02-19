    class Solution {

        public int[] twoSum(int[] numbers, int target) {
            if (numbers.length < 1) return null;
            int[] tmp = {0, 0};
            boolean flag = false;
            for (int i = 0; i < numbers.length; i++) {
                if (flag) break;
                for (int j = i+1; j < numbers.length; j++) {
                    if (i == j) break;
                    if (numbers[i] + numbers[j] == target) {
                        tmp[0] = i+1;
                        tmp[1] = j+1;
                        flag = true;
                        break;
                    } else if (numbers[j] + numbers[j-1] == target) {
                        tmp[0] = j;
                        tmp[1] = j+1;
                        flag = true;
                        break;
                    }
                }
            }
            return tmp;
        }

    /*
    static int[] arrs;
    static int[] result;
    static int size;
    static int t;

    public int[] twoSum(int[] numbers, int target) {
        size = numbers.length;
        t = target;
        arrs = new int[2];
        func(0, 0, numbers);
        return result;
    }

    private void func(int depth, int start, int[] nums) {
        if (depth == 2) {
            if (nums[arrs[0]] + nums[arrs[1]] == t) {
                result = new int[2];
                result[0] = arrs[0]+1;
                result[1] = arrs[1]+1;
            }
            return;
        }
        for (int i = start; i < size; i++) {
            arrs[depth] = i;
            func(depth+1, i+1, nums);
        }
    }
    */

    }
