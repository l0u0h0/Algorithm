function solution(n, k, enemy) {
  let answer = 0;
  let [start, end] = [0, enemy.length];
  let mid = Math.floor((start + end) / 2);
  let pass = 0;

  const game = (arr) => {
    return arr.reduce((a, c) => {
      if (pass > 0) {
        pass -= 1;
        return a;
      } else return a + c;
    }, 0);
  };

  while (start <= end) {
    const round = enemy.slice(0, mid).sort((a, b) => b - a);
    pass = k;
    const sum = game(round);

    if (n - sum >= 0 && pass >= 0) start = mid + 1;
    else end = mid - 1;

    mid = Math.floor((start + end) / 2);
  }

  answer = start - 1;

  return answer;
}
