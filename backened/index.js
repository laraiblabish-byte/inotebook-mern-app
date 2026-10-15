const express = require('express');
const connectToMongo = require('./db');

connectToMongo();

const app = express();
const port = 5000;

// Body parser middleware
app.use(express.json());

// Auth Route
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(port, () => {
    console.log(`iNotebook backened at http://localhost:${port}`);
});