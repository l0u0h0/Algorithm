package com.baekjoon01;

import java.util.*;
import java.io.*;

public class BJ13460 {
    static int N, M;
    static int[] goal;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    // 기울어진 방향으로 구슬 움직이는 함수
    private static int[] move(int[] dxdy, int[] ball, String[][] map) {
        while (true) {
            if (map[])
        }
    }

    private static int dfs(int[] red, int[] blue, int depth, String[][] map) {
        // 리턴 분기점

        // 사방 탐색 & 재귀 호출
        // 빨간 구슬 사방 탐색
        for (int i = 0; i < 4; i++) {
            int redR = dx[i];
            int redC = dy[i];

            // 파란 구슬 사방 탐색
            for (int j = 0; j < 4; j++) {
                int blueR = dx[j];
                int blueC = dy[j];
            }
        }
    }
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        String[] line;
        String str = br.readLine();
        N = Integer.parseInt(str.split(" ")[0]);
        M = Integer.parseInt(str.split(" ")[1]);
        String[][] map = new String[N][M];
        int[] red = new int[2];
        int[] blue = new int[2];
        goal = new int[2];

        for (int i = 0; i < N; i++) {
            line = br.readLine().split("");
            for (int j = 0; j < M; j++) {
                map[i][j] = line[j];
                if (line[j].equals("B")) {
                    blue[0] = i;
                    blue[1] = j;
                } else if (line[j].equals("R")) {
                    red[0] = i;
                    red[1] = j;
                } else if (line[j].equals("O")) {
                    goal[0] = i;
                    goal[1] = j;
                }
            }
        }



    }
}
