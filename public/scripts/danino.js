#include <stdio.h>
#include <stdlib.h>

int
get_next_permutation(int* arr, int len)
{
    // searching left point
    int left_point;
    for (left_point = len-1; left_point > 0 && arr[left_point-1] >= arr[left_point]; left_point--);


    // we reached the last permutation
    if (left_point == 0) {
        return 0;
    }

    left_point--;

    int right_point;
    for (right_point = len-1; right_point > left_point && arr[right_point] <= arr[left_point]; right_point--);

    // swapping
    int tmp = arr[left_point];
    arr[left_point] = arr[right_point];
    arr[right_point] = tmp;

    int j=0;
    int i=0;
    int new_arr[9];
    
    // print out + updating the previous permutation
    for (i = 0; i <= left_point; i++) {
        printf("%d", arr[i]);
        new_arr[j] = arr[i];
        j++;
    }
    for (i = len - 1; i > left_point; i--) {
        printf("%d", arr[i]);
        new_arr[j] = arr[i];
        j++;
    }

    for (i=0; i < len ; i++) {
        arr[i] = new_arr[i];
    }


    printf("\n");
    return 1;

}

int main(void)
{
    int BORDER_L = 1;
    int BORDER_H = 9;
    int ARR_INDEX_SHIFT = 1;

    int N;

    if (scanf("%d", &N) != 1) {
        printf("Required: one number on input");
        return 1;
    }

    if (N < BORDER_L || N > BORDER_H) {
        printf("Requred: 0 < N < 10\nGot: N=%d", N);
        return 1;
    }

    int array[9];
    int i;

    for (int i=0; i < N; i++) {
        array[i] = i + ARR_INDEX_SHIFT;
    }

    for (i=0; i < N; i++) {
        printf("%d", array[i]);
    }

    printf("\n");


    while (get_next_permutation(array, N) != 0) {
        get_next_permutation(array, N);
    }


    return 0;
}
