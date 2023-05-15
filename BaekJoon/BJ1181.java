import java.io.*;
import java.util.*;

public class BJ1181 {
    static class Node implements Comparable<Node> {
        int leng;
        String word;

        public Node(int leng, String word) {
            this.leng = leng;
            this.word = word;
        }

        @Override
        public int compareTo(Node o) {
            if (this.leng == o.leng) {
                return this.word.compareTo(o.word);
            }
            return this.leng - o.leng;
        }
    }
    static PriorityQueue<Node> pq;
    static int N;

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        N = Integer.parseInt(br.readLine());
        Set<String> check = new HashSet<>();
        pq = new PriorityQueue<>();

        for (int i = 0; i < N; i++) {
            String word = br.readLine();
            if (check.contains(word)) {
                continue;
            }
            check.add(word);
            int leng = word.length();
            pq.offer(new Node(leng, word));
        }
        int size = pq.size();
        for (int i = 0; i < size; i++) {
            sb.append(pq.poll().word).append("\n");
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
