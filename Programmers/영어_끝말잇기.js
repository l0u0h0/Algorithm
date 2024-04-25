function solution(n, words) {
  const answer = [0, 0];
  const word = new Map();
  word.set(words[0], 0);
  let cur, prev;
  for (let i = 1; i < words.length; i++) {
    cur = words[i - 1].split("");
    prev = words[i].split("");
    if (cur[cur.length - 1] !== prev[0] || word.has(words[i])) {
      answer[0] = (i % n) + 1;
      answer[1] = Math.ceil((i + 1) / n);
      break;
    }
    word.set(words[i], 0);
  }

  return answer;
}
