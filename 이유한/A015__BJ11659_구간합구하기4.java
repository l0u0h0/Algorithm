package 이유한; // package name

import java.io.BufferedReader; // BufferedReader import
import java.io.InputStreamReader; // InputStreamReader import
import java.util.StringTokenizer; // StringTokenizer import

public class A015__BJ11659_구간합구하기4 { // class start
	/**
	 *  수 N개가 주어졌을 때 i번째에서 j번째의 구간합 구하기
	 *  입력
	 *  첫째 줄에 수의 개수 N과 합을 구해야 하는 횟수 M이 주어진다. 
	 *  둘째 줄에는 N개의 수가 주어진다. 
	 *  수는 1,000보다 작거나 같은 자연수이다. 
	 *  셋째 줄부터 M개의 줄에는 합을 구해야 하는 구간 i와 j가 주어진다.
	 *  
	 */

	static int[] numbers; // N개의 수 저장
	static int[] sumarr; // 누적합 배열
	static int sum; // 구간 합 결과
	
	public static void main(String[] args) throws Exception { // main start
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 버퍼 객체 생성
		StringTokenizer st1 = new StringTokenizer(br.readLine(), " "); // 토크나이저 객체 생성과 입력받기
		int N = Integer.parseInt(st1.nextToken()); // 첫번째 토큰 N에 입력
		int M = Integer.parseInt(st1.nextToken()); // 두번째 토큰 M에 입력

		numbers = new int[N]; // numbers 배열 N크기로 초기화
		StringTokenizer st2 = new StringTokenizer(br.readLine(), " "); // st2 토크나이저 객체 생성과 입력받기
		for (int i = 0; i < N; i++) { // N크기만큼 반복
			numbers[i] = Integer.parseInt(st2.nextToken()); // 각각의 토큰 배열에 넣기
		}
		sumarr = new int[N]; // 누적합 배열 N크기만큼 초기화
		for (int i = 0; i < N; i++) { // N크기만큼 반복
			if (i == 0) { // 첫번째 인덱스일 때
				sumarr[i] = numbers[i]; // 누적 합이 없으니 바로 넣기
				continue; // 다음으로
			}
			sumarr[i] = sumarr[i-1] + numbers[i]; // 이전 합과 현재 값 더해서 넣기
		}

		StringBuilder result = new StringBuilder(); // 결과 객체 생성
		for (int i = 0; i < M; i++) { // M크기만큼 반복
			StringTokenizer st3 = new StringTokenizer(br.readLine(), " "); // st3 객체 생성과 입력받기
			int a = Integer.parseInt(st3.nextToken()); // 첫번째 토큰 a에 넣기
			int b = Integer.parseInt(st3.nextToken()); // 두번쨰 토큰 b에 넣기
			sum = 0; // 구간합 변수 초기화
			func(a, b); // 구간합 계산 함수 호출
			result.append(sum).append("\n"); // 출력할 결과에 구간합과 개행문자 넣기
		}
		System.out.print(result); // 결과 출력
	}
	
	private static void func(int i, int j) { // i ~ j까지 구간합 구하는 함수
		if (i > 1) { // i가 1보다 클 때
			sum = sumarr[j-1] - sumarr[i-2]; // j번째 누적합에서 i-1번째 누적합 빼서 결과에 넣기
		} else if (i == 1) { // i가 1일 때
			sum = sumarr[j-1]; // j번째 누적합 결과에 넣기
		}
		
	}

}
