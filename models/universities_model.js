const mongoose = require('mongoose');

const Universities = mongoose.model('Universities', {
    universityImage: {
        type: String
    },
    universityName: {
        type: String
    },
    universityLocation: {
        type: String
    },
    universityType: {
        type: String
    },
    universityRank: {
        type: String
    },
    internationalStudents: {
        type: String
    },
    nationalities: {
        type: String
    },
    totalPrograms: {
        type: String
    },
    acceptanceRate: {
        type: String
    },
    countries: {
        type: String
    },
    studyAbroadPara1: {
        type: String
    },
    studyAbroadPara2: {
        type: String
    },
    studyAbroadPara3: {
        type: String
    },
    studyAbroadPara4: {
        type: String
    },
    whyStudyTitle1:{
        type: String
    },
    whyStudyPara1: {
        type: String
    },
    whyStudyTitle2 :{
        type: String
    },
    whyStudyPara2: {
        type: String
    },
    whyStudyTitle3 :{
        type: String
    },
    whyStudyPara3: {
        type: String
    },
    whyStudyTitle4 :{
        type: String
    },
    whyStudyPara4: {
        type: String
    },
    whyStudyTitle5 :{
        type: String
    },
    whyStudyPara5: {
        type: String
    },
    internationalLifePara1: {
        type: String
    },
    internationalLifePara2: {
        type: String
    },
    internationalLifePara3: {
        type: String
    },
    internationalLifePara4: {
        type: String
    },
    feeInformation1: {
        type: String
    },
    feeInformation2: {
        type: String
    },
    feeInformation3: {
        type: String
    },
    undergraduatefunding : {
        type : String
    },
    undergraduatefundingAmount : {
        type : String
    },
    undergraduatefunding1: {
        type : String
    },
    undergraduatefunding2: {
        type : String
    },
    undergraduatefunding3: {
        type : String
    },
    undergraduatefunding4: {
        type : String
    },
    postgraduatefunding: {
        type : String
    },
    postgraduateAmount : {
        type : String
    },
    postgraduateFunding1 : {
        type : String
    },
    postgraduateFunding2 : {
        type : String
    },
    locationStreetName: {
        type : String
    },
    locationStreetDetails: {
        type : String
    },
})

module.exports = Universities