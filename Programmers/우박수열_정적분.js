function solution(k, ranges) {
  let answer = [];
  let point = [k];
  const func = (num) => {
    let result = 0;
    let n = num;
    while (n !== 1) {
      if (n % 2 === 0) n /= 2;
      else if (n % 2 !== 0) n = n * 3 + 1;
      point.push(n);
      result++;
      if (n === 1) break;
    }
    return result;
  };

  const end = func(k);
  let datas = [];
  for (let i = 0; i < end; i++) {
    let min = 0;
    let max = 0;
    point[i] > point[i + 1]
      ? ([min, max] = [point[i + 1], point[i]])
      : ([min, max] = [point[i], point[i + 1]]);
    const data = min + (max - min) / 2;
    datas.push(data);
  }
  const arr = ranges.map((e) => {
    return [e[0], end + e[1]];
  });

  arr.forEach((e) => {
    if (e[0] > e[1]) answer.push(-1);
    else if (e[0] === e[1]) answer.push(0);
    else {
      let result = 0;
      for (let i = e[0]; i < e[1]; i++) {
        result += datas[i];
      }
      answer.push(result);
    }
  });

  return answer;
}
