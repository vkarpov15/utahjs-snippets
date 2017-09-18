const fetch = require('node-fetch');

printStockPrices().
  catch(error => console.error(error.stack));

async function printStockPrices() {
  const tickers = ['AAPL', 'MSFT', 'ORCL'];
  for (const ticker of tickers) {
    // Can await in for/of
    const data = await fetchAsJSON(formatYahooAPIUrl(ticker));
    console.log(ticker, data.query.results.quote.LastTradePriceOnly);
  }
}

async function fetchAsJSON(url) {
  let res;
  try {
    // If `fetch()` promise resolves, `res` gets set
    // and we move on
    res = await fetch(url);
  } catch (error) {
    // If `fetch()` promise resolves,
    // `await` throws an error.
    console.log(error);
    return null;
  }
  const asJSON = await res.json();
  return asJSON;
}

function formatYahooAPIUrl(ticker) {
  return 'https://query.yahooapis.com/v1/public/yql?' +
    'q=select%20*%20from%20yahoo.finance.quotes%20' +
    `where%20symbol%20in%20(%22${ticker}%22)&` +
    'format=json&' +
    'env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&' +
    'callback=';
}
