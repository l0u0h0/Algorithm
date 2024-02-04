function solution(files) {
  return files.sort((a, b) => {
    const strA = a.match(/(\D+)(\d+)/);
    const strB = b.match(/(\D+)(\d+)/);

    if (strA[1].toLowerCase() == strB[1].toLowerCase()) {
      return parseInt(strA[2]) - parseInt(strB[2]);
    }
    if (strA[1].toLowerCase() < strB[1].toLowerCase()) return -1;
    else return 1;
  });
}
