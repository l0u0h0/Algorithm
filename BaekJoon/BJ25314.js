const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

let N;

rl.on("line", (input) => {
  N = parseInt(input);
})

rl.on("close", () => {
  let str = "";

  for (let i = 0; i < N; i += 4) str += "long ";

  console.log(str + "int");

  process.exit();
})
