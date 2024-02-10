function solution(routes) {
  let answer = 1;
  const arr = routes.sort((a, b) => a[1] - b[1]);
  let start = arr[0][0];
  let end = arr[0][1];
  for (let i = 1; i < arr.length; i++) {
    if (end >= arr[i][1]) continue;
    if (end < arr[i][0]) {
      answer += 1;
      start = arr[i][0];
      end = arr[i][1];
    }
  }

  return answer;
}
