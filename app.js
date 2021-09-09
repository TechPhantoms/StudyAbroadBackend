const express = require('express');
const bodyParser = require('body-parser')
const db = require('./database/db')
const cors = require('cors')
const User_route = require('./routes/user_routes')
const News_route = require('./routes/news_route')
const Countries_route = require('./routes/countries_route')
const Universities_route = require('./routes/universities_route')
const Comment_route = require('./routes/comment_route')
const MockTest = require('./routes/mocktest_route')
const MyWishList = require('./routes/wishList_route')
const { static } = require('express');


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.json());
app.use('/images',static(__dirname + "/images"))
app.use(User_route);
app.use(News_route);
app.use(Countries_route);
app.use(Universities_route);
app.use(Comment_route);
app.use(MockTest);
app.use(MyWishList);




app.listen(90)