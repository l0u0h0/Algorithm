const calculation = (arr, type) => {
  if (type == "*") return arr.reduce((a, c) => a * Number(c), 1);
  else if (type == "-")
    return arr.reduce((a, c) => a - Number(c), 0) + arr[0] * 2;
  else return arr.reduce((a, c) => a + Number(c), 0);
};

function solution(expression) {
  var answer = 0;
  const comb = [
    ["*", "-", "+"],
    ["*", "+", "-"],
    ["-", "*", "+"],
    ["-", "+", "*"],
    ["+", "-", "*"],
    ["+", "*", "-"],
  ];

  comb.forEach((e) => {
    const strArr = expression
      .split(e[2])
      .map((str) => str.split(e[1]).map((str) => str.split(e[0])));

    answer = Math.max(
      answer,
      Math.abs(
        calculation(
          strArr.map((str) =>
            calculation(
              str.map((str) => calculation(str, e[0])),
              e[1]
            )
          ),
          e[2]
        )
      )
    );
  });

  return answer;
}
