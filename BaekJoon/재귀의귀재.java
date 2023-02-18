package com.baekjoon01;

import java.io.*;

public class 재귀의귀재 {
	static int cnt;
    public static int recursion(String s, int l, int r){
    	cnt++;
        if(l >= r) return 1;
        else if(s.charAt(l) != s.charAt(r)) return 0;
        else return recursion(s, l+1, r-1);
    }
    
    public static int isPalindrome(String s){
        return recursion(s, 0, s.length()-1);
    }
    
    public static void main(String[] args) throws Exception {
    	BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    	StringBuilder sb = new StringBuilder();
    	int N = Integer.parseInt(br.readLine());
    	for (int i = 0; i < N; i++) {
    		cnt = 0;
    		sb.append(isPalindrome(br.readLine())).append(" ").append(cnt).append("\n");
    	}
        System.out.println(sb);
    }
}
