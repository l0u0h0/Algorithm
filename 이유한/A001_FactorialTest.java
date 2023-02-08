package 이유한;

import java.util.Scanner;

public class A001_FactorialTest {
    private static int factorial1(int n) {
        int result = 1;
        for(int i=n; i>0; --i) {
            result *= i;
        }
        return result;
    }
    //반복문을 재귀로 고친 형태
    static int result=1;
    private static void factorial2(int n) {
        if(n==0) return;
        result *= n;
        factorial2(n-1);
    }
    // 리턴값을 활용한 재귀로 고친 형태
    private static int factorial3(int n) {
        //채워보세요
    	if (n==1) {
    		return 1;
    	} else {
    		return n*factorial3(n-1);
    	}
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        System.out.println(factorial1(N));

        factorial2(N);
        System.out.println(result);

        System.out.println(factorial3(N));
    }

}