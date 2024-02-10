function solution(numbers) {
  return numbers.map((e) => {
    let idx = e.toString(2).split("").reverse().indexOf("0");
    if (idx == -1) return e + 2 ** (e.toString(2).length - 1);
    else return e + Math.ceil(2 ** (idx - 1));
  });
}
