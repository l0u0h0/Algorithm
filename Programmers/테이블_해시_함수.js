function solution(data, col, row_begin, row_end) {
  const func = (c, row_b, row_e) => {
    let result = 0;

    data.sort((a, b) => {
      if (a[c - 1] - b[c - 1] === 0) return b[0] - a[0];
      return a[c - 1] - b[c - 1];
    });

    for (let i = row_b; i <= row_e; i++) {
      result ^= data[i - 1].reduce((a, c) => a + (c % i), 0);
    }

    return result;
  };

  return func(col, row_begin, row_end);
}
