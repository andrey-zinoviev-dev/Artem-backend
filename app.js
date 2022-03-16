require('dotenv').config();
const cors = require('cors');

const express = require('express');
const { router } = require('./routes/routes');
const {PORT = 3000} = process.env;

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(PORT);
});
