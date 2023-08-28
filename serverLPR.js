const express = require('express');
const fs = require('fs'); // file system
const app = express();
const path = require('path');
var cors = require('cors');
const port = 3000;
const mysql = require('mysql2');
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'IMG_LPR',
});

app.get('/api/image/:userId', (req, res) => {
    const userId = req.params.userId;
    const query =
        'SELECT picture_data, date_update FROM IMG_LPR WHERE userId = ?';
    connection.query(query, [userId], (error, results) => {
        if (error) {
            console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Internal server error.' });
            return;
        }

        if (results.length === 0) {
            res.status(404).json({ error: 'Image not found.' });
            return;
        }

        const imageData = results[0].picture_data;
        res.writeHead(200, { 'Content-Type': 'image/png' });
        res.end(imageData);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
