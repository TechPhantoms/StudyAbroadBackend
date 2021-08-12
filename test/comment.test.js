const Comment = require('../models/comment_model')
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

describe('Comment Schema Test', () =>{
    var id;
    //insert testing
    it('Comment insert', () =>{
        const comment = {
            'user' : '6110008d4f14ce38e4c87140',
            'university' : '61081f3e3c22f8342495fb14',
            'comment' : 'good',
            'commentReply' : 'thank you', 
        };
        return Comment.create(comment)
        .then((res) =>{
            id = res._id
            expect(res.comment).toEqual('good');
        })
    })

    //Comment update testing
    it('Update Comment', async() =>{
        return Comment.findOneAndUpdate({_id : id},
            {$set : {comment : 'babbal'}},
            {
                new : true
            })
            .then((update) =>{
                expect (update.comment).toEqual('babbal')
            })
    })

    //delete comment
    it('delete Comments', async() =>{
        const status = await Comment.deleteOne({_id : id})
        expect(status.ok).toBe(1);
    })
})