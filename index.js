// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const quotes = [
  "Keep going. Everything you need will come to you.",
  "Stay positive, work hard, make it happen.",
  "Your only limit is your mind.",
  "Success is not final, failure is not fatal.",
  "Dream big. Start small. Act now."
];

app.get('/', (req, res) => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <meta property="og:title" content="Motivational Quote" />
        <meta property="og:description" content="${quote}" />
        <meta name="fc:frame" content="vNext" />
        <meta name="fc:frame:image" content="https://dummyimage.com/600x300/000/fff&text=${encodeURIComponent(quote)}" />
        <meta name="fc:frame:button:1" content="Get Another" />
        <meta name="fc:frame:post_url" content="https://your-vercel-url.vercel.app/" />
        <title>Quote Generator</title>
      </head>
      <body>
        <h1>${quote}</h1>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});