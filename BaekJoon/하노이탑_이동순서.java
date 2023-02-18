package com.baekjoon01;

import java.io.*;

public class 하노이탑_이동순서 {

	static StringBuilder sb;
	static int cnt;

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		int N = Integer.parseInt(br.readLine());
		sb = new StringBuilder();
		cnt = 0;
		hanoi(N, 1, 2, 3);
		StringBuilder result = new StringBuilder();
		result.append(cnt).append('\n').append(sb);
		System.out.println(result);
		
		br.close();
	}

	// cnt:원반갯수, from:시작기둥, temp:임시기둥, to:끝기둥
	private static void hanoi(int n, int from, int temp, int to) {
		cnt++;
		if (n == 1) {
			sb.append(from).append(" ").append(to).append("\n");
		} else {
			hanoi(n - 1, from, to, temp);
			sb.append(from).append(" ").append(to).append("\n");
			hanoi(n - 1, temp, from, to);
		}
	}

}



