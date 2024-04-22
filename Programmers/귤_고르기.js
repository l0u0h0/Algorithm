function solution(k, tangerine) {
  let answer = 0;

  const type = new Map();

  tangerine.forEach((e) => {
    if (!type.has(e)) type.set(e, 1);
    else {
      const prevCount = type.get(e);
      type.set(e, prevCount + 1);
    }
  });

  const arr = [...type];
  arr.sort((a, b) => b[1] - a[1]);

  let count = 0;

  for (const e of arr) {
    if (k > count) {
      count += e[1];
      answer++;
    } else break;
  }

  return answer;
}
