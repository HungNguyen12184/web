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
// app.get('/api/data', (req, res) => {
//     const limit = 25;
//     const start = 0;
//     const query =
//         'SELECT userId, picture_data, date_update FROM IMG_LPR LIMIT ' +
//         start +
//         ',' +
//         limit;
//     console.log(query);
//     connection.query(query, (error, results) => {
//         if (error) {
//             console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
//             res.status(500).json({ error: 'Internal server error.' });
//             return;
//         }
//         const formattedResults = results.map((item) => {
//             const imageDataBuffer = Buffer.from(item.picture_data, 'base64');
//             const imageDataBase64 = imageDataBuffer.toString('base64');
//             // Chuyển đổi Buffer thành base64
//             return {
//                 userId: item.userId,
//                 picture_data_base64: imageDataBase64,
//                 date_update: item.date_update,
//             };
//         });

//         res.json(formattedResults);
//     });
// });

app.get('/api/data', (req, res) => {
    const page = req.query.page || 1;
    const totalRecordsPerPage = req.query.totalRecordsPerPage || 25;
    const startRecord = (page - 1) * totalRecordsPerPage;

    const countQuery = 'SELECT COUNT(*) AS totalRecords FROM IMG_LPR';
    console.log(countQuery);

    connection.query(countQuery, (error, countResults) => {
        if (error) {
            console.error('Lỗi khi truy vấn số lượng bản ghi:', error);
            res.status(500).json({ error: 'Internal server error.' });
            return;
        }

        const totalRecords = countResults[0].totalRecords;
        const totalPages = Math.ceil(totalRecords / totalRecordsPerPage);

        const query = `SELECT * FROM IMG_LPR LIMIT ${startRecord}, ${totalRecordsPerPage}`;
        connection.query(query, (error, results) => {
            if (error) {
                console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
                res.status(500).json({ error: 'Internal server error.' });
                return;
            }
            const formattedResults = results.map((item) => {
                const imageDataBuffer = Buffer.from(
                    item.picture_data,
                    'base64',
                );
                const imageDataBase64 = imageDataBuffer.toString('base64');
                return {
                    userId: item.userId,
                    picture_data_base64: imageDataBase64,
                    date_update: item.date_update,
                };
            });
            console.log(formattedResults.length);
            res.json({
                currentPage: page,
                total: totalPages,
                data: formattedResults,
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
