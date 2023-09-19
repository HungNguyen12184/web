express = require('express');
const fs = require('fs'); // file system
const app = express();
const path = require('path');
var cors = require('cors');
const port = 3000;
const mysql = require('mysql2');
const { error } = require('console');
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'IMG_LPR',
});

app.get('/api/search', (req, res) => {
    const searchkey = req.query.searchkey;

    let query = '';
    if (searchkey.startsWith('*') && searchkey.endsWith('*')) {
        const searchTerm = searchkey.substring(1, searchkey.length - 1);
        query = `select * from IMG_LPR where plate_number  like  '%${searchTerm}%'`;
        console.log(query);
    } else if (searchkey.startsWith('*')) {
        const searchTerm = searchkey.substring(1);
        query = `SELECT * FROM IMG_LPR WHERE plate_number LIKE '%${searchTerm}'`;
    } else if (searchkey.endsWith('*')) {
        const searchTerm = searchkey.substring(0, searchkey.length - 1);
        query = `SELECT *FROM IMG_LPR WHERE plate_number LIKE '${searchTerm}%'`;
    } else if (searchkey) {
        console.log(searchkey);
        query = `SELECT * FROM IMG_LPR WHERE plate_number = ${searchkey}`;
        console.log(query);
    }

    connection.query(query, (error, results) => {
        if (error) {
            console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Internal server error.' });
            return;
        }
        const formattedResults = results.map((item) => {
            const imageDataBuffer = Buffer.from(item.picture_data, 'base64');
            const imageDataBase64 = imageDataBuffer.toString('base64');
            return {
                userId: item.userId,
                picture_data_base64: imageDataBase64,
                date_time: item.date_update,
                license_plate: item.plate_number,
            };
        });
        res.json({
            data: formattedResults,
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
