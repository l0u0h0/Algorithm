function solution(clothes) {
  let answer = 0;
  const type = new Map();

  clothes.forEach((e) => {
    if (type.has(e[1])) {
      type.set(e[1], type.get(e[1]) + 1);
    } else type.set(e[1], 1);
  });
  const arr = [...type.values()];
  if (type.size === 1) return type.get(clothes[0][1]);
  arr.forEach((e) => {
    answer = answer === 0 ? 1 + e : answer * (1 + e);
  });

  return answer - 1;
}
