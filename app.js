const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database/db')
const cors = require('cors')
const User_route = require('./routes/user_routes')

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use(User_route);




app.listen(90)