const sequelize = require("./db/database");
const express = require('express');
const app = express();
const auth_router = require('./routes/auth');
const provider_auth = require('./routes/provider_auth');
const app_router = require('./routes/app');
const provider_app_router = require('./routes/provider_app');
const bodyparser = require("body-parser");
const session = require("express-session");
const jwt = require('jsonwebtoken');
var cookieParser = require('cookie-parser');
require('dotenv').config();
const { verifyAccessToken } = require('./helpers/jwt_helper')

//sequelize.sync();

// middleware
app.use(express.static('./public'));
app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');

app.use(cookieParser('keyboard cat'))
  
// routes

//customer
app.use('/', auth_router);
app.use('/api',app_router);

//provider

app.use('/provider', provider_auth);
app.use('/provider/api',provider_app_router);


const port = process.env.PORT || 3000;

app.listen(port, () =>
  console.log(`Server is listening on port http://localhost:${port}...`)
);



  
