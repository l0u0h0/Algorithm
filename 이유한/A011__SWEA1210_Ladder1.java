package 이유한; // package 명

import java.util.Scanner; // Scanner import

public class A011__SWEA1210_Ladder1 { // class start
	static final int num = 100; // 행렬 크기 상수
	static int[][] sadari; // 사다리 행렬 변수
	static int idx; // 재귀함수 호출할 행 인덱스 변수
	static int fin; // 재귀함수 호출할 열 인덱스 변수
	static int result; // 출발지점 담을 변수

	public static void main(String args[]) throws Exception { // main start

		Scanner sc = new Scanner(System.in); // 스캐너 객체 생성
		int T = 10; // 테스트케이스 개수
		
		for (int test_case = 1; test_case <= T; test_case++) { // 테스트케이스 수 만큼 반복
            
			sadari = new int[num][num+2]; // 사다리게임 양쪽 좌우에 열 하나씩 추가하여 행렬 생성
			int a = sc.nextInt(); // 문제 번호 입력
			for (int i = 0; i < num; i++) { // 행 반복
				for (int j = 1; j < num+1; j++) { // 열 반복, 2 추가됐으므로 1부터 num+1까지
					sadari[i][j] = sc.nextInt(); // 사다리 정보 입력
				}
			}
			idx = num - 2; // 맨 밑에서 2를 찾고 올라갈거여서 그 위인 num - 2행부터 시작
			for (int i = 0; i < num+1; i++) { // 맨 밑 행 하나 반복
				if (sadari[num - 1][i] == 2) { // 2를 찾고
					fin = i; // 해당 인덱스를 열 인덱스 변수에 넣고
					break; // break;
				}
			}
			permutation(idx, fin); // 시작 인덱스 변수들을 넣어서 함수 호출
			System.out.println("#"+a+" "+result); // 결과 값 출력
		}
	}

	private static void permutation(int cnt, int index) { // 함수 시작
		if (cnt == 0) { // 기저부분 cnt가 0이라면, 맨 위 행이라면,
			result = index - 1; // 결과 변수에 index에서 1뺀 값, 행렬 만들때 1부터 시작했으므로
			return; // 함수 종료
		}
		if (sadari[cnt][index - 1] == 1) { // 사다리 직선의 왼쪽이 1이라면,
			for (int i = index; i >= 0; i--) { // 왼쪽 탐색 반복문
				if (sadari[cnt][i-1] == 0) { // 다음 인덱스에서 0을 만난다면,
					index = i; // 함수 내 index 변수에 현재 i값 담고
					break; // break;
				}
			}
			permutation(cnt-1,index); // 행을 하나 올리고, 해당 인덱스값 갖고 함수 호출
		} else if (sadari[cnt][index+1] == 1) { // 사다리 직선의 오른쪽이 1이라면,
			for (int i = index; i <= num; i++) { // 오른쪽 탐색 반복문
				if (sadari[cnt][i+1] == 0) { // 다음 인덱스에서 0을 만난다면
					index = i; // 함수 내 index 변수에 현재 i값 담고
					break; // break;
				}
			}
			permutation(cnt-1,index); // 행 하나 올리고, 인덱스값 갖고 함수 호출
		} else { // 양 옆에 1이 나오지 않는다면
			permutation(cnt-1,index); // 행 하나 올린 채 현재 인덱스 값 그대로 갖고 함수 호출
		}
		
	}
}
