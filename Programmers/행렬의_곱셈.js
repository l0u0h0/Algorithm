function solution(arr1, arr2) {
  let arrC, arrR, n;
  if (arr1.length == arr2[0].length) {
    arrC = arr1[0].length;
    arrR = arr2.length;
    n = arr1.length;
  } else if (arr1[0].length == arr2.length) {
    arrR = arr1.length;
    arrC = arr2[0].length;
    n = arr2.length;
  }

  const arr = Array.from({ length: arrR }, () =>
    Array.from({ length: arrC }, () => 0)
  );

  for (let i = 0; i < arrR; i++) {
    for (let j = 0; j < arrC; j++) {
      for (let k = 0; k < n; k++) {
        arr[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return arr;
}
