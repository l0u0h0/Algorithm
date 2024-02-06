function solution(x, y, n) {
  let answer = -1;
  const stack = [[0, y]];

  while (stack.length > 0) {
    const cur = stack.shift();
    if (cur[1] == x) {
      answer = cur[0];
      break;
    }
    if (cur[1] % 2 == 0) stack.push([cur[0] + 1, cur[1] / 2]);
    if (cur[1] % 3 == 0) stack.push([cur[0] + 1, cur[1] / 3]);
    if (cur[1] - n >= x) stack.push([cur[0] + 1, cur[1] - n]);
  }

  return answer;
}
