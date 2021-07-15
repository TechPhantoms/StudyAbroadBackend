const mongoose = require('mongoose');

const News = mongoose.model('News',{
    Newsimage : {
        type : String
    },
    NewsTitle : {
        type: String
    },
    NewsDetails: {
        type: String
    },

})

module.exports = News;