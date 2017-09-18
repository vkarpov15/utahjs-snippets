run();

console.log(1);

async function run() {
  console.log(await Promise.resolve(2));

  console.log(3);
}
