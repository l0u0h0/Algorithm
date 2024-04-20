function solution(msg) {
  const answer = [];
  const dict = new Map();

  for (let i = 65; i < 91; i++) dict.set(String.fromCharCode(i), i - 64);

  let num = 27;
  msg = msg.split("");
  let idx = 0;
  while (idx < msg.length) {
    const str = msg.slice(0, idx + 1).reduce((a, c) => a + c);
    if (dict.has(str)) {
      const next = msg.slice(0, idx + 2).reduce((a, c) => a + c);
      if (dict.has(next)) {
        idx += 1;
      } else {
        dict.set(next, num);
        answer.push(dict.get(str));
        msg = msg.slice(idx + 1, msg.length);
        idx = 0;
        num += 1;
      }
    }
  }
  const str = msg.reduce((a, c) => a + c);
  answer.push(dict.get(str));
  return answer;
}
