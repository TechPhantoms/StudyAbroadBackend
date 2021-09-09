const mongoose = require('mongoose')

const MockTest = mongoose.model('MockTest', {
    readingTitle : {
        type : String
    },
    readingPara : {
        type : String
    },
    rquestion: {
        type : [String]  // ['What is my name?']
    },
    roption: {
        type : [[String]] // [["Sagar","Abidit","Akaas"],[]]
    },
  
    rcorrectAnswer : {
        type : [String]
    }

})

module.exports = MockTest;