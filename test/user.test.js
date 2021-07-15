// path and mongoose model

const User = require('../models/user_models')
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Test';

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

describe("User Schema Test", () =>{
 
    var id;
   //insert testing
    it('Add user', () => {
        const user ={
            'firstname' : 'Sirish',
            'lastname' : "Khatri",
            'email' : 'abcd@gmail.com',
            'phone' : '987653423',
            'username': 'Sirish123',
            'password' : "1212",
        } ;
        return User.create(user)
        .then((res) => {
            id = res._id
            expect(res.firstname).toEqual('Sirish');
        })
    });

    it('login user', async () => {
        const data ={
                     'username' : 'Sirish123',
                     'password' : '1212'
                }
        return User.findOne({data});
        expect(status.ok).toBe(1);
        })

    });