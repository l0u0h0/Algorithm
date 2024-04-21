function solution(elements) {
  const sum = new Map();
  elements.forEach((e) => {
    if (!sum.has(e)) sum.set(e, 1);
  });
  for (let i = 2; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      let arr = [];
      if (j + i > elements.length) {
        arr = [
          ...elements.slice(j, elements.length),
          ...elements.slice(0, i - (elements.length - j)),
        ];
      } else {
        arr = elements.slice(j, i + j);
      }

      const num = arr.reduce((a, c) => a + c);
      if (!sum.has(num)) sum.set(num, 1);
    }
  }
  const max = elements.reduce((a, c) => a + c);
  sum.set(max, 1);
  return sum.size;
}
