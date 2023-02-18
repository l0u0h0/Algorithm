package com.baekjoon01;

import java.util.*;
import java.io.*;

public class fibonacci {

	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		int N = Integer.parseInt(br.readLine());
		
		sb.append(fibo(N));
		
		System.out.println(sb);
	}
	
	private static int fibo(int num) {
		if (num == 0) return 0;
		if (num == 1) return 1;
		return fibo(num-1) + fibo(num-2);
	}

}
