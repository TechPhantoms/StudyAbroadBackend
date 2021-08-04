const mongoose = require('mongoose');

const Comment = mongoose.model('Comment', {
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        // required: true

    },
    university: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Universities',
        // required: true
    },
    comment: {
        type: String,
        // required: true
    },
    commentReply: {
        type: String,
        // required: true
    }

    
})

module.exports = Comment