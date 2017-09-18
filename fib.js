fib().catch(error => console.error(error));

async function fib() {
  let back = 1;
  let cur = 1;
  console.log(back);
  for (let i = 1; i < 100; ++i) {
    // Pause until next tick
    await Promise.resolve();
    console.log(cur);
    let tmp = cur;
    cur = back + cur;
    back = tmp;
  }
}
