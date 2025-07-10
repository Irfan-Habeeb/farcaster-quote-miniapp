export default function handler(req, res) {
  const quotes = [
    "Keep going. Everything you need will come to you.",
    "Stay positive, work hard, make it happen.",
    "Your only limit is your mind.",
    "Success is not final, failure is not fatal.",
    "Dream big. Start small. Act now."
  ];

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`<!DOCTYPE html>
<html>
  <head>
    <meta property="og:title" content="Motivational Quote" />
    <meta property="og:description" content="${quote}" />
    <meta name="fc:frame" content="vNext" />
    <meta name="fc:frame:image" content="https://dummyimage.com/600x300/000/fff&text=${encodeURIComponent(quote)}" />
    <meta name="fc:frame:button:1" content="Get Another" />
    <meta name="fc:frame:post_url" content="https://farcaster-quote-miniapp.vercel.app/api" />
    <title>Quote Generator</title>
  </head>
  <body>
    <h1 style="text-align:center;font-family:sans-serif;margin-top:50px;">${quote}</h1>
  </body>
</html>`);
}