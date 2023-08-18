const express = require('express');
const fs = require('fs');
const app = express();
const path = require('path');
const cors = require('cors');
const port = 3000;
app.use(cors());
const imageDir = '/Users/lieunguyen/Documents/image';

app.get('/api/image/:imageName', (req, res) => {
    const imageName = req.params.imageName;
    const imagePath = path.join(imageDir, imageName);

    fs.readFile(imagePath, (err, data) => {
        if (err) {
            res.status(404).json({ error: 'Image not found.' });
        } else {
            res.writeHead(200, { 'Content-Type': 'image/png' });
            res.end(data);
        }
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
