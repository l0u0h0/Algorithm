package 이유한;
import java.util.Scanner;
import java.io.FileInputStream;
public class A006_SWEA1289_원재의메모리복구하기 {
	static int[] arr;
	static int max;
	static int bit;
	
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Scanner sc = new Scanner(System.in);
		int T;
		T=sc.nextInt();
		/*
		여러 개의 테스트 케이스가 주어지므로, 각각을 처리합니다.
		*/

		for(int test_case = 1; test_case <= T; test_case++) {
			String[] mm = sc.next().split("");
			max = mm.length;
			arr = new int[max];
			for (int i = 0; i < max; i++) {
				arr[i] = Integer.parseInt(mm[i]);
			}
			int result = recu(0, 0);
			System.out.println("#"+test_case+" "+result);
			bit = 0;
		}
		
		sc.close();
	}
	
	public static int recu(int cnt, int index) {
		if (index >= max) {
			return cnt;
		}
		if (arr[index] != bit) {
			bit = bit != 0 ? 0 : 1;
			cnt++;
		}
		return recu(cnt, ++index);
	}

}



