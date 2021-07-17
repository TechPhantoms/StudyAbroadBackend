const News = require('../models/news_model')
const mongoose = require('mongoose')

const url ='mongodb://127.0.0.1:27017/Test' ;

beforeAll(async () =>{
    await mongoose.connect(url,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    })
})

afterAll(async () => {
    await mongoose.connection.close();
})

describe("News Schema Test", () =>{
    var id;
    //insert testing
    it('News insert', () => {
        
    const news = {
        'Newsimage' : 'img',
        'NewsTitle' : 'University',
        'NewsDetails' : 'Coventry University'
    };
    return News.create(news)
    .then((res) =>{
        id = res._id
        expect(res.NewsTitle).toEqual('University');
    })
})
})