require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();
const port = process.env.PORT || 5008


// Middleware 
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send({ "status": "API Server is running" })
})

app.listen(port, () => {
    console.log(`Toys API server is running on ${port}`);
})