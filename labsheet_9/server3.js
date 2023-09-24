const express = require('express');
const app = express();


const validKey = ['12345678987654321'];

function apiKeyMiddleware(req, res, next) {
  const apiKey = req.headers.authorization;

  if (!apiKey || !validKey.includes(apiKey)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
}

app.use(apiKeyMiddleware);

app.get('/protected', (req, res) => {
  res.json({ message: 'Access granted to protected route' });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
