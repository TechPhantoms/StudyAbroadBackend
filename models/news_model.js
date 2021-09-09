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
    title1:{
        type: String
    },
    content1: {
        type: String
    },
    title2:{
        type: String
    },
    content2: {
        type: String
    },
    title3:{
        type: String
    },
    content3: {
        type: String
    },
    title4:{
        type: String
    },
    content4: {
        type: String
    },

})

module.exports = News;