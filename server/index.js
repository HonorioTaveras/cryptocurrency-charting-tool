/* eslint-disable no-console */
const express = require('express');
const cors = require('cors');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config();

const PORT = process.env.PORT || 3456;

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '/../public')));
app.use(cors());

app.get('/', (req, res) => 'hello world from get request');

app.listen(PORT, () => console.log(`Listening at http://localhost:${PORT}`));
