package com.baekjoon01;

import java.io.*;
import java.util.*;

public class 알고리즘_수업_병합정렬1 {
	static int[] temp;
	static StringBuilder sb;
	static int cnt = 0, K;
	
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		sb = new StringBuilder();
		StringTokenizer st = new StringTokenizer(br.readLine());
		int N = Integer.parseInt(st.nextToken());
		K = Integer.parseInt(st.nextToken());
		int[] origin_arr = new int[N];
		st = new StringTokenizer(br.readLine());
		for (int i = 0; i < N; i++) {
			origin_arr[i] = Integer.parseInt(st.nextToken());
		}
		temp = new int[N+1];
		merge_sort(origin_arr, 0, N-1);
		if (sb.length() > 0) System.out.println(sb);
		else System.out.println(-1);
		br.close();
	}
	
	private static void merge_sort(int[] arr, int front, int rear) {
		if (front < rear) {
			int middle = (rear+front) / 2;
			merge_sort(arr, front, middle);
			merge_sort(arr, middle+1, rear);
			merge(arr, front, middle, rear);
		}
		
	}
	
	private static void merge(int[] arr, int front, int middle, int rear) {
		int i = front;
		int j = middle+1;
		int t = 1;
		while (i <= middle && j <= rear) {
			if (arr[i] <= arr[j]) temp[t++] = arr[i++];
			else temp[t++] = arr[j++];
		}
		while (i <= middle) {
			temp[t++] = arr[i++];
		}
		while (j <= rear) {
			temp[t++] = arr[j++];
		}
		i = front;
		t = 1;
		while (i <= rear) {
			arr[i++] = temp[t++];
			cnt++;
			if (cnt == K) sb.append(temp[t-1]);
		}
		
	}

}
