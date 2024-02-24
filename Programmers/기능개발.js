function solution(progresses, speeds) {
  let answer = [];
  const stack = [];

  progresses.forEach((e, i) => {
    const num = Math.ceil((100 - e) / speeds[i]);
    stack.push(num);
  });

  let day = stack[0];
  let cnt = 1;
  stack.shift();
  while (stack.length > 0) {
    if (day >= stack[0]) {
      cnt += 1;
    } else {
      answer.push(cnt);
      cnt = 1;
      day = stack[0];
    }
    stack.shift();
  }
  answer.push(cnt);

  return answer;
}
