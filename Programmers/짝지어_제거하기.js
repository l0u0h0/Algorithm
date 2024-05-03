// i, i+1 같이 검사하다가 짝 만나면 문자열 제거 후 i -= 1;

function solution(s) {
  const arr = s.split("");
  const stack = [];
  stack.push(arr[0]);
  let i = 0;
  let cur, next;
  while (i < arr.length - 1) {
    cur = stack[stack.length - 1];
    next = arr[i + 1];
    if (cur == next) stack.pop();
    else stack.push(next);
    i += 1;
  }

  return stack.length == 0 ? 1 : 0;
}
