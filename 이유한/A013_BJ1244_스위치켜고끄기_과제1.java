package 이유한; // package name

import java.util.Arrays; // Arrays import
import java.util.Scanner; // Scanner import

public class A013_BJ1244_스위치켜고끄기_과제1 { // class start
	static int N; // 스위치 개수
	static int M; // 학생 수
	static int[] swit_arr; // 스위치 배열
	static int[][] stud_arr; // 학생 배열
	
	public static void main(String[] args) { // main start
		Scanner sc = new Scanner(System.in); // Scanner 객체 생성
		N = sc.nextInt(); // 스위치 개수 입력
		swit_arr = new int[N]; // 스위치 배열 초기화
		
		for (int i = 0; i < N; i++) { // 스위치 개수만큼 반복
			swit_arr[i] = sc.nextInt(); // 스위치 값 입력
		}
		M = sc.nextInt(); // 학생 수 입력
		stud_arr = new int[M][2]; // 학생[학생 수][성별, 숫자] 배열 초기화
		
		for (int i = 0; i < M; i++) { // 학생 수만큼 반복
			stud_arr[i][0] = sc.nextInt(); // 성별 저장
			stud_arr[i][1] = sc.nextInt(); // 숫자 저장
		}
		
		for (int[] stud : stud_arr) { // 학생 정보 꺼내는 for-each
			if (stud[0] == 1) { // 성별이 남자라면
				for (int i = 0; i < N; i++) { // 스위치 개수만큼 반복
					if ((i+1) % stud[1] == 0) { // 남학생 숫자의 배수일 떄
						swit_arr[i] = swit_arr[i] == 0 ? 1 : 0; // 해당 인덱스의 스위치가 0이라면 1, 1이라면 0
					}
					
				}
			} else if (stud[0] == 2) { // 성별이 여자라면
				swit_arr[stud[1]-1] = swit_arr[stud[1]-1] == 0 ? 1 : 0; // 해당 숫자값 스위치 변경
				func(stud[1]-1, 1); // 재귀함수 호출
			}
		}
		StringBuilder result = new StringBuilder(); // 결과값 담을 StringBuilder 객체 생성
		for (int i = 1; i <= N; i++) { // 스위치 개수만큼 반복
			result.append(swit_arr[i-1]).append(" "); // 스위치 정보에 공백 담아서 저장
			if (i % 20 == 0) result.append("\n"); // 스위치가 20개일때마다 개행문자 붙이기
		}
		System.out.println(result); // 결과 출력
	}
	
	private static void func(int num, int dist) { // 대칭 확인할 재귀함수 선언, num=> 시작 인덱스, dist=> 하나씩 늘어갈 범위
        if (num-dist < 0 || num+dist >= N) return; // 범위가 배열의 범위를 벗어나면 종료
		if (swit_arr[num-dist] == swit_arr[num+dist]) { // 대칭을 이루고 있다면
			swit_arr[num-dist] = swit_arr[num-dist] == 0 ? 1 : 0; // 해당 인덱스의 스위치 값 변경
			swit_arr[num+dist] = swit_arr[num-dist]; // 해당 인덱스의 스위치 값 변경
			func(num, dist+1); // dist 증가시킨 후 재귀 호출
		} else return; // 대칭을 이루지않는다면 함수 종료
	}

}
