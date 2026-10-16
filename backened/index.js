const express = require('express');
const connectToMongo = require('./db');
var cors = require('cors')

connectToMongo();

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

// Auth Route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook backened at http://localhost:${port}`);
});