function solution(n, t, m, p) {
  var answer = "";
  const arr = [];
  for (let i = 0; i <= t * m; i += 1) {
    const str = i.toString(n).toUpperCase();
    str.split("").forEach((e) => arr.push(e));
  }

  let idx = p - 1;

  while (answer.length < t) {
    answer += arr[idx];
    idx += m;
  }

  return answer;
}
