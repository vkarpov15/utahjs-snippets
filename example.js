const fetch = require('node-fetch');

printMyIP().
  catch(error => console.error(error.stack));

async function printMyIP() {
  // Can `await` on calling an async function, because
  // async functions return promises
  console.log(await fetchAsJSON('http://httpbin.org/ip'));
}

async function fetchAsJSON(url) {
  const res = await fetch(url);
  const asJSON = await res.json();
  return asJSON;
}
