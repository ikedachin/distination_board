const express = require("express");

const hostname = "127.0.0.1";
const PORT = 5000;

const app = express();
app.use(express.static("./static"));

// app.listen(PORT, hostname, console.log('サーバーが起動しました'));


const start = async () => {
    try {
        await app.listen(PORT, hostname, console.log('サーバーが起動しました'));
    } catch (err) {
        console.log(err);
    }

};

start();