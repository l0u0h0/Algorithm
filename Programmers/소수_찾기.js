function solution(numbers) {
  var answer = 0;
  const checkNum = Array.from({ length: 10000000 }, () => false);
  const number = numbers.split("");

  const isPrimeNum = (str) => {
    const num = Number(str);

    if (checkNum[num] || num <= 1) return false;
    checkNum[num] = true;

    for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
      if (num % i == 0) return false;
    }

    return true;
  };

  const recu = (arr, size, visited) => {
    let str = "";
    arr.forEach((e) => (str += number[e]));
    if (isPrimeNum(str)) {
      answer += 1;
    }
    if (arr.length == size) return;
    for (let i = 0; i < size; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      recu([...arr, i], size, visited);
      visited[i] = false;
    }
  };

  for (let i = 0; i < numbers.length; i++) {
    const arr = [i];
    const visited = Array.from({ length: numbers.length }, () => false);
    visited[i] = true;
    recu(arr, numbers.length, visited);
    visited[i] = false;
  }

  return answer;
}
