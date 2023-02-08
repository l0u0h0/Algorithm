package 이유한;

import java.util.Scanner;

public class A004_FibonacciTest {
    // 피보나치 n항을 계산하여 리턴 
    public static long fibo(int n) { 
        if (n <= 1) return n;
        return fibo(n - 1) + fibo(n - 2); // 어떤 문제가 있는지 주석을 달아보세요
        /**
         * 중복되는 n에 대한 재귀함수 호출 중복이 많다'
         * 
         */
    
    }
    
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int N = sc.nextInt();
        System.out.println(fibo(N));
    }

}
