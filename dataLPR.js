const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'img_data',
});
const createsTable =
    ' CREATE TABLE img_data  ( userId INT AUTO_INCREMENT PRIMARY KEY, picture_data LONGBLOB, date_update TIME)';

connection.query(createsTable, (error) => {
    if (error) {
        console.error('lỗi khi tạo ', error);
    }
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    for (let i = 1; i <= 20000; i++) {
        const imagePath = path.join(
            __dirname,
            'src',
            'public',
            '2023-07-28T16_53_19.png',
        );
        const pictureData = fs.readFileSync(imagePath);
        const query =
            'INSERT INTO img_data(picture_data, date_update) VALUES (?,NOW())';
        connection.query(query, [pictureData]);
    }
});
