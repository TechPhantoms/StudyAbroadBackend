const Countries = require('../models/countries_model')
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Test' ;

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

describe("Countries Schema Test", () =>{
    var id;
    //insert testing
    it('Countries insert', () =>{
        
        const countries ={
            'countryImage' : 'img',
            'countryName' : 'Nepal',
            'whyStudy' : 'sldkf',
            'programs' : 'sfd',
            'subjects' : 'sldjnsd',
            'cost' : '20000',
            'qualifications' : 'wsdfvkmsd',
            'languageTest' : 'asd',
            'studentVisa' : 'studentVisa',
            'howStudy' : 'sdsd'
        };
        return Countries.create(countries)
        .then((res) =>{
            id = res._id
            expect(res.countryName).toEqual('Nepal');
        })
    })

    //countries update testing
    it('Update countries', async() =>{
        return Countries.findOneAndUpdate({_id : id},
            {$set : {countryName : 'India'}},
            {
                new :true
            })
            .then((update) =>{
                expect (update.countryName).toEqual('India')
            })
    })

    //delete countries
    it('delete countries', async() =>{
        const status = await Countries.deleteOne({_id : id})
        expect(status.ok).toBe(1);
    })
})