function solution(operations) {
  let front = 0;
  let end = 0;
  let arr = [];

  const insert = (num) => {
    // 배열이 빈 경우
    if (front == end) {
      arr[0] = num;
      end += 1;
      return;
    }
    let left = front;
    let right = end;
    let mid = Math.floor((left + right) / 2);
    while (mid >= left && mid <= right) {
      mid = Math.floor((left + right) / 2);
      if (arr[mid] > num) {
        if (arr[mid - 1] == undefined) {
          const temp = [num];
          arr = temp.concat(arr);
          end += 1;
          break;
        }
        if (arr[mid - 1] < num) {
          const temp = [...arr.slice(0, mid), num];
          arr = temp.concat(arr.slice(mid, end));
          end += 1;
          break;
        }
        right = mid;
      } else if (arr[mid] < num) {
        if (arr[mid + 1] == undefined) {
          arr.push(num);
          end += 1;
          break;
        }
        if (arr[mid + 1] > num) {
          const temp = [...arr.slice(0, mid + 1), num];
          arr = temp.concat(arr.slice(mid + 1, end));
          end += 1;
          break;
        }
        left = mid;
      } else {
        const temp = [...arr.slice(0, mid), num];
        arr = temp.concat(arr.slice(mid, end));
        end += 1;
        break;
      }
    }
  };

  operations.forEach((e) => {
    const str = e.split(" ");
    const type = str[0];
    const num = Number(str[1]);
    if (type === "I") insert(num);
    else if (type === "D" && arr.length > 0) {
      if (num > 0) arr.pop();
      else if (num < 0) arr.shift();
      end -= 1;
    }
  });

  return arr.length == 0 ? [0, 0] : [arr[arr.length - 1], arr[0]];
}
