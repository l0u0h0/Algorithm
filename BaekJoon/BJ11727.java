package com.baekjoon01;

import java.util.*;
import java.io.*;

public class BJ11727 {
    static int N;

    private static int dinamic(int n, int[] arr) {
        if (arr[n] != 0) {
            return arr[n];
        }
        arr[n] = (dinamic(n-1, arr) + (dinamic(n-2, arr) * 2)) % 10007;
        return arr[n];
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        N = Integer.parseInt(br.readLine());

        int[] arr = new int[1002];

        for (int i = 1; i < N+1; i++) {
            arr[i] = 0;
        }

        arr[1] = 1;
        arr[2] = 3;

        sb.append(dinamic(N, arr));

        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
