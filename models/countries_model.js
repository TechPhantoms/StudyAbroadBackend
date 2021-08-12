const mongoose = require('mongoose');

const Countries = mongoose.model('Countries',{
    countryImage : {
        type: String
    },
    countryName : {
        type : String
    },
    countryPicture : {
        type: String
    },
    whyStudy : {
        type : String
    },
    programs : {
        type : String
    },
    subjects : {
        type : String
    },
    cost : {
        type : String
    },
    qualifications : {
        type : String
    },
    languageTest : {
        type : String
    },
    studentVisa : {
        type : String
    },
    howStudy : {
        type : String
    }
})

module.exports = Countries;