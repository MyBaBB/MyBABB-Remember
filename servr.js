 
const express = require('express');
const { createServer } = require('vite');
const history = require('connect-history-api-fallback');

async function startServer() {
  const app = express();

// Use the history fallback middleware
  app.use(history());

// Create Vite server in middleware mode
  const vite = await createServer({
    server: { middlewareMode: 'html' },
  });

// Use Vite's connect instance as middleware
  app.use(vite.middlewares);

const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

startServer();