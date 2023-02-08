package 이유한; // package명

import java.util.Scanner; // 입력 받기 위해 Scanner import

public class A009_BJ15649_N과M_1 { // class 열기

	static int N, R; // 전체 수 N, 뽑아야 하는 수 R
	static int[] numbers; // 순열 저장할 배열 numbers
	static boolean[] isSelected; // 뽑힌 적 있는지 검사할 flag 배열
	static StringBuilder result; // 결과 출력 StringBuilder
	
	public static void main(String[] args) { // 메인 메서드 시작
		result = new StringBuilder(); // result 객체 생성
		Scanner sc = new Scanner(System.in); // Scanner 객체 sc 생성
		N = sc.nextInt(); // N 값 입력받기
		R = sc.nextInt(); // R 값 입력받기
		numbers = new int[R]; // numbers 배열 R 크기만큼 생성
		isSelected = new boolean[N + 1]; // isSelected 배열 N+1 크기만큼 생성
		permutation(0); // 초기값 0 넣어서 permutation 함수 호출
		System.out.println(result); // 결과값 result 출력
	} // 메인 메서드 종료
	
	private static void permutation(int cnt) { // cnt 매개변수로 받는 재귀함수 permutation 시작
		if (cnt == R) { // cnt가 뽑아야하는 수 R 만큼 증가했다면 (기저부분)
			StringBuilder row = new StringBuilder(); // 순열 한 줄을 담을 row 객체 생성
			for (int n : numbers) { // numbers 배열을 순회할 for-each문 시작
				row.append(n).append(" "); // 각 원소를 row에 append
			} // for-each문 종료
			row.append("\n"); // row에 개행문자 append
			result.append(row); // result에 row append
			return; // 재귀함수 종료
		} // if문 종료
		for (int i = 1; i <= N; ++i) { // 전체 수 1~N을 도는 for문 시작
			if (isSelected[i]) continue; // 뽑힌 적 있는 수라면 continue로 넘어감
			numbers[cnt] = i; // numbers 배열에 cnt 인덱스에 뽑힌 적 없는 수 i를 저장
			isSelected[i] = true; // numbers 배열에 저장된 i는 뽑은 수가 됐으므로 isSelected 배열의 i번째 true로 저장
			permutation(cnt+1); // 다음 수를 뽑으러 cnt+1을 매개변수로 넣어 재귀함수 호출
			isSelected[i] = false; // 다음 수를 뽑는 재귀함수가 종료되었다면 다시 진행해야하기에 isSelected 배열 false로 초기화
		} // for문 종료
	} // permutation 함수 종료
} // class 닫기
