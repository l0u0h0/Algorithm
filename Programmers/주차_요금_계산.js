function solution(fees, records) {
  let answer = [];
  const map = new Map();
  const test = records[0].split(" ")[1];
  records.forEach((e) => {
    const data = e.split(" ");
    if (map.has(data[1])) {
      if (data[2] === "IN") {
        map.set(data[1], map.get(data[1]) + "/IN_" + data[0]);
      } else {
        map.set(data[1], map.get(data[1]) + "/OUT_" + data[0]);
      }
    } else {
      map.set(data[1], "IN_" + data[0]);
    }
  });

  let arr = [...map];

  arr.sort();

  let prize = new Map(arr);
  let idx = 0;
  for (const [key, value] of prize) {
    let state = "IN";
    let data = value.split("/");
    let min = 0;
    let in_time = "";
    let out_time = "";

    data.forEach((e, i) => {
      if (e.split("_")[0] === state) {
        if (!data[i + 1]) {
          out_time = "23:59";
          in_time = e.split("_")[1];
          const date1 = new Date(`2022-11-25 ${in_time}`);
          const date2 = new Date(`2022-11-25 ${out_time}`);
          min += parseInt((date2.getTime() - date1.getTime()) / 1000 / 60);
        } else {
          in_time = e.split("_")[1];
        }
      } else {
        out_time = e.split("_")[1];
        const date1 = new Date(`2022-11-25 ${in_time}`);
        const date2 = new Date(`2022-11-25 ${out_time}`);
        min += parseInt((date2.getTime() - date1.getTime()) / 1000 / 60);
      }
    });
    min -= fees[0] > min ? min : fees[0];
    answer[idx] = fees[1] + Math.ceil(min / fees[2]) * fees[3];
    idx++;
  }

  return answer;
}
