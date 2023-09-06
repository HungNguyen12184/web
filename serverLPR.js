express = require('express');
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

app.get('/api/data', (req, res) => {
    const query =
        'SELECT userId, picture_data, date_update FROM IMG_LPR LIMIT 100';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Internal server error.' });
            return;
        }
        const formattedResults = results.map((item) => {
            const imageDataBuffer = results[0].picture_data;
            const imageDataBase64 = imageDataBuffer.toString('base64');
            // Chuyển đổi Buffer thành base64
            return {
                userId: item.userId,
                picture_data_base64: imageDataBase64,
                date_update: item.date_update,
            };
        });

        res.json(formattedResults);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
