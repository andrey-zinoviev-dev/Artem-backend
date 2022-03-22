require('dotenv').config();
const cors = require('cors');
const cookieParser = require('cookie-parser');
// const path = require('path');
const path = require('path');
const express = require('express');

const { router } = require('./routes/routes');
// const { path } = require('express/lib/application');
const {PORT = 3000} = process.env;
// console.log(path.join(__dirname, 'public'));

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  res.set('Cache-Control', 'no-store');
  next();
});

// app.use(express.static(path.join(__dirname, 'public')))
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
