function solution(s) {
  const answer = [];
  const arr = [];
  let str = 0;
  let temp = 0;
  const tuple = s.split("");
  tuple.shift();
  tuple.pop();

  let flag = false;
  for (let i = 0; i < tuple.length; i++) {
    // 집합의 시작과 끝 판별
    if (tuple[i] == "{") {
      flag = true;
      continue;
    } else if (tuple[i] == "}") {
      flag = false;
    }
    if (flag) {
      if (Number.isInteger(Number(tuple[i]))) {
        str += tuple[i];
      } else {
        temp += Number(str);
        str = 0;
      }
    } else {
      if (str > 0) temp += Number(str);
      if (temp > 0) arr.push(temp);
      temp = 0;
      str = 0;
    }
  }
  arr.sort((a, b) => a - b);

  answer.push(arr[0]);
  let cnt = arr[0];

  for (let i = 1; i < arr.length; i++) {
    answer.push(arr[i] - cnt);
    cnt = arr[i];
  }

  return answer;
}
