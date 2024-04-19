const solution = (want, number, discount) => {
  let answer = 0;
  const origin = new Map();

  want.forEach((e, i) => origin.set(e, number[i]));

  const arr = [...discount];

  for (let i = 0; i <= arr.length - 10; i++) {
    let cnt = 0;
    const data = new Map(origin);
    for (let j = i; j < 10 + i; j++) {
      if (data.has(arr[j])) {
        if (data.get(arr[j]) > 0) {
          data.set(arr[j], data.get(arr[j]) - 1);
          cnt++;
        } else continue;
      } else continue;
      if (cnt >= 10) answer++;
    }
  }

  return answer;
};
