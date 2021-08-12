const mongoose = require('mongoose')

const MockTest = mongoose.model('MockTest', {
    readingTitle : {
        type : String
    },
    readingPara1 : {
        type : String
    },
    readingPara2 : {
        type : String
    },
    readingPara3 : {
        type : String
    },
    readingPara4 : {
        type : String
    },
    readingPara5 : {
        type : String
    },
    readingTitle : {
        type : String
    },
    rquestion: {
        type : String
    },
    roption1: {
        type : String
    },
    roption2 : {
        type : String
    },
    roption3 : {
        type : String
    },
    roption4 : {
        type : String
    },
    rcorrectAnswer : {
        type : String
    }
})

module.exports = MockTest;