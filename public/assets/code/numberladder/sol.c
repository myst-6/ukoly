#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <ctype.h>

// Function to perform BFS to find the shortest path from a to b
int solve(int a, int b, int adjlist[1000][1000], int adjlist_size[1000]) {
    int visited[1000] = {0};
    visited[a] = 1;
    
    struct QueueNode {
        int node;
        int dist;
    };

    struct QueueNode q[10000]; // Adjust size depending on use case
    int front = 0, rear = 0;
    
    q[rear].node = a;
    q[rear].dist = 0;
    rear++;

    while (front != rear) {
        int curr = q[front].node;
        int dist = q[front].dist;
        front++;

        if (curr == b) {
            return dist;
        }

        for (int i = 0; i < adjlist_size[curr]; i++) {
            int neighbor = adjlist[curr][i];
            if (!visited[neighbor]) {
                visited[neighbor] = 1;
                q[rear].node = neighbor;
                q[rear].dist = dist + 1;
                rear++;
            }
        }
    }
    return -1; // In case there's no valid path
}

int main() {
    const char* digits[] = {"ZERO", "ONE", "TWO", "THREE", "FOUR", "FIVE", "SIX", "SEVEN", "EIGHT", "NINE"};
    char nums[1000][100];

    for (int i = 0; i < 1000; ++i) {
        int a = i;
        char curr[100] = "";
        while (a > 0) {
            char temp[100];
            strcpy(temp, digits[a % 10]);
            strcat(temp, curr);
            strcpy(curr, temp);
            a /= 10;
        }
        strcpy(nums[i], curr);
    }

    int counters[1000][26] = {0};

    for (int i = 0; i < 1000; ++i) {
        for (int j = 0; j < strlen(nums[i]); j++) {
            if (isalpha(nums[i][j])) {
                counters[i][nums[i][j] - 'A']++;
            }
        }
    }

    int adjlist[1000][1000];
    int adjlist_size[1000] = {0};

    for (int i = 0; i < 1000; ++i) {
        for (int j = i + 1; j < 1000; ++j) {
            int diff = 0;
            for (int k = 0; k < 26; ++k) {
                diff += abs(counters[i][k] - counters[j][k]);
            }
            if (diff <= 5) {
                adjlist[i][adjlist_size[i]++] = j;
                adjlist[j][adjlist_size[j]++] = i;
            }
        }
    }

    int a, b, c, d, e, f;
    scanf("%d %d", &a, &b);
    scanf("%d %d", &c, &d);
    scanf("%d %d", &e, &f);

    printf("%d\n", solve(a, b, adjlist, adjlist_size));
    printf("%d\n", solve(c, d, adjlist, adjlist_size));
    printf("%d\n", solve(e, f, adjlist, adjlist_size));

    return 0;
}
