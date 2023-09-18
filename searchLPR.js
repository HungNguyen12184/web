express = require('express');
const fs = require('fs'); // file system
const app = express();
const path = require('path');
var cors = require('cors');
const port = 8080;
const mysql = require('mysql2');
const { error } = require('console');
app.use(cors());

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'IMG_LPR',
});

// app.get('/api/search', (req, res) => {
//     const searchkey = req.query.searchkey;

//     let query = '';
//     if (searchkey.startsWith('*') && searchkey.endsWith('*')) {
//         // Tìm kiếm với giá trị ở bất kỳ vị trí nào
//         const searchTerm = searchkey.substring(1, searchkey.length - 1);
//         query = `select userId,plate_number from IMG_LPR where plate_number  like  '%${searchTerm}%'`;
//         console.log(query);
//     } else if (searchkey.startsWith('*')) {
//         // Tìm kiếm với giá trị ở cuối
//         const searchTerm = searchkey.substring(1);
//         query = `SELECT userId,plate_number FROM IMG_LPR WHERE plate_number LIKE '%${searchTerm}'`;
//     } else if (searchkey.endsWith('*')) {
//         // Tìm kiếm với giá trị ở đầu
//         const searchTerm = searchkey.substring(0, searchkey.length - 1);
//         query = `SELECT userId,plate_number FROM IMG_LPR WHERE plate_number LIKE '${searchTerm}%'`;
//     } else {
//         // Tìm kiếm với giá trị chính xác
//         query = `SELECT userId,plate_number FROM IMG_LPR WHERE plate_number = '${searchkey}'`;
//     }

//     connection.query(query, (error, results) => {
//         if (error) {
//             console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
//             res.status(500).json({ error: 'Internal server error.' });
//             return;
//         }
//         console.log(results);
//         res.json(results);
//     });
// });

app.get('/api/search', (req, res) => {
    const searchkey = req.query.searchkey;
    let query = '';
    // const query = `SELECT userId,plate_number FROM IMG_LPR WHERE plate_number  like  '%${searchkey}%'`;
    // Tìm kiếm với giá trị chính xác
    // const query = `SELECT userId,plate_number FROM IMG_LPR WHERE plate_number = ${searchkey}`;
    if (searchkey.startsWith('*') && searchkey.endsWith('*')) {
        // Tìm kiếm với giá trị ở bất kỳ vị trí nào
        const searchTerm = searchkey.substring(1, searchkey.length - 1);
        query = `select userId,plate_number from IMG_LPR where plate_number  like  '%${searchTerm}%'`;
        console.log(query);
    }
    console.log(query);
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Lỗi khi truy vấn cơ sở dữ liệu:', error);
            res.status(500).json({ error: 'Internal server error.' });
            return;
        }
        console.log(results);
        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
