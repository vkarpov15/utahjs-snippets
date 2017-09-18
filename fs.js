const fs = require('fs');

printMe().
  catch(error => console.error(error));

async function printMe() {
  const contents = await new Promise(function(resolve, reject) {
    const path = __dirname + '/fs.js';
    const opts = { encoding: 'utf8' };

    // Node-style callback API: takes a single callback
    // function that takes 2 params:
    // `error` if an error occurred, and `result` otherwise
    fs.readFile(path, opts, function(error, result) {
      if (error) {
        return reject(error);
      }
      resolve(result);
    });
  });
  // Prints this file
  console.log(contents);
}
