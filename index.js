require('dotenv').config();
const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const app = express();


// Middleware 
app.use(cors());
app.use(express.json());

