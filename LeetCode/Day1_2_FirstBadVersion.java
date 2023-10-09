///* The isBadVersion API is defined in the parent class VersionControl.
//      boolean isBadVersion(int version); */
//
//public class Solution extends VersionControl {
//    public int firstBadVersion(int n) {
//        int front = 1;
//        int rear = n;
//        int middle = 0;
//        while (front <= rear) {
//            middle = (rear - front) / 2 + front;
//            if (isBadVersion(middle)) {
//                if (!isBadVersion(middle-1)) break;
//                rear = middle-1;
//            } else {
//                front = middle+1;
//            }
//        }
//        return middle;
//    }
//}
