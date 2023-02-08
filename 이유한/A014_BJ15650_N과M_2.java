package 이유한; // package name

import java.util.Scanner; // Scanner import

public class A014_BJ15650_N과M_2 { // class start
	static int[] numbers; // 수열 저장할 배열
	static int N, M; // 1~N에서 M개의 수열, 입력받을 N,M
	static StringBuilder result; // 출력할 결과 변수
	
	public static void main(String[] args) { // main start
		Scanner sc = new Scanner(System.in); // Scanner 객체 생성
		N = sc.nextInt(); // N 입력
		M = sc.nextInt(); // M 입력
		numbers = new int[M]; // M 크기만큼 수열 저장할 배열 초기화
		
		func(0, 1); // cnt 0, start 1로 함수 시작
	}
	
	private static void func(int cnt, int start) { // cnt: 함수 실행 횟수, start: 중복없이 뽑기위한, 현재 인덱스
		if (cnt == M) { // 기저부분 함수 실행 횟수가 수열 크기만큼 커지면 
			result = new StringBuilder(); // 결과 담을 변수 초기화
			for (int i = 0; i < M; i++) { // 수열 크기만큼 반복
				result.append(numbers[i]).append(" "); // 공백 추가해서 변수에 담기
			}
			System.out.println(result); // 담은 결과 변수 출력
			return; // 함수 종료
		}
		for (int i = start; i <= N; i++) { // 현재 인덱스부터 N까지 반복
			numbers[cnt] = i; // 수열 저장 배열에 값 담기
			func(cnt+1, i+1); // 실행 횟수와 현재 인덱스를 증가시키고 함수 호출
		}
	}
}
