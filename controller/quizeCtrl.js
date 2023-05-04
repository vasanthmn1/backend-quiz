const asyncHandler = require('express-async-handler');
const quizmodel = require('../model/quizmodel');



const createquiz = asyncHandler(async (req, res) => {
    const addData = await quizmodel.create({
        ...req.body
    });
    res.status(200).json(addData);
});


const gerquiz = asyncHandler(async (req, res) => {
    const addData = await quizmodel.find();
    res.status(200).json(addData);
});

module.exports = {
    createquiz,
    gerquiz
}