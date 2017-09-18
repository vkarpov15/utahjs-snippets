const { MongoClient } = require('mongodb');
const express = require('express');

run().catch(error => console.error(error.stack));

async function run() {
  const app = express();

  app.get('*', wrap(async function(req, res) {
    throw new Error('woops');
  }));

  app.listen(3000);
  console.log('App listening');
}

function wrap(fn) {
  return function(req, res, next) {
    // Make sure to `.catch()` any errors and pass them
    // along to the `next()` middleware in the chain
    fn(req).
      then(returnVal => res.send(returnVal)).
      catch(next);
  };
}
