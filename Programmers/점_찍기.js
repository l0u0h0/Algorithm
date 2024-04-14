function solution(k, d) {
  let answer = 0;

  for (let i = 0; i <= d; i += k) {
    let point = parseInt(Math.sqrt(d * d - i * i));
    if (k !== 1 && point !== 0) {
      point = parseInt(point / k);
    }
    answer += point + 1;
  }

  return answer;
}
