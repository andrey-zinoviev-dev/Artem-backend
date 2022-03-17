require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');

const express = require('express');
const { router } = require('./routes/routes');
const {PORT = 3000} = process.env;

const app = express();

app.use(cors({
  origin: "http://127.0.0.1:5500",
  allowedHeaders: 'Content-Type, Authorization',
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use('/', router);

app.listen(PORT, () => {
  console.log(PORT);
});
