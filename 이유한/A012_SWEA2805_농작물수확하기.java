package 이유한; // package name

import java.util.Scanner; // Scanner import

class A012_SWEA2805_농작물수확하기 { // class start
	static int N; // 농장 크기
	static int[][] farm; // 농장 행렬
	static boolean[] isSelected; // 계산한 행인지 배열
	static int sum; // 수확한 농작물
	
	public static void main(String args[]) throws Exception { // 메인 메서드 시작
		Scanner sc = new Scanner(System.in); // 스캐너 객체 생성
		int T = sc.nextInt(); // 전체 테스트 케이스 입력
		
		for(int test_case = 1; test_case <= T; test_case++) { // 테스트 케이스 수만큼 반복
			N = sc.nextInt(); // 농장 크기 입력
			farm = new int[N][N]; // 크기에 맞춰 행렬 초기화
			isSelected = new boolean[N]; // 검사 배열 초기화
			for (int i = 0; i < N; i++) { // 농장 행 반복
				String[] str = sc.next().split(""); // 한줄로 입력받아 배열로 저장
				for (int j = 0; j < N; j++) { // 농장 열 반복
					farm[i][j] = Integer.parseInt(str[j]); // 입력받은 스트링 정수형으로 변환해 농장 행렬에 저장
				}
			}
			sum = 0; // 농작물 합계 초기화
			func(N/2, 0); // 가운데 행부터 cnt 0으로 초기화하여 실행
			System.out.println("#"+test_case+" "+sum); // 결과 출력
		}
	}
	
	private static void func(int idx, int cnt) { // 농장 순회할 함수 선언, idx=> 현재 행 인덱스, cnt=> 열 인덱스 설정과 몇번 실행됐는지
		if (cnt > (N / 2) || isSelected[idx]) return; // cnt가 농장 크기의 반(농장 크기의 반에서 내림)보다 커지면 혹은 이미 순회한 행이면 종료
		for (int i = cnt; i < N - cnt; i++) { // cnt 열부터 농장 크기에서 cnt 뺀 것만큼의 열까지 반복
			sum += farm[idx][i]; // 해당 행렬의 값을 sum에 더하기
		}
		isSelected[idx] = true; // 해당 열 방문 플래그 true 설정
		func(idx-1, cnt+1); // 위쪽 행에 대해 재귀 호출
		func(idx+1, cnt+1); // 아래쪽 행에 대해 재귀 호출
	}
}
