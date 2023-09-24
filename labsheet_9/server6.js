const express = require('express');
const app = express();

function errorHandler(err, req, res, next) {
  res.status(400).json({ error: 'Invalid input' });
}

function calculateDiscount(req, res, next) {
  const originalPrice = parseFloat(req.query.price);
  const discountPercentage = parseFloat(req.query.discount);

  if (isNaN(originalPrice) || isNaN(discountPercentage) || discountPercentage < 0 || discountPercentage > 100) {
    return next(new Error('Invalid input'));
  }

  const discountedPrice = originalPrice - (originalPrice * (discountPercentage / 100));
  const discountAmount = originalPrice - discountedPrice;

  res.json({
    originalPrice: originalPrice,
    discountPercentage: discountPercentage,
    discountAmount: discountAmount,
    discountedPrice: discountedPrice
  });
}

app.use(errorHandler);

app.get('/calculateDiscount', calculateDiscount);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
