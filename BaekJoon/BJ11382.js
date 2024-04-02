const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const numbers = [];

rl.on('line', (input) => {
    for (const num of input.split(" ")) {
        numbers.push(parseInt(num));
    }
})

rl.on('close', () => {
    console.log(numbers.reduce((a, c) => a + c));

    process.exit();
})
