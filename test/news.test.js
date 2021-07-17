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

//news update testing
it('Update News', async() => {
    return News.findOneAndUpdate({_id : id},
        {$set : {NewsTitle: 'Country'}},
        {
            new:true
        })
        .then((update) =>{
            expect(update.NewsTitle).toEqual('Country')
        })
})

//news delete testing
it('delete testing', async() =>{
    const status = await News.deleteOne({_id : id})
    expect(status.ok).toBe(1);
})



})