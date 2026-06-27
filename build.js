const fs = require('fs');

const key = process.env.FINNHUB_API_KEY;
if (!key) {
  console.error('Error: FINNHUB_API_KEY environment variable is not set.');
  process.exit(1);
}

let html = fs.readFileSync('index.html', 'utf8');
html = html.replace('%%FINNHUB_API_KEY%%', key);
fs.writeFileSync('index.html', html);

console.log('✓ Finnhub API key injected successfully.');
