package 이유한; // package name

import java.io.BufferedReader; // BufferedReader import
import java.io.IOException; // IOException import
import java.io.InputStreamReader; // InputStreamReader import
import java.util.StringTokenizer; // StringTokenizer import

public class A016__BJ11660_구간합구하기5 { // class start
	/**
	 * 행마다 누적합 해서
	 * 누적합 행렬 만들어서
	 * 들어온 입력에 대해 행마다 구간합 연산?
	 */
	static int[][] sumarr; // 누적합 행렬
	static int[][] numbers; // 좌표 행렬
	static int sum; // 구간합
	static StringBuilder result; // 출력될 총 결과
	
	
	public static void main(String[] args) throws IOException { // main start
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in)); // 버퍼 객체 생성
		StringTokenizer st1 = new StringTokenizer(br.readLine(), " "); // 토크나이저 객체 생성과 입력받기
		int N = Integer.parseInt(st1.nextToken()); // 첫번째 토큰 N에 입력
		int M = Integer.parseInt(st1.nextToken()); // 두번째 토큰 M에 입력
		
		sumarr = new int[N][N]; // 누적합 행렬 크기 초기화
		for (int i = 0; i < N; i++) { // N만큼 반복
			StringTokenizer st2 = new StringTokenizer(br.readLine(), " "); // 토크나이저 객체 생성과 입력받기
			for (int j = 0; j < N; j++) { // N만큼 반복
				int num = Integer.parseInt(st2.nextToken()); // num에 토큰 받기
				if (j == 0) { // j인덱스가 0이라면
					sumarr[i][j] = num; // num 넣어주고
					continue; // 다음으로
				}
				sumarr[i][j] = num + sumarr[i][j-1]; // 누적합 행렬에 누적합 진행
			}
		}
		
		numbers = new int[M][4]; // 좌표 행렬 크기 초기화
		result = new StringBuilder(); // 결과 변수 초기화
		for (int i = 0; i < M; i++) { // M만큼 반복
			StringTokenizer st3 = new StringTokenizer(br.readLine(), " "); // 토크나이저 객체 생성과 입력받기
			for (int j = 0; j < 4; j++) { // 좌표 x1,y1,x2,y2 4번 반복
				numbers[i][j] = Integer.parseInt(st3.nextToken()); // 토큰 좌표 행렬에 넣기
			}
			sum = 0; // 구간합 초기화
			func(numbers[i]); // 좌표 행렬에서 행마다 누적합 연산 함수 호출
			result.append(sum).append("\n"); // 결과에 행마다 append
		}
		System.out.println(result); // 결과 출력하기
		
	}
	
	private static void func(int[] arr) { // 누적합 연산 함수, arr => 좌표 행 배열
		for (int i = arr[0]-1; i < arr[2]; i++) { // x1 - 1 부터 x2 까지 인덱스 반복
			if (arr[1] == 1) { // y1 값이 1이라면 (누적된 합이 없다면)
				sum += sumarr[i][arr[3]-1]; // 구간합 변수에 누적합 행렬값 넣어주기 sumarr[i][y2-1]
			} else if (arr[1] > 1) { // y1 값이 1보다 크다면 (누적된 합이 있다면)
				sum += sumarr[i][arr[3]-1] - sumarr[i][arr[1]-2]; // i행 누적합 행렬에서 y2 인덱스 값에서 y1 인덱스 - 1 값 빼서 구간합 변수에 넣기
			}
		}
	}

}
