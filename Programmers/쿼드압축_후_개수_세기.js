function solution(arr) {
  const recu = (row, col, size, value) => {
    const num = arr[row][col];
    let flag = false;
    for (let i = row; i < size + row; i++) {
      for (let j = col; j < size + col; j++) {
        if (num !== arr[i][j]) {
          flag = true;
        }
      }
    }

    if (!flag) value[num] += 1;
    else {
      size /= 2;
      recu(row, col, size, value);
      recu(row, col + size, size, value);
      recu(row + size, col, size, value);
      recu(row + size, col + size, size, value);
    }

    return value;
  };

  return recu(0, 0, arr.length, [0, 0]);
}
