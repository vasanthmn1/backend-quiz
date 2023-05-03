const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
    topic: {
        type: String,
        required: true
    },
    level: {
        type: String,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    perQuestionScore: {
        type: Number,
        required: true
    },
    questions: {
        type: [{
            question: String,
            choices: [String],
            correctAnswer: String
        }],
        required: true
    }
});


module.exports = mongoose.model('Quiz', quizSchema)
