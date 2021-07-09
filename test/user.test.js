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
            'firstname' : 'Prajwol',
            'lastname' : "Khatri",
            'email' : 'abcd@gmail.com',
            'phone' : '987653423',
            'username': 'Prajwol123',
            'password' : "1212",
        } ;
        return User.create(user)
        .then((res) => {
            id = res._id
            expect(res.firstname).toEqual('Prajwol');
        })
    });

    it('login user', async () => {
        const data ={
                     'username' : 'Prajwol123',
                     'password' : '1212'
                }
        return User.findOne({data});
        expect(status.ok).toBe(1);
        })

    });