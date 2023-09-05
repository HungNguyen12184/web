const express = require('express');
const app = express();
const cors = require('cors');
const mysql = require('mysql2');

app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'IMG_LPR',
});

connection.connect((err) => {
    if (err) {
        console.error('Lỗi khi kết nối đến cơ sở dữ liệu:', err);
        return;
    }
    console.log('Kết nối đến cơ sở dữ liệu thành công.');
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
            const bufferData = item.picture_data;
            const base64Image = bufferData.toString('base64'); // Chuyển đổi Buffer thành base64
            return {
                userId: item.userId,
                picture_data_base64: base64Image,
                date_update: item.date_update,
            };
        });

        res.json(formattedResults);
        console.log(results);
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
