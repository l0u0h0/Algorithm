function solution(bridge_length, weight, truck_weights) {
  let time = 1;
  let cur_weight = 0;

  const bridge = [];
  const trucks = [...truck_weights];

  while (trucks.length || bridge.length) {
    if (bridge.length < bridge_length && cur_weight + trucks[0] <= weight) {
      const truck = trucks.shift();
      cur_weight += truck;
      bridge.push([truck, time + bridge_length]);
      time += 1;
    } else {
      const cur = bridge.shift();
      if (time < cur[1]) time = cur[1];
      cur_weight -= cur[0];
    }
  }

  return time;
}
