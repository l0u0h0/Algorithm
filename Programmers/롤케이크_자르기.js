const solution = (topping) => {
  let result = 0;
  const value = new Map();
  topping.forEach((e) => {
    if (value.has(e)) {
      const data = value.get(e);
      data.count++;
      value.set(e, data);
    } else {
      value.set(e, { count: 1, visit: false });
    }
  });
  let [a, b] = [0, value.size];
  for (i = 0; i < topping.length; i++) {
    if (a > b) break;
    const data = value.get(topping[i]);
    if (!data.visit) {
      data.visit = true;
      a++;
    }
    if (data.count >= 1) {
      data.count--;
      if (data.count === 0) b--;
    }
    if (a === b) result++;
  }
  return result;
};
