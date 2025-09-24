const express = require('express');
const app = express();
require('dotenv').config();
require('./models/dbConnection')();
const cors = require('cors');
const PORT = process.env.PORT || 8080;
const authRouter = require('./routes/authRouter');

app.get('/', (req, res) => {
    res.send('Hello from the backend!');
});

app.use(cors());
app.use(express.json());
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});