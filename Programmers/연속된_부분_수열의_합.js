function solution(sequence, k) {
  const answer = [0, 0];

  let front = 0;
  let end = 0;
  let sum = 0;
  let between = Number.MAX_VALUE;

  while (true) {
    if (sum >= k) {
      if (sum == k && end - front < between) {
        between = end - front;
        answer[0] = front;
        answer[1] = end - 1;
      }
      sum -= sequence[front++];
    } else {
      if (end == sequence.length) break;
      sum += sequence[end++];
    }
  }

  return answer;
}
