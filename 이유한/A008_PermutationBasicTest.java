package 이유한;

import java.util.Arrays;

public class A008_PermutationBasicTest {
    
    // 1,2,3
    // 3자리수 순열
    // 3P3 = 3!
	// nPr
    
    static int N=3,R=3; // 3P3 N=3, R=3
    static int[] numbers; // 순열 저장 배열
    static boolean[] isSelected; // 해당 수의 flag 저장 배열
    static int totalCount; // 경우의 수
    
    public static void main(String[] args) { // 시작
        numbers = new int[R]; // 뽑아야 하는 순열의 수 만큼(r) 배열 초기화
        isSelected = new boolean[N+1]; // 1부터 N까지의 수의 선택여부 저장 N=> 전체 수 
        permutation(0); // 0번부터 재귀함수 호출
        System.out.println("총 경우의 수 : "+totalCount); // 총 경우의 수 출력
    }
    
    public static void permutation(int cnt) { // cnt => 몇 개 뽑았는지 매개변수로 받는 함수
        if(cnt==R) { // 뽑아야 하는 수와 cnt가 같다면 기저부분 실행
            totalCount++; // 하나의 순열이 완성됐으므로 총 경우의 수 증가
            System.out.println(Arrays.toString(numbers)); // 저장된 순열 출력
            return; // 재귀 함수 종료
        }
        for(int i=1; i<=N; ++i) { // 1부터 N까지 반복하여 검사
            if(isSelected[i]) continue; // 이전 cnt에서 뽑힌 수 인지 검사, 뽑혔었다면 continue로 다음 수로
            numbers[cnt] = i; // 순열 저장 배열에 cnt 인덱스에 뽑은 수 저장
            isSelected[i] = true; // 뽑은 수의 flag 배열 true로 저장
            permutation(cnt+1); // 다음 cnt로 재귀함수 호출
            isSelected[i] = false; // 다음 cnt를 돌았다면 뽑았던 수 초기화되므로 flag 배열 false로 초기화
        }
    }
}