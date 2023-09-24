const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, 'images', filename);
  
    res.sendFile(imagePath, err => {
      if (err) {
        // Handle error (e.g., image not found)
        res.status(404).send('Image not found');
      }
    });
  });


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
