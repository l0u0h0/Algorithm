package com.baekjoon01;

import java.io.*;
import java.util.*;

public class BJ1916 {
    static class Node implements Comparable<Node> {
        int idx;
        int cost;

        public Node(int idx, int cost) {
            this.idx = idx;
            this.cost = cost;
        }

        @Override
        public int compareTo(Node o) {
            return Integer.compare(this.cost, o.cost);
        }
    }

    static ArrayList<Node>[] busList;

    // 도시 개수, 출발 도시
    // 다익스트라
    public static int Dijkstra(int n, int s, int e) {
        // 방문 체크 배열
        boolean[] check = new boolean[n + 1];
        // 현재까지 이동 가중치 저장 배열
        int[] dist = new int[n + 1];
        // 최댓값 상수
        int INF =  Integer.MAX_VALUE;
        // dist 배열을 최댓값으로 초기화
        Arrays.fill(dist, INF);
        // 출발 정점은 0으로 초기화 (최솟값)
        dist[s] = 0;

        // 가중치 적은 것부터 저장할 우선순위 큐 생성
        PriorityQueue<Node> pq = new PriorityQueue<>();
        // 출발 정점 담아주기
        pq.offer(new Node(s, 0));

        // 우선순위 큐 빌때까지 반복
        while (!pq.isEmpty()) {
            // 현재 방문 위치 정점 꺼내기
            int curCity = pq.poll().idx;

            // 방문된 적 있다면 패스
            if (check[curCity]) continue;
            // 현재 위치 방문 체크
            check[curCity] = true;

            // 현재 정점과 연결된 정점들 비교
            for (Node next : busList[curCity]) {
                // 저장된 가중치보다 현재 가중치가 더 작다면
                if (dist[next.idx] > dist[curCity] + next.cost) {
                    // 연결된 정점으로의 이동 비용을 현재 정점까지의 이동 비용 + 연결된 비용
                    dist[next.idx] = dist[curCity] + next.cost;
                    // 연결된 정점 큐에 저장
                    pq.offer(new Node(next.idx, dist[next.idx]));
                }
            }
        }

        // 도착 정점까지의 최소비용 리턴
        return dist[e];
    }

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = null;

        int N = Integer.parseInt(br.readLine());
        int M = Integer.parseInt(br.readLine());

        busList = new ArrayList[N + 1];

        for (int i = 0; i <= N; i++) {
            busList[i] = new ArrayList<>();
        }

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());
            int V = Integer.parseInt(st.nextToken());
            int W = Integer.parseInt(st.nextToken());
            int cost = Integer.parseInt(st.nextToken());

            busList[V].add(new Node(W, cost));
        }

        String[] str = br.readLine().split(" ");

        int start = Integer.parseInt(str[0]);
        int end = Integer.parseInt(str[1]);

        int result = Dijkstra(N, start, end);

        sb.append(result);
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
