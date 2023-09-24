const express = require('express');
const app = express();

function errorHandler(err, req, res, next) {
  res.status(400).json({ error: 'Invalid input' });
}

function tempConvert(req, res, next) {
  const celsius = parseFloat(req.query.celsius);

  if (isNaN(celsius)) {
    return next(new Error('Invalid input for Celsius temperature'));
  }

  const fahrenheit = (celsius * 9/5) + 32;
  let feedback = '';

  if (fahrenheit < 32) {
    feedback = 'Freezing';
  } else if (fahrenheit < 60) {
    feedback = 'Cool';
  } else if (fahrenheit < 80) {
    feedback = 'Warm';
  } else {
    feedback = 'Hot';
  }

  res.json({
    celsius: celsius,
    fahrenheit: fahrenheit,
    feedback: feedback
  });
}

app.use(errorHandler);

app.get('/convert', tempConvert);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
