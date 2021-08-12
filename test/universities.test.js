const Universities = require('../models/universities_model')
const mongoose = require('mongoose')

const url = 'mongodb://127.0.0.1:27017/Test';

beforeAll(async () => {
    await mongoose.connect(url, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    })
})

afterAll(async () => {
    await mongoose.connection.close();
})

describe("Universities Schema Test", () => {
    var id;
    //insert testing
    it('Universities insert', () => {
        const universities = {
            'universityImage': 'img',
            'universityName': 'abc',
            'universityLocation': 'nepal',
            'universityType': 'private'
        };
        return Universities.create(universities)
            .then((res) => {
                id = res._id
                expect(res.universityName).toEqual('abc');
            })
    })

    //university update testing
    it('Update countries', async () => {
        return Universities.findOneAndUpdate({ _id: id },
            { $set: { universityName: 'Efg' } },
            {
                new: true
            })
            .then((update) => {
                expect(update.universityName).toEqual('Efg')
            })
    })

    //delete universities
    it('delete universities', async () => {
        const status = await Universities.deleteOne({ _id: id })
        expect(status.ok).toBe(1);
    })
})