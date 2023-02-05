import "./lib/db";
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const port = process.env.PORT || 3333;


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'uploads')));

const usersRouter = require('./routes/users');
const petsRouter = require('./routes/pets')


app.get("/", async (req, res) => {
  res.json({ message: "Hello from express" });
});
app.use('/', usersRouter);
app.use('/',petsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
