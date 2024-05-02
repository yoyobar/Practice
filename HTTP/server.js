const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;
let data = [
    {
        id: 1,
        name: 'kim',
    },
    {
        id: 2,
        name: 'park',
    },
];

app.use(express.json());
app.use(cors());

app.get('/users', (req, res) => {
    res.json(data);
});

app.post('/users', (req, res) => {
    let postData = [];

    Object.values(req.body).forEach((key, index) => {
        if (data[index].id === Number(key)) {
            data[index].name = key;
        }
    });
});

app.listen(port, () => {
    console.log(`Server running on ${port}`);
});
