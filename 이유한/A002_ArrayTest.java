package 이유한;

public class A002_ArrayTest {
    static int arr[] = { 10, 20, 30 };

    private static void printArray1() {
        // for로 배열 내용 출력해보세요
    	for (int i = 0; i < arr.length; i++) {
    		System.out.println(arr[i]);
    	}
    }

    private static void printArray1(int i) {
        // 재귀로 배열 내용 출력해보세요
    	if (i == arr.length) return;
    	System.out.println(arr[i++]);
    	printArray1(i);
    }

    public static void main(String[] args) {
        printArray1();
        System.out.println("=========================");
        printArray1(0);
    }

}