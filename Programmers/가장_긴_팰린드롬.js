function solution(s) {
  let answer = 1;

  for (let start = 0; start < s.length; start++) {
    for (let leng = answer + 1; leng + start <= s.length; leng++) {
      let stackIdx = start + Math.trunc(leng / 2) - (leng % 2 != 0 ? 0 : 1);
      let flag = false;

      for (let i = start + Math.trunc(leng / 2); i < start + leng; i++) {
        if (s[stackIdx] !== s[i]) {
          flag = true;
          break;
        }
        stackIdx -= 1;
      }

      if (!flag) {
        answer = Math.max(answer, leng);
      }
    }
  }

  return answer;
}
