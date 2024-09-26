import java.util.*;

public class Main {

    // Function to perform BFS to find the shortest path from a to b
    public static int solve(int a, int b, List<List<Integer>> adjlist) {
        boolean[] visited = new boolean[1000];
        visited[a] = true;

        Queue<int[]> q = new LinkedList<>();
        q.offer(new int[]{a, 0});  // int[] to store current node and distance

        while (!q.isEmpty()) {
            int[] curr = q.poll();
            int node = curr[0];
            int dist = curr[1];

            if (node == b) {
                return dist;
            }

            for (int neighbor : adjlist.get(node)) {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    q.offer(new int[]{neighbor, dist + 1});
                }
            }
        }
        return -1; // In case there's no valid path
    }

    public static void main(String[] args) {
        String[] digits = {"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"};
        String[] nums = new String[1000];

        for (int i = 0; i < 1000; i++) {
            StringBuilder curr = new StringBuilder();
            int a = i;
            if (a == 0) {
                nums[i] = digits[0];
                continue;
            }
            while (a > 0) {
                curr.insert(0, digits[a % 10]);
                a /= 10;
            }
            nums[i] = curr.toString();
        }

        int[][] counters = new int[1000][26];

        for (int i = 0; i < 1000; i++) {
            for (char j : nums[i].toCharArray()) {
                if (Character.isLetter(j)) {
                    counters[i][j - 'A']++;
                }
            }
        }

        List<List<Integer>> adjlist = new ArrayList<>();
        for (int i = 0; i < 1000; i++) {
            adjlist.add(new ArrayList<>());
        }

        for (int i = 0; i < 1000; i++) {
            for (int j = i + 1; j < 1000; j++) {
                int diff = 0;
                for (int k = 0; k < 26; k++) {
                    diff += Math.abs(counters[i][k] - counters[j][k]);
                }
                if (diff <= 5) {
                    adjlist.get(i).add(j);
                    adjlist.get(j).add(i);
                }
            }
        }

        Scanner scanner = new Scanner(System.in);
        int a = scanner.nextInt(), b = scanner.nextInt();
        int c = scanner.nextInt(), d = scanner.nextInt();
        int e = scanner.nextInt(), f = scanner.nextInt();

        System.out.println(solve(a, b, adjlist));
        System.out.println(solve(c, d, adjlist));
        System.out.println(solve(e, f, adjlist));
    }
}
