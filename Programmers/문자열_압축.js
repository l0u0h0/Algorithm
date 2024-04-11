function solution(s) {
  let answer = s.length;

  for (let leng = 1; leng <= s.length; leng += 1) {
    let completeStr = "";
    let prevStr = "";
    let cnt = 1;
    for (let i = 0; i < s.length; i += leng) {
      let str = "";
      for (let j = i; j < (i + leng < s.length ? i + leng : s.length); j++) {
        str += s[j];
      }

      if (prevStr.length == 0) {
        prevStr = str;
        continue;
      }

      if (prevStr == str) {
        cnt += 1;
      } else {
        completeStr += cnt > 1 ? `${cnt}${prevStr}` : prevStr;
        cnt = 1;
        prevStr = str;
      }
    }
    if (cnt > 1) {
      completeStr += `${cnt}${prevStr}`;
    } else {
      completeStr += prevStr;
    }

    answer = Math.min(completeStr.length, answer);
  }

  return answer;
}
