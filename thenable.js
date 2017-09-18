run().
  catch(error => console.error(error));

async function run() {
  const message = 'Hello, World';

  // The letter of the law is `await` checks for an object
  // with a `then()` function.
  // So no problems using async/await with bluebird, etc.
  const value = await {
    then: resolve => setTimeout(() => resolve(message), 1000)
  };
  console.log(value);
}
