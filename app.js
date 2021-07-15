const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database/db')
const cors = require('cors')
const User_route = require('./routes/user_routes')
const News_route = require('./routes/news_route')
const { static } = require('express');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/images',static(__dirname + "/images"))
app.use(User_route);
app.use(News_route);




app.listen(90)