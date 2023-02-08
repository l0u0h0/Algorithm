package 이유한;

import java.util.Scanner;

public class A005_HanoiTest {
	  static StringBuilder result = new StringBuilder();
	     public static void main(String[] args) throws Exception {
	        Scanner sc = new Scanner(System.in);
	        int cnt = sc.nextInt();
	        hanoi(cnt, 1, 2, 3);
	        System.out.println(result.toString());
	    }// end main    

	    // cnt:원반갯수, from:시작기둥, temp:임시기둥, to:끝기둥
	    private static void hanoi(int cnt, int from, int temp, int to) {
	        if (cnt == 1) {
	        	result.append(cnt).append(" : ").append(from).append(" -> ").append(to).append("\n");
	        } else {
	        	hanoi(cnt-1, from, to, temp);
	        	result.append(cnt).append(" : ").append(from).append(" -> ").append(to).append("\n");
		        hanoi(cnt-1, temp, from, to);
	        }
	    }      

	}

	// 입출력 예시
//	3 (<=입력)
//	1 : 1 -> 3
//	2 : 1 -> 2
//	1 : 3 -> 2
//	3 : 1 -> 3
//	1 : 2 -> 1
//	2 : 2 -> 3
//	1 : 1 -> 3