function solution(arrayA, arrayB) {
  let answer = 0;
  let minA = arrayA[0];
  let minB = arrayB[0];
  let maxA = 0;
  let maxB = 0;
  arrayA.forEach((e, i) => {
    if (minA > e) minA = e;
    if (minB > arrayB[i]) minB = arrayB[i];
    if (maxA < e) maxA = e;
    if (maxB < arrayB[i]) maxB = arrayB[i];
  });
  let arrA = [];
  let arrB = [];
  const length = minA >= minB ? minA : minB;
  for (i = 2; i <= length; i++) {
    if (minA % i === 0 && i <= minA) arrA.push(i);
    if (minB % i === 0 && i <= minB) arrB.push(i);
  }
  let count = 0;
  arrA.forEach((e) => {
    count = 0;
    arrayA.forEach((v, i) => {
      if (v % e === 0 && arrayB[i] % e !== 0) {
        count++;
      }
    });
    if (count === arrayA.length) {
      if (e > answer) answer = e;
    }
  });
  arrB.forEach((e) => {
    count = 0;
    arrayB.forEach((v, i) => {
      if (v % e === 0 && arrayA[i] % e !== 0) {
        count++;
      }
    });
    if (count === arrayB.length) {
      if (e > answer) answer = e;
    }
  });
  return answer;
}
