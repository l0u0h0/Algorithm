package com.baekjoon01;

import java.util.*;
import java.io.*;

public class BJ13460 {
    static class Ball {
        int[] red;
        int[] blue;
        int cnt;

        public Ball(int[] red, int[] blue, int cnt) {
            this.red = red;
            this.blue = blue;
            this.cnt = cnt;
        }
    }
    static int N, M;
    static int[] dx = {1, 0, -1, 0};
    static int[] dy = {0, 1, 0, -1};

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        String line;
        String str = br.readLine();
        N = Integer.parseInt(str.split(" ")[0]);
        M = Integer.parseInt(str.split(" ")[1]);
        char[][] map = new char[N][M];
        int[] red = new int[2];
        int[] blue = new int[2];

        for (int i = 0; i < N; i++) {
            line = br.readLine();
            for (int j = 0; j < M; j++) {
                map[i][j] = line.charAt(j);
                if (map[i][j] == 'B') {
                    blue[0] = i;
                    blue[1] = j;
                } else if (map[i][j] == 'R') {
                    red[0] = i;
                    red[1] = j;
                }
            }
        }

        Queue<Ball> queue = new LinkedList<Ball>();
        int[][][][] visit = new int[N][M][N][M];

        visit[red[0]][red[1]][blue[0]][blue[1]] = 1;
        queue.offer(new Ball(red, blue, 0));

        boolean flag = false;

        while(!queue.isEmpty()) {
            Ball cur = queue.poll();

            // 10번 넘었으면
            if (cur.cnt > 10) {
                break;
            }
            // 파란 구슬이 들어갔으면 없던 일로 넘기기
            if (map[cur.blue[0]][cur.blue[1]] == 'O') {
                continue;
            }
            // 빨간 구슬이 들어갔고 파란 구슬이 들어가지 않았다면 성공
            if (map[cur.red[0]][cur.red[1]] == 'O' && map[cur.blue[0]][cur.blue[1]] != 'O') {
                System.out.println(cur.cnt);
                flag = true;
                break;
            }

            for (int i = 0; i < 4; i++) {
                // 빨간구슬 움직이기
                int[] nextR = { cur.red[0], cur.red[1] };

                // 움직일 수 없을떄까지
                while (true) {
                    nextR[0] += dx[i];
                    nextR[1] += dy[i];
                    // 빨간 구슬이 들어가거나 벽을 만나면 멈추기
                    if (map[nextR[0]][nextR[1]] == 'O' || map[nextR[0]][nextR[1]] == '#') break;
                }

                // 빨간 구슬이 벽에 닿았다면
                if (map[nextR[0]][nextR[1]] == '#') {
                    nextR[0] -= dx[i];
                    nextR[1] -= dy[i];
                }

                // 파란구슬 움직이기
                int[] nextB = { cur.blue[0], cur.blue[1] };

                // 움직일 수 있을떄까지
                while (true) {
                    nextB[0] += dx[i];
                    nextB[1] += dy[i];

                    if (map[nextB[0]][nextB[1]] == 'O' || map[nextB[0]][nextB[1]] == '#') break;
                }

                if (map[nextB[0]][nextB[1]] == '#') {
                    nextB[0] -= dx[i];
                    nextB[1] -= dy[i];
                }

                // 만약에
                // 빨간 구슬이랑 파란 구슬이랑 같은 칸에 있다면
                if (nextR[0] == nextB[0] && nextR[1] == nextB[1] && map[nextB[0]][nextB[1]] != 'O') {
                    // 구슬들이 이동한 거리 계산
                    int redDist = Math.abs(nextR[0] - cur.red[0]) + Math.abs(nextR[1] - cur.red[1]);
                    int blueDist = Math.abs(nextB[0] - cur.blue[0]) + Math.abs(nextB[1] - cur.blue[1]);

                    // 이동 거리가 긴 쪽이 한칸 전으로 비켜주기
                    if (redDist > blueDist) {
                        nextR[0] -= dx[i];
                        nextR[1] -= dy[i];
                    } else {
                        nextB[0] -= dx[i];
                        nextB[1] -= dy[i];
                    }
                }

                // 이동한 위치가 간 적이 없는 위치라면
                if (visit[nextR[0]][nextR[1]][nextB[0]][nextB[1]] == 0) {
                    visit[nextR[0]][nextR[1]][nextB[0]][nextB[1]] = 1;
                    queue.offer(new Ball(nextR, nextB, cur.cnt + 1));
                }
            }
        }
        if (!flag) System.out.println(-1);
    }
}
