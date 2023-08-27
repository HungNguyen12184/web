const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'hung1234',
    database: 'IMG_LPR',
});
connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
    for (let i = 1; i <= 1; i++) {
        const imagePath = path.join(
            __dirname,
            'src',
            'public',
            '2023-07-28T16_53_19.png',
        );
        const pictureData = fs.readFileSync(imagePath);
        const query =
            'INSERT INTO IMG_LPR(picture_data, date_update) VALUES (?,NOW())';
        connection.query(query, [pictureData]);
    }
});
