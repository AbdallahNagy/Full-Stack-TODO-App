const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('server works');
});

app.listen(3000, () => {
    console.log("server starting on port 3000");
});