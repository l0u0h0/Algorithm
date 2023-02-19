import java.io.*;
import java.util.*;

public class 별찍기 {
    static char[][] star;
    static int N;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        N = Integer.parseInt(br.readLine());
        StringBuilder sb = new StringBuilder();
        star = new char[N][N];
        for (int i = 0; i < N; i++) {
            Arrays.fill(star[i], ' ');
        }
        int dep = 0;
        for (int i = N; i > 1; i /= 3) {
            dep++;
        }
        recursion(dep, 0, 0);
        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                sb.append(star[i][j]);
            }
            sb.append('\n');
        }
        System.out.println(sb);
    }

    private static char[][] makeStar() {
        char[][] star = new char[3][];
        star[0] = new char[]{'*', '*', '*'};
        star[1] = new char[]{'*', ' ', '*'};
        star[2] = new char[]{'*', '*', '*'};
        return star;
    }

    private static void recursion(int dep, int row, int col) {

        if (dep == 0) return;
        if (dep > 1) {
            for (int i = row; i < 3+row; i++) {
                for (int j = col; j < 3+col; j++) {
                    if (i==row+1 && j==col+1) continue;
                    recursion(dep-1, i*3, j*3);
                }
            }
        } else if (dep == 1) {
            char[][] smallstar = makeStar();
            for (int i = row; i < 3+row; i++) {
                for (int j = col; j < 3+col; j++) {
                    star[i][j] = smallstar[i-row][j-col];
                }
            }
        }


    }

}
