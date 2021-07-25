const mongoose = require('mongoose');

const Universities = mongoose.model('Universities', {
    universityImage : {
        type : String
    },
    universityName : {
        type : String
    },
    universityLocation : {
        type : String
    },
    universityType : {
        type : String
    },
    universityRank : {
        type : String
    },
    internationalStudents : {
        type : String
    },
    nationalities : {
        type : String
    },
    totalPrograms: {
        type : String
    },
    acceptanceRate : {
        type : String
    },
    countries: {
        type : String
    }
})

module.exports = Universities