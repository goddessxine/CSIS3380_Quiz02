const mongoose = require('mongoose');
(express = require('express')), (app = express());

const port = process.env.PORT || 3000;

mongoose.connect(
  'mongodb+srv://<goddessxine>:<admin123456>@projects.zyhr1im.mongodb.net/“Exams23001'
);

 
// Create a Schema object
const quizexamRecords = new mongoose.Schema({
    name: {type: String, default: ''},
    sid: {type: Number, default: 0}
    })


// This Activitry creates the collection called activitimodels
const Quizexamrecordsmodel = mongoose.model('QuizExamRecords', quizexamRecords);

const student = new Quizexamrecordsmodel({
    name: "Kristine - Jean Soriano",
    sid: 300351939,
  });

app.get('/', (req, res) => {

  Quizexamrecordsmodel.insertMany([student]);

  res.send(`<h1>Document  Added</h1>`);
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});


