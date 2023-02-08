package 이유한; // package name

import java.util.Scanner; // Scanner import

public class A017__SWEA1954_달팽이숫자_과제2 { // class start
	static int N; // 달팽이 크기
	static int[][] dalpeng; // 결과 출력될 달팽이 행렬
	static boolean[][] check; // 방향 전환을 위한 체크 행렬
	static int[][] handle = {{0, 1},{1, 0},{0, -1},{-1, 0}}; // 달팽이의 방향전환을 위한 핸들 행렬, 차례대로 오른쪽, 아래쪽, 왼쪽, 위쪽

	public static void main(String args[]) throws Exception { // main start
		Scanner sc = new Scanner(System.in); // 스캐너 객체 생성
		int T; // 테스트 케이스 변수
		T = sc.nextInt(); // 테스트 케이스 수 입력

		for (int test_case = 1; test_case <= T; test_case++) { // 테스트 케이ㅡ 수만큼 반복
			N = sc.nextInt(); // 달팽이 크기 입력
			dalpeng = new int[N][N]; // 크기만큼 달팽이 행렬 초기화
			check = new boolean[N][N]; // 크기만큼 체크 행렬 초기화

			recu(0, 0, 0, 1); // x, y 좌표값[x][y], 핸들 행렬 인덱스 i, 숫자 매개변수 num
            System.out.println("#" + test_case); // 테스트 케이스 번호 출력
			for (int i = 0; i < N; i++) { // 달팽이 크기만큼 반복
                for (int j = 0; j < N; j++) { // 달팽이 크기만큼 반복
                	System.out.print(dalpeng[i][j] + " "); // 달팽이 행렬 출력
                }
				System.out.println(); // 띄어쓰기
			}
		}
	}
	
	private static void recu(int x, int y, int i, int num) { // 현재 이동한 좌표인 x(열), y(행), i=> handle 행렬의 방향 인덱스, num은 현재 숫자값
		dalpeng[x][y] = num; // 달팽이 행렬에 숫자 넣어주고
		check[x][y] = true; // 방문 행렬 true로 바꿔주고
		num += 1; // 숫자 증가
		if (num > N*N) return; // 만약 숫자가 N제곱보다 커졌다면 종료
		int check_x = x + handle[i][0]; // 다음으로 진행할 수 있는지 검사하기 위해 x 값에 handle 값을 더하기 
		int check_y = y + handle[i][1]; // 다음으로 진행할 수 있는지 검사하기 위해 y 값에 handle 값을 더하기
		
		if (check_x >= N || check_x < 0 || check_y >= N || 
				check_y < 0 || check[check_x][check_y]) { // 좌표가 행렬을 벗어나는 네 가지 경우와 방문했던적 있는 경우 => 방향을 바꿔야하는 경우
			if (i == 3) i = 0; // handle 행렬 인덱스가 마지막이라면 0으로 초기화
			else i++; // handle 행렬 인덱스 증가
		}
		
		int next_x = x + handle[i][0]; // 바뀐 (혹은 바뀌지 않았어도) 방향값을 추가한 좌표값을 next_x에 담음
		int next_y = y + handle[i][1]; // 바뀌지 않았어도 (혹은 바뀐) 방향값을 추가한 좌표값을 next_y에 담음
		
		recu(next_x, next_y, i, num); // 다음 좌표값 next_x, next_y와 handle 인덱스값 i, 증가한 숫자값 num을 담아서 재귀 호출
	}

}