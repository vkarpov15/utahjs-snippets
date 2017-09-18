const fetch = require('node-fetch');

// Mocha works great, because `it()` supports
// promises since mocha 1.18.0 (early 2014)
describe('login()', function() {
  it('success', async function() {
    const params = {
      email: 'test@test.com',
      password: 'helloworld'
    };

    const token = await fetch('/login', params).
      then(res => res.json());

    assert.ok(token);
    assert.ok(token._id);
  });
});
