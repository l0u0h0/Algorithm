function solution(brown, yellow) {
  let answer = [];
  for (let i = 3; i < brown; i++) {
    const j = (brown + 4) / 2 - i;
    if (j <= i) {
      if ((i - 2) * (j - 2) === yellow) {
        answer = [i, j];
      }
    }
  }
  return answer;
}
