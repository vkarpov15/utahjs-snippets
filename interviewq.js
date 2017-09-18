run();

console.log(1);

async function run() {
  console.log(2);

  // Vanilla async/await way to "sleep" for 1 second
  await new Promise(resolve => setTimeout(() => resolve(), 1000));

  console.log(3);
}
