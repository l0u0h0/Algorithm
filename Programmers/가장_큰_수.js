function solution(numbers) {
  let answer = "";

  answer = numbers
    .sort((a, b) => b.toString() + a.toString() - (a.toString() + b.toString()))
    .reduce((a, b) => a.toString() + b.toString());

  if (answer[0] == 0) return answer[0].toString();
  else return answer.toString();
}
