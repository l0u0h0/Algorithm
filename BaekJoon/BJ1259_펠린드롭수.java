package com.baekjoon01;

import java.util.*;
import java.io.*;

public class BJ1259_펠린드롭수 {
    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
        StringBuilder sb = new StringBuilder();
        String str = null;
        while (true) {
            str = br.readLine();
            if (str.equals("0")) break;
            boolean flag = false;
            int size = str.length();
            for (int i = 0, j = size-1; i < size/2; i++, j--) {
                if (str.charAt(i) != str.charAt(j)) {
                    sb.append("no\n");
                    flag = true;
                    break;
                }
            }
            if (!flag) {
                sb.append("yes\n");
                flag = false;
            }
        }
        bw.write(sb.toString());
        bw.flush();
        bw.close();
        br.close();
    }
}
