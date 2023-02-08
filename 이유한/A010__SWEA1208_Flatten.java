package 이유한; // package 이름

import java.util.Arrays; // Arrays import
import java.util.Scanner; // Scanner import

class A010__SWEA1208_Flatten { // class start
	static int N; // 덤프 횟수 저장할 변수
	static int[] box; // 상자 갯수 저장할 배열
	static final int num = 100; // box배열 길이 상수
	
	public static void main(String args[]) throws Exception	{ // main start
		Scanner sc = new Scanner(System.in); // Scanner 객체 생성
		int T = 10; // 전체 테스트 케이스 수

		for(int test_case = 1; test_case <= T; test_case++)	{ // 테스트 케이스 수만큼 반복
			N = sc.nextInt(); // 덤프 횟수 입력
			box = new int[num]; // box 배열 초기화
			for (int i = 0; i < num; i++) { // num 크기만큼 반복
				box[i] = sc.nextInt(); // 입력받아서 배열에 저장
			} // 반복문 종료
			Arrays.sort(box); // 오름차순으로 정렬
			
			permutation(0); // 매개변수 0으로 함수 호출

			int result = box[num-1] - box[0]; // 함수 종료된 뒤 box 배열의 가장 큰 값에서 작은 값 저장
			System.out.println("#"+test_case+" "+result); // 결과 출력
		} // 반복문 종료
	} // main end
	
	private static void permutation(int cnt) { // 재귀함수 호출
		if (cnt == N) return; // cnt가 덤프 횟수랑 같아지면 종료
		box[0] += 1; // 가장 작은 값에 1 더하기
		box[num-1] -= 1; // 가장 큰 값에 1 빼기
		Arrays.sort(box); // 연산 된 배열 다시 정렬
		permutation(cnt+1); // cnt 증가시켜서 재귀 호출
	} // 함수 종료
} // class end
