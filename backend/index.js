const sequelize = require("./db/database");
const express = require('express');
const app = express();
const router = require('./routes/auth');
const app_router = require('./routes/app');
const bodyparser = require("body-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
require('dotenv').config();

sequelize.sync();

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))


app.set('view engine', 'ejs');

app.use(cookieParser('keyboard cat'))
  
// routes

app.use('/', router);
app.use('/api', verifyToken,app_router);


// Verify Token
function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      req.token = bearerToken;
      next();
    } else {
      res.sendStatus(403);
    }
}

const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is listening on port http://localhost:${port}...`)
);



  
